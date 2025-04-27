<template>
  <canvas ref="canvas" class="fixed top-0 left-0"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// Constants
const FPS = 60;
const BOUNCE_SPEED = 2.0;            
const STAR_CONNECTION_RADIUS = 150;  
const MOUSE_CONNECTION_RADIUS = 250; 
const LINE_WIDTH = 0.5;
const AUTONOMOUS_MOVEMENT = 0.08;  
const RETURN_FORCE = 0.01;         
const STAR_TYPES = {
  TINY: { min: 0.3, max: 1.0, count: 0.60 },  
  SMALL: { min: 1.0, max: 1.8, count: 0.25 }, 
  MEDIUM: { min: 1.8, max: 2.5, count: 0.10 }, 
  LARGE: { min: 2.5, max: 3.5, count: 0.05 }  
};
const NUM_STARS = {
  mobile: 50,     
  desktop: 210    
};

// Space colors for stars
const SPACE_COLORS = {
  blueStar: { h: 210, s: 100, l: 70 },     
  redStar: { h: 350, s: 100, l: 70 },      
  yellowStar: { h: 45, s: 100, l: 80 },    
  purpleStar: { h: 270, s: 100, l: 75 },  
  cyanStar: { h: 180, s: 100, l: 75 }      
};

// Canvas and context references
const canvas = ref(null);
let animationFrameId = null;
let stars = [];
let backgroundStars = []; 
let ctx = null;

// Track mouse position
const mouse = { x: 0, y: 0, active: false };

// Check if device is mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// Generate a random space color
function getSpaceColorHSL() {
  const rand = Math.random();
  if (rand < 0.40) return SPACE_COLORS.blueStar;
  if (rand < 0.60) return SPACE_COLORS.purpleStar;
  if (rand < 0.75) return SPACE_COLORS.cyanStar;
  if (rand < 0.90) return SPACE_COLORS.yellowStar;
  return SPACE_COLORS.redStar;
}

// Convert HSL to RGB components
function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hh = h / 60;
  const x = c * (1 - Math.abs(hh % 2 - 1));
  let r = 0, g = 0, b = 0;
  
  if (0 <= hh && hh < 1)      { r = c; g = x; b = 0; }
  else if (1 <= hh && hh < 2) { r = x; g = c; b = 0; }
  else if (2 <= hh && hh < 3) { r = 0; g = c; b = x; }
  else if (3 <= hh && hh < 4) { r = 0; g = x; b = c; }
  else if (4 <= hh && hh < 5) { r = x; g = 0; b = c; }
  else if (5 <= hh && hh < 6) { r = c; g = 0; b = x; }

  const m = l - c / 2;
  return {
    r: Math.floor((r + m) * 255),
    g: Math.floor((g + m) * 255),
    b: Math.floor((b + m) * 255)
  };
}

// Convert RGB to RGBA string
function rgbaFromRgb(rgb, alpha) {
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
}

// Distance between two points
function distance(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Draw a line between two points
function drawLine(ctx, x1, y1, x2, y2, color, width = LINE_WIDTH) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.stroke();
}

// Draw a glowing effect around a star
function drawGlow(ctx, star, arcFactor, outerFactor) {
  ctx.beginPath();
  ctx.arc(star.x, star.y, star.radius * arcFactor, 0, 2 * Math.PI);
  const glow = ctx.createRadialGradient(
    star.x, star.y, star.radius * 0.5,
    star.x, star.y, star.radius * outerFactor
  );
  glow.addColorStop(0, rgbaFromRgb(star.color.rgb, 0.3));
  glow.addColorStop(1, rgbaFromRgb(star.color.rgb, 0));
  ctx.fillStyle = glow;
  ctx.fill();
}

