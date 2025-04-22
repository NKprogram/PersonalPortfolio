<template>
  <section id="projects" class="projects-section">
    <div class="content-container">
      <!-- Title for the section -->
      <h1 class="introduction-title">PROJECTS</h1>
      <!-- Subtitle for the section -->
      <h2 class="introduction-subtitle">What I've Made.</h2>
      <div class="cards-container">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="three-d-wrapper"
          @mousemove="handleMouseMove($event, index)"
          @mouseout="handleMouseOut(index)"
          @touchmove="handleTouchMove($event, index)"
          @touchend="handleTouchEnd(index)"
        >
          <div
            class="card animated"
            :class="['card-' + index, { expanded: selectedCardIndex === index }]"
            :style="cardStyles[index]"
            @click="toggleCard(index, $event)"
            ref="projectCards"
          >
            <!-- Project Image -->
            <img :src="project.image" :alt="project.title" class="card-image" />
            <!-- Space-themed background -->
            <div class="space-theme-background">
              <!-- Project Details -->
              <div class="card-content">
                <h3 class="card-title">{{ project.title }}</h3>
                <p class="card-description" :class="{ 'expanded-description': selectedCardIndex === index }">{{ project.description }}</p>
                <!-- Tags -->
                <div class="card-tags">
                  <span class="tag framework">{{ project.tags[0] }}</span>
                  <span class="tag language">{{ project.tags[1] }}</span>
                  <span class="tag tech">{{ project.tags[2] }}</span>
                  <span v-if="project.tags[3]" class="tag database">{{ project.tags[3] }}</span>
                </div>

                <!-- github link button -->
                <a
                  :href="project.githubLink"
                  target="_blank"
                  class="github-btn"
                  @click.stop
                  @touchstart.stop
                >
                  <!-- gitHub Icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    class="gh-icon"
                  >
                    <path
                      d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"
                    />
                  </svg>

                  <!-- Stars and glow effect -->
                  <div class="container-stars">
                    <div class="stars"></div>
                  </div>
                  <div class="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                </a>
              </div>
              
              <!-- Space elements for the background -->
              <div class="space-elements">
                <div class="stars-small"></div>
                <div class="planet"></div>
                <div class="shooting-star"></div>
                <div class="nebula"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImagemorpherPic from '@/assets/Images/ImagemorpherPic.png';
import FluxPic from '@/assets/Images/FluxPic.png';
import SorthubPic from '@/assets/Images/SorthubPic.png';
import SDPic from '@/assets/Images/SDPic.png';
import SufferQRPic from '@/assets/Images/SufferQRPic.png';
import Employee2ndPic from '@/assets/Images/Employee2ndPic.png';

