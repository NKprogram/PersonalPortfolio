<template>
  <section class="intro-section">
    <div class="content-container">
      <h1 class="animated-title">
        Hello, I'm Nuuradin a passionate software developer
      </h1>
      <a href="#about" class="btn cosmic-btn">
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <strong>Explore my portfolio</strong>
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
      originalText: "Hello, I'm Nuuradin a passionate software developer",
      glitchTimeout: null,
      mainAnimTimeout: null
    };
  },
  mounted() {
    this.runMainAnimation();
    this.scheduleGlitch();
    this.scheduleRerun();
  },
  beforeDestroy() {
    clearTimeout(this.glitchTimeout);
    clearTimeout(this.mainAnimTimeout);
  },
  methods: {
    //run the main animation on mount
    runMainAnimation() {
      const titleElement = document.querySelector('.animated-title');
      if (!titleElement) return;
      titleElement.textContent = '';
      this.originalText.split(' ').forEach((word, index, array) => {
        const wordSpan = document.createElement('span');
        wordSpan.classList.add('animated-word');
        word.split('').forEach(letter => {
          const letterSpan = document.createElement('span');
          letterSpan.classList.add('animated-element');
          letterSpan.textContent = letter;
          // Slight random delay so letters appear at staggered times
          const delay = (Math.random() * 0.8).toFixed(2);
          letterSpan.style.animationDelay = `${delay}s`;
          wordSpan.appendChild(letterSpan);
        });
        titleElement.appendChild(wordSpan);
        // Add a space (except after the last word)
        if (index < array.length - 1) {
          const spaceSpan = document.createElement('span');
          spaceSpan.innerHTML = '&nbsp;';
          spaceSpan.classList.add('word-space');
          titleElement.appendChild(spaceSpan);
        }
      });
      // Fade/slide in for all words
      setTimeout(() => {
        document.querySelectorAll('.animated-word').forEach(word => {
          word.classList.add('animate');
        });
      }, 100);
    },

    // glitch animation for the title
    glitchAnimation() {
      const titleElement = document.querySelector('.animated-title');
      if (!titleElement) return;
      titleElement.classList.add('glitch');
      setTimeout(() => {
        titleElement.classList.remove('glitch');
      }, 300);
    },

    // Schedule the glitch animation every 5–6 seconds
    scheduleGlitch() {
      const glitchDelay = 3000 + Math.random() * 1000;
      this.glitchTimeout = setTimeout(() => {
        this.glitchAnimation();
        this.scheduleGlitch();
      }, glitchDelay);
    },

    // Schedule the main animation to rerun every 10–12 seconds
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
  font-family: 'Neuropolitical';
  src: url('@/assets/Fonts/Neuropolitical Rg.otf') format('opentype');
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
  pointer-events: auto;
}


.animated-title {
  color: white;
  font-size: 56px;
  margin: 0 0 2.5rem;
  width: 100%;
  text-align: center;
  font-family: 'Neuropolitical', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 120px;
  position: relative;
}


.glitch {
  animation: glitchAnim 0.4s;
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
  font-family: 'Neuropolitical', sans-serif;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.animated-word.animate {
  opacity: 1;
  transform: translateY(0);
}

.animated-element {
  display: inline-block;
  font-family: 'Neuropolitical', sans-serif;
  animation: displayLetter 1.5s ease-in-out forwards;
  opacity: 0;
}

.word-space {
  display: inline-block;
  width: 0.35em;
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

/* Responsive design for mobile and desktop */
@media (max-width: 768px) {
  .animated-title {
    font-size: 32px;
  }
  .btn {
    width: 12rem;
    height: 3rem;
  }
  .btn strong {
    font-size: 12px;
    letter-spacing: 2px;
  }
}

@media (min-width: 769px) {
  .animated-title {
    font-size: 56px;
  }
  .btn {
    width: 15rem;
    height: 3.5rem;
  }
  .btn strong {
    font-size: 14px;
    letter-spacing: 3px;
  }
}


.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 3.5rem;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5rem;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(
      137.48deg,
      #ffdb3b 10%,
      #fe53bb 45%,
      #8f51ea 67%,
      #0044ff 87%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  position: relative;
  text-decoration: none;
  transition: 0.5s;
  animation: gradientCycle 5s ease infinite;
}

#container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5rem;
  transition: 0.5s;
}

strong {
  z-index: 2;
  font-family: 'Neuropolitical', sans-serif;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
}

#glow {
  position: absolute;
  display: flex;
  width: 12rem;
}

.circle {
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulseGlow 4s infinite;
  z-index: -1;
}

.circle:nth-of-type(1) {
  background: rgba(254, 83, 186, 0.636);
}

.circle:nth-of-type(2) {
  background: rgba(142, 81, 234, 0.704);
}

.btn:hover {
  transform: scale(1.1);
}

.btn:hover #container-stars {
  background-color: #212121;
  z-index: 1;
}

.btn:active {
  border: double 4px #fe53bb;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

#stars {
  position: relative;
  width: 200rem;
  height: 200rem;
  background: transparent;
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

@keyframes gradientCycle {
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