// Create a nebula-like background
function drawSpaceBackground(ctx) {
  const gradient = ctx.createRadialGradient(
    canvas.value.width / 2, 
    canvas.value.height / 2, 
    0, 
    canvas.value.width / 2, 
    canvas.value.height / 2, 
    Math.max(canvas.value.width, canvas.value.height)
  );
  
  gradient.addColorStop(0, 'rgba(15, 10, 40, 1)');    
  gradient.addColorStop(0.5, 'rgba(10, 5, 25, 1)');   
  gradient.addColorStop(1, 'rgba(0, 0, 10, 1)');     
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
  
  // Draw tiny background stars (static)
  for (const star of backgroundStars) {
    ctx.fillStyle = rgbaFromRgb(star.color.rgb, star.opacity);
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fill();
    
    if (star.radius > 1) {
      drawGlow(ctx, star, 2, 3);
    }
  }
}

// Draw main interactive stars with glow effects
function drawStars(ctx) {
  for (const star of stars) {
    ctx.fillStyle = rgbaFromRgb(star.color.rgb, star.opacity);
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fill();
    if (star.radius > 1.8) {
      drawGlow(ctx, star, 3, 4);
    }
  }
}

// Connect stars with a cosmic web effect
function connectStarToStar(ctx) {
  // Only connect stars on desktop
  if (isMobile()) return;
  
  for (let i = 0; i < stars.length; i++) {
    const starA = stars[i];
    for (let j = i + 1; j < stars.length; j++) {
      const starB = stars[j];
      const dist = distance(starA, starB);
      if (dist < STAR_CONNECTION_RADIUS) {
        const opacity = 1 - (dist / STAR_CONNECTION_RADIUS);
        const color = rgbaFromRgb(starA.color.rgb, opacity * 0.5);
        drawLine(ctx, starA.x, starA.y, starB.x, starB.y, color);
      }
    }
  }
}

// Connect mouse cursor to nearby stars with a cosmic energy effect
function connectMouseToStars(ctx) {
  // Only connect mouse to stars on desktop
  if (isMobile() || !mouse.active) return;
  
  for (const star of stars) {
    const distToMouse = distance(star, mouse);
    if (distToMouse < MOUSE_CONNECTION_RADIUS) {
      const opacity = 1 - (distToMouse / MOUSE_CONNECTION_RADIUS);
      const width = LINE_WIDTH + (opacity * 0.6); 
      const color = rgbaFromRgb(star.color.rgb, opacity * 0.75);
      drawLine(ctx, mouse.x, mouse.y, star.x, star.y, color, width);
      // Apply a pull effect to the star towards the mouse
      const pullStrength = 0.15 * opacity;
      const dx = mouse.x - star.x;
      const dy = mouse.y - star.y;
      star.vx += (dx * pullStrength) / FPS;
      star.vy += (dy * pullStrength) / FPS;
      // Limit velocity
      const maxVel = 30;
      const currentVel = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
      if (currentVel > maxVel) {
        star.vx = (star.vx / currentVel) * maxVel;
        star.vy = (star.vy / currentVel) * maxVel;
      }
    }
  }
}

// Draw occasional shooting stars
function drawShootingStars(ctx) {
  if (Math.random() < 0.0005) { 
    const shootingStar = {
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height * 0.5, 
      length: 20 + Math.random() * 30,
      angle: -Math.PI / 4 + (Math.random() * Math.PI / 2), 
      opacity: 0.8,
      decay: 0.02 + Math.random() * 0.03,
      color: hslToRgb(180 + Math.random() * 60, 100, 90)
    };
    // Draw the shooting star trail
    ctx.beginPath();
    const endX = shootingStar.x + Math.cos(shootingStar.angle) * shootingStar.length;
    const endY = shootingStar.y + Math.sin(shootingStar.angle) * shootingStar.length;
    const gradient = ctx.createLinearGradient(
      shootingStar.x, shootingStar.y,
      endX, endY
    );
    gradient.addColorStop(0, rgbaFromRgb(shootingStar.color, shootingStar.opacity));
    gradient.addColorStop(1, rgbaFromRgb(shootingStar.color, 0));
    ctx.moveTo(shootingStar.x, shootingStar.y);
    ctx.lineTo(endX, endY);
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = gradient;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(shootingStar.x, shootingStar.y, 1.5, 0, 2 * Math.PI);
    ctx.fillStyle = rgbaFromRgb(shootingStar.color, shootingStar.opacity);
    ctx.fill();
  }
}