export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'ImageMorpher',
          image: ImagemorpherPic,
          description: 'A Python-based bot that transforms images into styles like ASCII, pixel art, and even Sketch. Runs in Discord via Ngrok or in the cloud using AWS Lambda for fast, serverless image processing.',
          tags: ['Flask', 'Python', 'AWS Lambda', 'Docker'],
          githubLink: 'https://github.com/NKprogram/ImageMorpher'
        },
        {
          title: 'Flux',
          image: FluxPic,
          description: 'An AI-powered advisor that simulates realistic interviews, transcribes answers, and delivers personalized feedback using GPT-4o-mini. Runs in web browsers or on Render for scalable mock interviews.',
          tags: ['Node.js', 'Javascript', 'Render', 'Supabase'],
          githubLink: 'https://github.com/NKprogram/HackED2025'
        },
        {
          title: 'VisualSortHub',
          image: SorthubPic,
          description: 'An interactive site that visualizes how sorting algorithms work, with animations for Merge Sort, Quick Sort, and more. Runs in web browsers and uses sliders to control array size and speed of the sorting process.',
          tags: ['React', 'JavaScript', 'HTML/CSS', 'Github Pages'],
          githubLink: 'https://github.com/NKprogram/visualsorthub'
        },
        {
          title: 'SocialDistribution',
          image: SDPic,
          description: 'A fullstack distributed social network where users share, like, and comment across nodes. Built with Django and Heroku, it syncs GitHub activity to profiles and uses inbox-based REST APIs for federation.',
          tags: ['Django', 'Python', 'Heroku', 'PostgreSQL'],
          githubLink: 'https://github.com/NKprogram/SD'
        },
        {
          title: 'SufferQR',
          image: SufferQRPic,
          description: 'A mobile app where users scan QR codes tied to photos and GPS, earning scores and rankings. Built in Java for Android with Firebase, it tracks code activity, maps locations, and shows player stats.',
          tags: ['XML', 'Java', 'Android SDK', 'Firebase'],
          githubLink: 'https://github.com/NKprogram/sufferQR'
        },
        {
          title: 'Employee2nd',
          image: Employee2ndPic,
          description: 'A web-based job tracker that lets users log applications, track statuses, and manage resumes with Google Drive integration. Styled with Tailwind CSS, and deployed via Expo for cross-platform accessibility.',
          tags: ['Next.js', 'Typscript', 'TailwindCSS', 'MongoDB'],
          githubLink: 'https://github.com/NKprogram/Employee2nd'
        }
      ],
      cardStyles: Array(6).fill({}),
      animationTimeouts: Array(6).fill(null),
      selectedCardIndex: null
    };
  },
  methods: {
    // Handle mouse movement to create a 3D effect on the cards.
    handleMouseMove(e, index) {
      const card = this.$refs.projectCards[index];
      if (!card || this.selectedCardIndex === index) return;
      const rect = card.getBoundingClientRect();
      const l = e.clientX - rect.left;
      const t = e.clientY - rect.top;
      const h = rect.height;
      const w = rect.width;
      const px = Math.abs(Math.floor((100 / w) * l) - 100);
      const py = Math.abs(Math.floor((100 / h) * t) - 100);
      const lp = 50 + (px - 50) / 1.5;
      const tp = 50 + (py - 50) / 1.5;
      const ty = ((tp - 50) / 2) * -1;
      const tx = ((lp - 50) / 1.5) * 0.5;
      this.$set(this.cardStyles, index, {
        transform: `rotateX(${ty}deg) rotateY(${tx}deg)`,
        backgroundPosition: `${lp}% ${tp}%`
      });
      card.classList.remove('animated');
      if (this.animationTimeouts[index]) {
        clearTimeout(this.animationTimeouts[index]);
      }
    },
    handleMouseOut(index) {
      const card = this.$refs.projectCards[index];
      if (!card || this.selectedCardIndex === index) return;
      this.$set(this.cardStyles, index, {});
      this.animationTimeouts[index] = setTimeout(() => {
        card.classList.add('animated');
      }, 2500);
    },
    handleTouchMove(e, index) {
      if (this.selectedCardIndex === index) return;
      const touch = e.touches[0];
      this.handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY }, index);
      e.preventDefault();
    },
    handleTouchEnd(index) {
      if (this.selectedCardIndex === index) return;
      this.handleMouseOut(index);
    },
    // Toggle the card to show more details.
    toggleCard(index, event) {
      if (event.target.closest('.github-btn')) {
        return;
      }
      
      // Prevent toggling on mobile devices.
      if (window.innerWidth <= 768) {
        return;
      }
      
      const wasExpanded = this.selectedCardIndex === index;
      this.selectedCardIndex = wasExpanded ? null : index;
      this.cardStyles = Array(this.projects.length).fill({});
      
      // Handle overlay
      if (!wasExpanded) {
        // Create overlay if it doesn't exist
        if (!document.querySelector('.card-overlay')) {
          const overlay = document.createElement('div');
          overlay.className = 'card-overlay';
          document.body.appendChild(overlay);
        }
        
        // Show overlay
        document.querySelector('.card-overlay').classList.add('active');
        
        // Add click event to close when clicking outside
        document.querySelector('.card-overlay').onclick = () => {
          this.closeExpandedCard();
        };
      } else {
        // Hide overlay when closing
        const overlay = document.querySelector('.card-overlay');
        if (overlay) {
          overlay.classList.remove('active');
        }
      }
    },
    closeExpandedCard() {
      this.selectedCardIndex = null;
      
      // Hide overlay
      const overlay = document.querySelector('.card-overlay');
      if (overlay) {
        overlay.classList.remove('active');
      }
    }
  },
  mounted() {
    // Add CSS for the rainbow glow effect on the cards.
    const style = document.createElement('style');
    document.head.appendChild(style);
    const colors = [
      ['#ff8a00', '#e52e71'],
      ['#7b4397', '#dc2430'],
      ['#1CB5E0', '#000851'],
      ['#8E2DE2', '#4A00E0'],
      ['#00b09b', '#96c93d'],
      ['#fc4a1a', '#f7b733']
    ];
    colors.forEach((color, i) => {
      style.sheet.insertRule(`
        .card-${i}:before {
          background-image: linear-gradient(
            115deg,
            transparent 0%,
            ${color[0]} 25%,
            transparent 47%,
            transparent 53%,
            ${color[1]} 75%,
            transparent 100%
          );
        }
      `);
    });
    // Add event listener for the Escape key to close the expanded card.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.selectedCardIndex !== null) {
        this.closeExpandedCard();
      }
    });
  },
  beforeDestroy() {
    document.removeEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.selectedCardIndex !== null) {
        this.closeExpandedCard();
      }
    });
  }
};

