<template>
  <canvas
    ref="canvas"
    class="fixed top-0 left-0 w-full h-full"
  ></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// Constants
const FPS = 60;
// Dot bounce speed
const BOUNCE_SPEED = 1;
// Star-to-star maximum distance to connect
const STAR_CONNECTION_RADIUS = 130;
// Distance from mouse to star for mouse→star lines
const MOUSE_CONNECTION_RADIUS = 220;
// How far from the mouse we see lines at all
const MAX_VISIBLE_RADIUS = 320;
// Minimum alpha for the dots
const MIN_DOT_ALPHA = 0.2;
// Minimum distance from mouse to star for the dot to be visible
const FADE_START_RATIO = 0.8; 
// Ratio of the distance at which the line starts to fade
const LINE_WIDTH = 0.4;
// Number of stars for mobile vs desktop
const NUM_STARS = {
  mobile: 35,
  desktop: 250
};

// Canvas reference
const canvas = ref(null);
let animationFrameId = null;
let stars = [];

// Track mouse position
const mouse = { x: 0, y: 0 };

// Check if device is mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// Generate random HSL color
function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 100%, 50%)`;
}

// Distance between two points
function distance(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Calculate the alpha value for the line based on distance
function getLineAlphaFromDistance(dist) {
  if (dist > MAX_VISIBLE_RADIUS) {
    return 0;
  }
  const portion = dist / MAX_VISIBLE_RADIUS;
  if (portion < FADE_START_RATIO) {
    return 1; // fully bright inside this range
  } 
  const fadeSpan = 1 - FADE_START_RATIO; 
  const fadeProgress = (portion - FADE_START_RATIO) / fadeSpan;
  return 1 - fadeProgress;
}

// Calculate the alpha value for the dot based on distance
function getDotAlphaFromDistance(dist) {
  const lineAlpha = getLineAlphaFromDistance(dist); 
  // clamp to at least MIN_DOT_ALPHA
  return Math.max(MIN_DOT_ALPHA, lineAlpha);
}

// Convert HSL to RGBA string
function hslToRgba(hslStr, alpha) {
  const match = /hsl\(\s*(\d+),\s*(\d+)%,\s*(\d+)%\)/.exec(hslStr);
  if (!match) {
    // fallback
    return `rgba(255,255,255,${alpha})`;
  }
  const [ , hue, sat, light ] = match;
  const h = parseFloat(hue);
  const s = parseFloat(sat) / 100;
  const l = parseFloat(light) / 100;

  // HSL -> RGB
  const c = (1 - Math.abs(2*l -1)) * s;
  const hh = h / 60;
  const x = c*(1 - Math.abs(hh % 2 - 1));
  let r=0, g=0, b=0;
  
  if (0 <= hh && hh < 1)      { r = c; g = x; b = 0; }
  else if (1 <= hh && hh < 2) { r = x; g = c; b = 0; }
  else if (2 <= hh && hh < 3) { r = 0; g = c; b = x; }
  else if (3 <= hh && hh < 4) { r = 0; g = x; b = c; }
  else if (4 <= hh && hh < 5) { r = x; g = 0; b = c; }
  else if (5 <= hh && hh < 6) { r = c; g = 0; b = x; }

  const m = l - c/2;
  r = Math.floor((r+m)*255);
  g = Math.floor((g+m)*255);
  b = Math.floor((b+m)*255);

  return `rgba(${r},${g},${b},${alpha})`;
}

// Draw a line between two points
function drawLine(ctx, x1, y1, x2, y2, color) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = LINE_WIDTH;
  ctx.strokeStyle = color;
  ctx.stroke();
}

// Draw stars
function drawStars(ctx) {
  for (const star of stars) {
    const distToMouse = distance(star, mouse);
    const dotAlpha = getDotAlphaFromDistance(distToMouse);
    ctx.fillStyle = hslToRgba(star.color, dotAlpha);

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

//connect stars to each other if they are close enough 
function connectStarToStar(ctx) {
  for (let i = 0; i < stars.length; i++) {
    const starA = stars[i];
    const alphaA = getLineAlphaFromDistance(distance(starA, mouse));
    if (alphaA <= 0) continue; 
    for (let j = i + 1; j < stars.length; j++) {
      const starB = stars[j];
      const alphaB = getLineAlphaFromDistance(distance(starB, mouse));
      if (alphaB <= 0) continue; 
      if (distance(starA, starB) < STAR_CONNECTION_RADIUS) {
        const lineAlpha = Math.min(alphaA, alphaB);
        const lineColor = hslToRgba(starA.color, lineAlpha);
        drawLine(ctx, starA.x, starA.y, starB.x, starB.y, lineColor);
      }
    }
  }
}

// Connect mouse to stars if they are close enough
function connectMouseToStars(ctx) {
  for (const star of stars) {
    const distToMouse = distance(star, mouse);
    if (distToMouse < MOUSE_CONNECTION_RADIUS) {
      // Fade from 1 down to 0 near the edge of MOUSE_CONNECTION_RADIUS
      const lineAlpha = 1 - distToMouse / MOUSE_CONNECTION_RADIUS;
      if (lineAlpha > 0) {
        const lineColor = hslToRgba(star.color, lineAlpha);
        drawLine(ctx, mouse.x, mouse.y, star.x, star.y, lineColor);
      }
    }
  }
}

// Draw the canvas
function draw(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.globalCompositeOperation = 'lighter';
  // Draw stars
  drawStars(ctx);
  // Connect stars to each other
  connectStarToStar(ctx);
  // Connect mouse to stars
  connectMouseToStars(ctx);
}

// Animation update
function update() {
  const centerX = canvas.value.width / 2;
  const centerY = canvas.value.height / 2;
  for (const s of stars) {
    const dx = centerX - s.x;
    const dy = centerY - s.y;
    const angle = Math.atan2(dy, dx);
    // Change pull to push away from center
    const push = 0.01;
    s.vx -= push * Math.cos(angle);
    s.vy -= push * Math.sin(angle);
    // Small swirl force: perpendicular to the radial direction
    const swirl = 0.005;
    s.vx -= swirl * Math.sin(angle);
    s.vy += swirl * Math.cos(angle);
    // Move the star
    s.x += (s.vx * BOUNCE_SPEED) / FPS;
    s.y += (s.vy * BOUNCE_SPEED) / FPS;
    // Keep the existing edge bounce
    if (s.x < 0 || s.x > canvas.value.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.value.height) s.vy = -s.vy;
  }
}

// Animation loop
function animate(ctx) {
  draw(ctx);
  update();
  animationFrameId = requestAnimationFrame(() => animate(ctx));
}

// Initialize stars
function initStars(width, height) {
  stars = [];
  const numStars = isMobile() ? NUM_STARS.mobile : NUM_STARS.desktop;

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1 + 1,
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25,
      color: getRandomColor(),
    });
  }
}

onMounted(() => {
  const c = canvas.value;
  const ctx = c.getContext('2d');

  c.width = window.innerWidth;
  c.height = window.innerHeight;

  initStars(c.width, c.height);

  // Track mouse
  c.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Resize handling
  window.addEventListener('resize', () => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    initStars(c.width, c.height);
  });

  animate(ctx);
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style scoped>
canvas {
  background: radial-gradient(ellipse at center, #2b032d 0%, #05000a 70%, #000 100%);
}
</style>