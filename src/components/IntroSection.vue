<template>
  <section class="intro-section">
    <div class="content-container">
      <h1 class="intro-heading">
        <span class="intro-text">Hi There, I'm</span> 
        <span class="neon-text">Nuuradin Korane</span> 
        <span class="animated-emoji">😎</span>
      </h1>
      <div class="titles-container">
        <div class="glitch-wrapper">
          <div class="glitch-text" :data-text="titles[currentTitleIndex]">
            {{ titles[currentTitleIndex] }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroSection',
  data() {
    return {
      titles: [
        "Software Developer",
        "UI/UX Enthusiast",
        "Blockchain Explorer"
      ],
      currentTitleIndex: 0,
      titleInterval: null
    }
  },
  mounted() {
    this.startTitleAnimation();
    this.startEmojiAnimation();
  },
  beforeUnmount() {
    clearInterval(this.titleInterval);
  },
  methods: {
    startTitleAnimation() {
      this.titleInterval = setInterval(() => {
        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
      }, 3000);
    },
    startEmojiAnimation() {
      const emoji = document.querySelector('.animated-emoji');
      if (emoji) {
        setInterval(() => {
          // Apply a small bounce animation
          emoji.style.animation = 'none';
          setTimeout(() => {
            emoji.style.animation = 'emoji-bounce 0.5s ease';
          }, 10);
        }, 3000);
      }
    }
  }
}
</script>

<style scoped>
.intro-section {
  /* The section fills the viewport */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  /* 
    Make the empty space in this section pass mouse events 
    through to the canvas behind it. 
  */
  pointer-events: none;
}

.content-container {
  /* Re-enable pointer events on the actual text area */
  pointer-events: auto;
  text-align: center;
  z-index: 10;
  position: relative;
}

/* The rest of your existing styles remain unchanged */
.intro-heading {
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  position: relative;
}

.intro-text {
  color: #ffffff;
  font-weight: normal;
  display: inline;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

@media (min-width: 768px) {
  .intro-heading {
    font-size: 5rem;
  }
}

.neon-text {
  font-weight: bold;
  background: linear-gradient(90deg, #fbff00, #ff0000);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 
    0 0 5px rgba(255, 255, 0, 0.7),
    0 0 10px rgba(255, 255, 0, 0.5),
    0 0 15px rgba(255, 255, 0, 0.3),
    0 0 20px rgba(255, 255, 0, 0.2);
  animation: neon-pulse 1.5s infinite alternate;
  display: inline;
}

.animated-emoji {
  display: inline-block;
  font-size: 4rem;
  margin-left: 0.5rem;
  position: relative;
  top: -5px;
}

.titles-container {
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.glitch-wrapper {
  position: relative;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}

.glitch-text {
  position: relative;
  color: #ffffff !important;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  animation: glitch-skew 1s infinite linear alternate-reverse;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ffffff;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch-text::after {
  left: -2px;
  text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes neon-pulse {
  from {
    text-shadow: 
      0 0 5px rgba(255, 255, 0, 0.7),
      0 0 10px rgba(255, 255, 0, 0.5),
      0 0 15px rgba(255, 255, 0, 0.3),
      0 0 20px rgba(255, 255, 0, 0.2);
  }
  to {
    text-shadow: 
      0 0 5px rgba(255, 255, 0, 0.9),
      0 0 10px rgba(255, 255, 0, 0.8),
      0 0 15px rgba(255, 255, 0, 0.6),
      0 0 20px rgba(255, 255, 0, 0.4),
      0 0 25px rgba(255, 255, 0, 0.3);
  }
}

@keyframes emoji-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes glitch-anim {
  0% {
    clip: rect(29px, 9999px, 63px, 0);
    transform: skew(0.52deg);
  }
  /* omitted frames for brevity */
  100% {
    clip: rect(68px, 9999px, 95px, 0);
    transform: skew(0.84deg);
  }
}

@keyframes glitch-anim2 {
  0% {
    clip: rect(74px, 9999px, 71px, 0);
    transform: skew(0.11deg);
  }
  /* omitted frames for brevity */
  100% {
    clip: rect(57px, 9999px, 14px, 0);
    transform: skew(0.31deg);
  }
}

@keyframes glitch-skew {
  0% { transform: skew(1deg); }
  10% { transform: skew(-1deg); }
  20% { transform: skew(0deg); }
  30% { transform: skew(-1deg); }
  40% { transform: skew(-1deg); }
  50% { transform: skew(3deg); }
  60% { transform: skew(1deg); }
  70% { transform: skew(0deg); }
  80% { transform: skew(-2deg); }
  90% { transform: skew(1deg); }
  100% { transform: skew(0deg); }
}
</style>
