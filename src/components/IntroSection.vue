<template>
  <section class="intro-section">
    <div class="content-container">
      <h1 class="animated-title"></h1>
      <a href="#about" class="btn cosmic-btn">
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <strong>Check out my Portfolio</strong>
        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroSection',
  data() {
    return {
      originalText: "Hello, I'm Nuuradin a Passionate Software Developer",
      glitchTimeout: null,
      mainAnimTimeout: null
    };
  },
  mounted() {
    this.runMainAnimation();
    this.scheduleGlitch();
    this.scheduleRerun();

    const btn = document.querySelector('.btn');
    // For mobile hover
    if ('ontouchstart' in window && btn) {
      btn.addEventListener('touchstart', this.handleTouch);
      btn.addEventListener('touchend', this.handleTouch);
      btn.addEventListener('touchcancel', this.handleTouch);
    }
  },
  beforeDestroy() {
    clearTimeout(this.glitchTimeout);
    clearTimeout(this.mainAnimTimeout);
  },
  methods: {
    createSpan(classes, content, isHTML = false) {
      const span = document.createElement('span');
      classes.split(' ').forEach(className => span.classList.add(className));
      if (isHTML) {
        span.innerHTML = content;
      } else {
        span.textContent = content;
      }
      return span;
    },
    handleTouch(event) {
      if (event.type === 'touchstart') {
        event.currentTarget.classList.add('hover');
      } else {
        event.currentTarget.classList.remove('hover');
      }
    },
    runMainAnimation() {
      const titleElement = document.querySelector('.animated-title');
      if (!titleElement) return;

      titleElement.textContent = '';
      this.originalText.split(' ').forEach((word, index, array) => {
        const wordSpan = this.createSpan('animated-word', '');
        if (['passionate', 'software', 'developer'].includes(word.toLowerCase())) {
          wordSpan.classList.add('cosmic-word');
        }
        Array.from(word).forEach(letter => {
          const letterSpan = this.createSpan('animated-element', letter);
          const delay = (Math.random() * 0.8).toFixed(2);
          letterSpan.style.animationDelay = `${delay}s`;
          wordSpan.appendChild(letterSpan);
        });
        titleElement.appendChild(wordSpan);
        // Add space between words
        if (index < array.length - 1) {
          const spaceSpan = this.createSpan('word-space', '&nbsp;', true);
          titleElement.appendChild(spaceSpan);
        }
      });

      setTimeout(() => {
        document.querySelectorAll('.animated-word').forEach(word => {
          word.classList.add('animate');
        });
      }, 100);
    },
    glitchAnimation() {
      const titleElement = document.querySelector('.animated-title');
      if (!titleElement) return;

      titleElement.classList.add('glitch');
      const flashOverlay = document.createElement('div');
      flashOverlay.classList.add('cosmic-flash');
      document.querySelector('.content-container').appendChild(flashOverlay);

      setTimeout(() => {
        titleElement.classList.remove('glitch');
        document.querySelector('.cosmic-flash')?.remove();
      }, 300);
    },
    scheduleGlitch() {
      const glitchDelay = 3000 + Math.random() * 1000;
      this.glitchTimeout = setTimeout(() => {
        this.glitchAnimation();
        this.scheduleGlitch();
      }, glitchDelay);
    },
    scheduleRerun() {
      const mainDelay = 10000 + Math.random() * 2000;
      this.mainAnimTimeout = setTimeout(() => {
        this.runMainAnimation();
        this.scheduleRerun();
      }, mainDelay);
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: 'TechnoRace-Italic';
  src: url('../assets/fonts/TechnoRace-Italic.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.intro-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  z-index: 10;
  pointer-events: none;
}

.content-container {
  text-align: center;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.cosmic-flash {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(127, 0, 255, 0.2) 0%, transparent 70%);
  animation: flashPulse 0.3s ease-out;
  pointer-events: none;
  z-index: -1;
}

@keyframes flashPulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.animated-title {
  color: white;
  font-size: 56px;
  margin: 0 0 2.5rem;
  width: 100%;
  text-align: center;
  font-family: 'TechnoRace-Italic', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 120px;
  position: relative;
  letter-spacing: 1px;
  pointer-events: none;
}

.cosmic-highlight {
  position: relative;
  display: inline-block;
  background: linear-gradient(90deg, #ff00dd, #7928ca, #0070f3);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradientFlow 4s ease infinite;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.glitch {
  animation: glitchAnim 0.4s;
  position: relative;
}

.glitch:before,
.glitch:after {
  content: attr(data-text);
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch:before {
  animation: glitchText 0.4s ease;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  left: 2px;
  text-shadow: -2px 0 #ff00dd;
}

.glitch:after {
  animation: glitchText 0.4s ease reverse;
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  left: -2px;
  text-shadow: 2px 0 #0070f3;
}

@keyframes glitchText {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(2px);
  }
  50% {
    transform: translateX(-2px);
  }
  75% {
    transform: translateX(1px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes glitchAnim {
  0% {
    transform: none;
    opacity: 1;
  }
  20% {
    transform: translate(-2px, 2px);
    opacity: 0.9;
  }
  40% {
    transform: translate(2px, -2px);
    opacity: 1;
  }
  60% {
    transform: translate(-1px, 1px);
    opacity: 0.9;
  }
  80% {
    transform: translate(1px, -1px);
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

.animated-word {
  display: inline-block;
  margin: 0 0.25rem;
  font-family: 'TechnoRace-Italic', sans-serif;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  pointer-events: none;
}

.cosmic-word {
  position: relative;
}

.cosmic-word:after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #7928ca, #ff00dd, transparent);
  pointer-events: none;
  opacity: 0.7;
}

.animated-word.animate {
  opacity: 1;
  transform: translateY(0);
}

.animated-element {
  display: inline-block;
  font-family: 'TechnoRace-Italic', sans-serif;
  animation: displayLetter 1.5s ease-in-out forwards;
  opacity: 0;
  pointer-events: none;
}

.cosmic-word .animated-element {
  animation: displayCosmicLetter 1.5s ease-in-out forwards;
}

.word-space {
  display: inline-block;
  width: 0.35em;
  pointer-events: none;
}

@keyframes displayLetter {
  0% {
    transform: translateY(5px);
    color: white;
    opacity: 0;
  }
  10% {
    color: rgb(241, 12, 211);
    opacity: 1;
  }
  20% {
    color: white;
    opacity: 0.5;
    transform: translateY(0px);
  }
  50% {
    color: rgb(86, 10, 138);
    opacity: 1;
    transform: translateY(1px);
  }
  60% {
    color: white;
    opacity: 1;
    transform: translateY(1px);
  }
  100% {
    transform: translateY(0);
    color: white;
    opacity: 1;
  }
}

@keyframes displayCosmicLetter {
  0% {
    transform: translateY(5px);
    color: white;
    opacity: 0;
  }
  10% {
    color: #ff00dd;
    opacity: 1;
    text-shadow: 0 0 5px rgba(255, 0, 221, 0.5);
  }
  20% {
    color: #7928ca;
    opacity: 0.7;
    transform: translateY(0px);
    text-shadow: 0 0 8px rgba(121, 40, 202, 0.7);
  }
  50% {
    color: #0070f3;
    opacity: 1;
    transform: translateY(1px);
    text-shadow: 0 0 10px rgba(0, 112, 243, 0.8);
  }
  60% {
    color: #ff00dd;
    opacity: 1;
    transform: translateY(1px);
    text-shadow: 0 0 5px rgba(255, 0, 221, 0.5);
  }
  100% {
    transform: translateY(0);
    background: linear-gradient(90deg, #ff00dd, #7928ca, #0070f3);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: none;
    opacity: 1;
  }
}

/* ------------------------- */
/*    BUTTON STYLING FIX     */
/* ------------------------- */

.btn {
  /* Keep your margin, width, height, and shape */
  margin-top: 1.5rem;
  width: 15rem;
  height: 3.5rem;
  border-radius: 5rem;

  /* Uiverse.io design additions */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-size: 300% 300%;
  cursor: pointer;
  backdrop-filter: blur(1rem);
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  position: relative;
  text-decoration: none;
  pointer-events: auto;
}

/* Use media queries as you wish to adjust shape/size on different devices */
@media (max-width: 932px) {
  .animated-title {
    font-size: 35px;
  }
  .btn {
    width: 15rem;
    height: 4rem;
  }
  .btn strong {
    font-size: 12px;
    letter-spacing: 2px;
  }
}

@media (min-width: 933px) {
  .animated-title {
    font-size: 75px;
  }
  .btn {
    width: 20rem;
    height: 4rem;
  }
  .btn strong {
    font-size: 16px;
    letter-spacing: 3px;
  }
}

.btn:hover,
.btn.hover {
  transform: scale(1.1);
}

.btn:active {
  border: double 4px #fe53bb;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

/* Keep the cosmic stars / glow exactly the same */
#container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5rem;
  transition: 0.5s;
  pointer-events: none;
}

strong {
  z-index: 2;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white, 0 0 8px #8f51ea;
  pointer-events: none;
}

#glow {
  position: absolute;
  display: flex;
  width: 12rem;
  pointer-events: none;
}

.circle {
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulseGlow 4s infinite;
  z-index: -1;
  pointer-events: none;
}

.circle:nth-of-type(1) {
  background: rgba(254, 83, 186, 0.636);
}

.circle:nth-of-type(2) {
  background: rgba(142, 81, 234, 0.704);
}

.btn:hover #container-stars {
  background-color: #212121;
  z-index: 1;
}

#stars {
  position: relative;
  width: 200rem;
  height: 200rem;
  background: transparent;
  pointer-events: none;
}

#stars::after {
  content: "";
  position: absolute;
  top: -10rem;
  left: -100rem;
  width: 100%;
  height: 100%;
  animation: animStarRotate 90s linear infinite;
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  pointer-events: none;
}

#stars::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  opacity: 0.5;
  animation: animStar 60s linear infinite;
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
}

/* Keyframes for the gradient from Uiverse.io */
@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Preserve your existing star/rotate animations */
@keyframes animStar {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}

@keyframes pulseGlow {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