// Main draw routine
function draw() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  drawSpaceBackground(ctx);
  connectStarToStar(ctx);
  drawStars(ctx);
  connectMouseToStars(ctx);
  drawShootingStars(ctx);
}

// Check if a star is within the canvas boundaries and adjust its position and velocity
function checkStarBoundary(star, maxVal, axis) {
  if (star[axis] < star.radius) {
    star[axis] = star.radius;
    if (axis === 'x') star.vx = -star.vx * 0.9;
    else star.vy = -star.vy * 0.9;
  } else if (star[axis] > maxVal - star.radius) {
    star[axis] = maxVal - star.radius;
    if (axis === 'x') star.vx = -star.vx * 0.9;
    else star.vy = -star.vy * 0.9;
  }
}

// Update star positions and apply forces
function update() {
  // On mobile, only update star opacity for twinkling effect, no movement
  if (isMobile()) {
    for (const star of stars) {
      star.opacity += star.opacityDelta;
      if (star.opacity > 1) {
        star.opacity = 1;
        star.opacityDelta = -star.opacityDelta * Math.random();
      } else if (star.opacity < 0.5) {
        star.opacity = 0.5;
        star.opacityDelta = -star.opacityDelta * Math.random();
      }
    }
    return;
  }
  
  // Desktop update with full movement
  for (const star of stars) {
    if (Math.random() < 0.02) {  
      star.vx += (Math.random() - 0.5) * AUTONOMOUS_MOVEMENT;
      star.vy += (Math.random() - 0.5) * AUTONOMOUS_MOVEMENT;
    }
    // Return force to initial position when not influenced by mouse
    if (!mouse.active || distance(star, mouse) > MOUSE_CONNECTION_RADIUS) {
      const dx = star.initialX - star.x;
      const dy = star.initialY - star.y;
      star.vx += dx * RETURN_FORCE;
      star.vy += dy * RETURN_FORCE;
    }
    star.x += (star.vx * BOUNCE_SPEED) / FPS;
    star.y += (star.vy * BOUNCE_SPEED) / FPS;
    star.vx += (Math.random() - 0.5) * 0.1;
    star.vy += (Math.random() - 0.5) * 0.1;
    star.vx *= 0.995; 
    star.vy *= 0.995; 
    // Check for boundary collisions
    checkStarBoundary(star, canvas.value.width, 'x');
    checkStarBoundary(star, canvas.value.height, 'y');
    // Update opacity for twinkling effect
    star.opacity += star.opacityDelta;
    if (star.opacity > 1) {
      star.opacity = 1;
      star.opacityDelta = -star.opacityDelta * Math.random();
    } else if (star.opacity < 0.5) {
      star.opacity = 0.5;
      star.opacityDelta = -star.opacityDelta * Math.random();
    }
  }
}

// Animation loop
function animate() {
  draw();
  update();
  animationFrameId = requestAnimationFrame(animate);
}

// Create a star with random properties
function createStar(width, height, type) {
  const colorHSL = getSpaceColorHSL();
  const rgb = hslToRgb(colorHSL.h, colorHSL.s, colorHSL.l);
  const x = Math.random() * width;
  const y = Math.random() * height;
  return {
    x: x,
    y: y,
    initialX: x,   
    initialY: y,   
    radius: type.min + Math.random() * (type.max - type.min),
    vx: (Math.random() - 0.5) * 20, 
    vy: (Math.random() - 0.5) * 20,
    opacity: 0.7 + Math.random() * 0.3, 
    opacityDelta: (Math.random() * 0.01) * (Math.random() > 0.5 ? 1 : -1), 
    color: { hsl: colorHSL, rgb }
  };
}