</script>

<style scoped>
.projects-section {
  pointer-events: none; 
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.content-container {
  pointer-events: none; 
  max-width: 1400px;
  width: 92%;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}

.introduction-title {
  text-align: center;
  font-size: 4rem; 
  margin-bottom: 1.5rem;
  font-family: 'TechnoRace-Italic', sans-serif;
  color: #ffffff;
  text-shadow: 0 0 12px rgba(139, 233, 253, 0.7);
  letter-spacing: 3px;
}
.introduction-subtitle {
  font-size: 2.5rem; 
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  text-align: center;
}
.cards-container {
  pointer-events: none; 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}
.three-d-wrapper {
  perspective: 1500px;
  position: relative;
  z-index: 1;
  pointer-events: auto; 
}
.three-d-wrapper:has(.card.expanded) {
  z-index: 10000; 
  position: relative; 
}


.card {
  pointer-events: auto;
  background: #1e1e1e;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  transform-origin: center;
  transition: transform 0.5s ease, box-shadow 0.2s ease;
  box-shadow:
    -5px -5px 5px -5px rgba(255, 138, 0, 0.5),
    5px 5px 5px -5px rgba(229, 46, 113, 0.5),
    0 0 5px 0px rgba(255, 255, 255, 0),
    0 15px 15px -10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  min-height: 420px; 
}
.card:hover {
  box-shadow:
    -10px -10px 15px -5px rgba(255, 138, 0, 0.5),
    10px 10px 15px -5px rgba(229, 46, 113, 0.5),
    0 0 5px 2px rgba(255, 255, 255, 0.2),
    0 15px 15px -10px rgba(0, 0, 0, 0.5);
}

.card.expanded {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  width: 90%;
  max-width: 600px;
  min-height: auto; 
  height: auto;
  z-index: 99999;
  box-shadow:
    0 0 30px 8px rgba(255, 255, 255, 0.2),
    0 0 15px 5px rgba(138, 43, 226, 0.4),
    0 0 25px 2px rgba(70, 179, 246, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: expandPulse 2s infinite alternate;
}

.card-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999; 
}

.card-overlay.active {
  display: block;
}


.card.expanded .space-theme-background {
  background: linear-gradient(0deg, rgba(15, 12, 41, 0.95), rgba(30, 30, 30, 0.97));
}


.card.expanded .card-title {
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

.card.expanded .card-content {
  padding: 2rem;
}

.card.expanded:before {
  opacity: 0 !important;
  background-image: none !important;
  filter: none !important;
}

.expanded-description {
  font-size: 1.1rem !important;
  line-height: 1.6 !important;
  color: #ffffff !important;
  margin: 1rem 0 1.5rem !important;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.3);
}

.card.expanded .space-elements {
  opacity: 0.3; 
}

.card-image {
  width: 100%;
  height: 200px; 
  object-fit: cover;
}

.space-theme-background {
  position: relative;
  background: linear-gradient(0deg, #0f0c29, #1e1e1e);
  overflow: hidden;
  min-height: 220px;
  display: flex;
  flex-direction: column;
}

.space-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: auto;
}

.stars-small {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(#ffffff 1px, transparent 1px);
  background-size: 15px 15px;
  opacity: 0.7;
}

.planet {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(45deg, #3c1053, #ad5389);
  box-shadow: 0 0 10px rgba(173, 83, 137, 0.8);
  right: 20px;
  top: 20px;
}

.shooting-star {
  position: absolute;
  top: 45px;
  left: -10px;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  transform: rotate(15deg);
  animation: shootingStar 4s linear infinite;
}

.nebula {
  position: absolute;
  width: 100px;
  height: 60px;
  background: radial-gradient(ellipse at center, rgba(100, 0, 200, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
  left: 20px;
  bottom: 20px;
  filter: blur(3px);
  opacity: 0.5;
  animation: nebulaGlow 5s ease-in-out infinite alternate;
}

.card-content {
  padding: 1.5rem;
  position: relative;
  z-index: 2;
}
.card-title {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  color: #ffffff;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  font-weight: 700;
}
.card-description {
  margin-top: 0.5rem;
  line-height: 1.4;
  color: #cccccc;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.tag {
  display: inline-block;
  border-radius: 4px;
  padding: 0.25rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 600; 
}
.tag.framework {
  background-color: #ff8a00;
  color: #1e1e1e;
}
.tag.language {
  background-color: #e52e71;
  color: #ffffff;
}
.tag.tech {
  background-color: #4A00E0;
  color: #ffffff;
}
.tag.database {
  background-color: #00b09b;
  color: #1e1e1e;
}


.card.expanded .tag {
  padding: 0.35rem 0.8rem;
  font-size: 0.85rem;
  margin: 0.15rem;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
}

.github-btn {
  position: absolute;
  bottom: 1rem; 
  left: auto;
  right: 1rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  backdrop-filter: blur(1rem);
  border: double 2px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  text-decoration: none;
  z-index: 10;
}

.github-btn:hover {
  transform: scale(1.1);
}
.github-btn:active {
  border: double 2px #fe53bb;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}
.github-btn:active .circle {
  background: #fe53bb;
}

.gh-icon {
  width: 24px; 
  height: 24px; 
  z-index: 2;
}

.container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 50%;
}
.github-btn:hover .container-stars {
  z-index: 1;
  background-color: #212121;
}
.stars {
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
}
.stars::after {
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
.stars::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 60s linear infinite;
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
}
.glow {
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.circle {
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulse_3011 4s infinite;
  z-index: -1;
}
.circle:nth-of-type(1) {
  background: rgba(254, 83, 186, 0.636);
}
.circle:nth-of-type(2) {
  background: rgba(142, 81, 234, 0.704);
}

.card:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-repeat: no-repeat;
  opacity: 0.5;
  mix-blend-mode: color-dodge;
  transition: all 0.33s ease;
  background-position: 50% 50%;
  background-size: 300% 300%;
  filter: brightness(0.5) contrast(1);
  z-index: 1;
  pointer-events: none;
}
.card:hover:before {
  opacity: 0.7;
  filter: brightness(0.75) contrast(1.2);
}

.card.animated {
  animation: holoCard 15s ease infinite;
}
.card.animated:before {
  animation: holoGradient 15s ease infinite;
}

@media screen and (max-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(1, 1fr);
  }
  .card.expanded {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%) !important;
    width: 90%;
    max-width: 90vw;
    z-index: 9999;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr); 
  }
}
@media screen and (min-width: 1441px) {
  .cards-container {
    grid-template-columns: repeat(3, 1fr); 
  }
}

@keyframes shootingStar {
  0% {
    transform: translateX(-10px) rotate(15deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(130px) rotate(15deg);
    opacity: 0;
  }
}

@keyframes nebulaGlow {
  0% {
    opacity: 0.3;
    filter: blur(3px);
  }
  100% {
    opacity: 0.7;
    filter: blur(4px);
  }
}

@keyframes expandPulse {
  0% {
    box-shadow:
      0 0 20px 5px rgba(255, 255, 255, 0.2),
      0 0 10px 3px rgba(138, 43, 226, 0.3),
      0 0 15px 2px rgba(70, 179, 246, 0.2);
  }
  100% {
    box-shadow:
      0 0 30px 8px rgba(255, 255, 255, 0.3),
      0 0 20px 5px rgba(138, 43, 226, 0.5),
      0 0 25px 3px rgba(70, 179, 246, 0.4);
  }
}

@keyframes animStar {
  from { transform: translateY(0); }
  to   { transform: translateY(-135rem); }
}

@keyframes animStarRotate {
  from { transform: rotate(360deg); }
  to   { transform: rotate(0); }
}

@keyframes gradient_301 {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulse_3011 {
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

@keyframes holoCard {
  0%, 100% {
    transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
  }
  20% {
    transform: rotateZ(0deg) rotateX(6deg) rotateY(-20deg);
  }
  40% {
    transform: rotateZ(0deg) rotateX(-9deg) rotateY(32deg);
  }
  60% {
    transform: rotateZ(3deg) rotateX(12deg) rotateY(20deg);
  }
  80% {
    transform: rotateZ(-3deg) rotateX(-12deg) rotateY(-27deg);
  }
}

@keyframes holoGradient {
  0%, 100% {
    opacity: 0.5;
    background-position: 50% 50%;
    filter: brightness(0.5) contrast(1);
  }
  20% {
    background-position: 100% 100%;
    opacity: 0.8;
    filter: brightness(0.75) contrast(1.25);
  }
  40% {
    background-position: 0% 0%;
    opacity: 0.7;
  }
  60% {
    background-position: 100%;
    opacity: 0.8;
  }
  80% {
    background-position: 0% 0%;
    opacity: 0.7;
    filter: brightness(0.75) contrast(1.25);
  }
}
</style>