// Initialize stars based on screen size
function initStars(width, height) {
  stars = [];
  backgroundStars = [];
  const numStars = isMobile() ? NUM_STARS.mobile : NUM_STARS.desktop;
  
  // if mobile, increase the number of background stars
  const numBackgroundStars = numStars * (isMobile() ? 8 : 5);
  
  for (let i = 0; i < numStars; i++) {
    let type;
    const rand = Math.random();
    if (rand < STAR_TYPES.TINY.count) {
      type = STAR_TYPES.TINY;
    } else if (rand < STAR_TYPES.TINY.count + STAR_TYPES.SMALL.count) {
      type = STAR_TYPES.SMALL;
    } else if (rand < STAR_TYPES.TINY.count + STAR_TYPES.SMALL.count + STAR_TYPES.MEDIUM.count) {
      type = STAR_TYPES.MEDIUM;
    } else {
      type = STAR_TYPES.LARGE;
    }
    stars.push(createStar(width, height, type));
  }
  
  // Create background stars (static)
  for (let i = 0; i < numBackgroundStars; i++) {
    const colorHSL = getSpaceColorHSL();
    const rgb = hslToRgb(colorHSL.h, colorHSL.s, colorHSL.l);
    backgroundStars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 0.1 + Math.random() * 0.6, 
      opacity: 0.3 + Math.random() * 0.7, 
      color: { hsl: colorHSL, rgb }
    });
  }
}

// Update mouse position from touch events
function updateMouseFromTouch(e) {
  if (isMobile()) return; // Skip on mobile
  
  // Only prevent default on desktop
  if (!isMobile()) {
    e.preventDefault();
  }
  
  const touch = e.touches[0];
  mouse.x = touch.clientX;
  mouse.y = touch.clientY;
}

// Touch event handlers for desktop only
function handleTouchStart(e) {
  if (isMobile()) return; // Skip on mobile
  updateMouseFromTouch(e);
  mouse.active = true;
}

function handleTouchMove(e) {
  if (isMobile()) return; // Skip on mobile
  updateMouseFromTouch(e);
}

function handleTouchEnd() {
  if (isMobile()) return; // Skip on mobile
  mouse.active = false;
}

// Set initial canvas size based on window dimensions
function setCanvasSize() {
  if (!canvas.value) return;
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
}

onMounted(() => {
  const c = canvas.value;
  ctx = c.getContext('2d');

  setCanvasSize();
  initStars(c.width, c.height);

  // Only add interactive events on desktop
  if (!isMobile()) {
    c.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    });
    
    c.addEventListener('mouseout', () => {
      mouse.active = false;
    });
    
    c.addEventListener('touchstart', handleTouchStart, { passive: isMobile() });
    c.addEventListener('touchmove', handleTouchMove, { passive: isMobile() });
    c.addEventListener('touchend', handleTouchEnd);
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    setCanvasSize();
    
    // Keep track of whether we were previously on mobile
    const wasMobile = isMobile();
    
    initStars(c.width, c.height);
    
    // If switching from desktop to mobile, remove event listeners
    if (!wasMobile && isMobile()) {
      c.removeEventListener('touchstart', handleTouchStart);
      c.removeEventListener('touchmove', handleTouchMove);
      c.removeEventListener('touchend', handleTouchEnd);
      mouse.active = false;
    }
    // If switching from mobile to desktop, add event listeners
    else if (wasMobile && !isMobile()) {
      c.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
      });
      
      c.addEventListener('mouseout', () => {
        mouse.active = false;
      });
      
      c.addEventListener('touchstart', handleTouchStart, { passive: false });
      c.addEventListener('touchmove', handleTouchMove, { passive: false });
      c.addEventListener('touchend', handleTouchEnd);
    }
  });

  animate();
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  // Remove event listeners
  if (canvas.value && !isMobile()) {
    canvas.value.removeEventListener('touchstart', handleTouchStart);
    canvas.value.removeEventListener('touchmove', handleTouchMove);
    canvas.value.removeEventListener('touchend', handleTouchEnd);
  }
});
</script>

<style scoped>
canvas {
  background: #000;
  touch-action: auto; 
  pointer-events: none; 
}

@media (min-width: 769px) {
  canvas {
    touch-action: none; 
    pointer-events: auto; 
  }
}
</style>