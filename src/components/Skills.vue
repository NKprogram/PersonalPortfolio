<template>
  <section id="skills" class="skills-section">
    <div class="content-container">
      <!-- Main section heading using the custom font -->
      <h2 class="section-heading">TECH STACK</h2>
      <!-- Subtitle for the section -->
      <h3 class="introduction-subtitle">What I Know.</h3>
      
      <!-- Programming Languages Section -->
      <p class="category-heading programming-heading">Programming Languages</p>
      <div class="planets-container programming-planets">
        <div v-for="(language, index) in programmingLanguages" 
             :key="`lang-${index}`" 
             class="planet-sphere">
          <div class="planet-rings"></div>
          <div class="planet-atmosphere"></div>
          <img :title="language.title" 
               :src="language.icon" 
               :alt="language.title" 
               class="planet-icon" />
          <div class="planet-name">{{ language.title }}</div>
          <div class="orbit-particles"></div>
          <div class="planet-shadow"></div>
        </div>
      </div>

      <!-- Frameworks and Libraries Section -->
      <p class="category-heading frameworks-heading">Frameworks & Libraries</p>
      <div class="planets-container frameworks-planets">
        <div v-for="(framework, index) in frameworksLibraries" 
             :key="`framework-${index}`" 
             class="planet-sphere framework-planet">
          <div class="planet-rings"></div>
          <div class="planet-atmosphere"></div>
          <img :title="framework.title" 
               :src="framework.icon" 
               :alt="framework.title" 
               class="planet-icon" />
          <div class="planet-name">{{ framework.title }}</div>
          <div class="orbit-particles"></div>
          <div class="planet-shadow"></div>
        </div>
      </div>

      <!-- Developer Tools Section -->
      <p class="category-heading tools-heading">Developer Tools</p>
      <div class="planets-container tools-planets">
        <div v-for="(tool, index) in developerTools" 
             :key="`tool-${index}`" 
             class="planet-sphere tool-planet">
          <div class="planet-rings"></div>
          <div class="planet-atmosphere"></div>
          <img :title="tool.title" 
               :src="tool.icon" 
               :alt="tool.title" 
               class="planet-icon" />
          <div class="planet-name">{{ tool.title }}</div>
          <div class="orbit-particles"></div>
          <div class="planet-shadow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import vueLogo from '@/assets/vue.svg';
import mebald from '@/assets/images/mebald.png';

export default {
  name: 'Skills',
  data() {
    return {
      programmingLanguages: [
        { title: 'JavaScript', icon: vueLogo },
        { title: 'Python', icon: vueLogo },
        { title: 'TypeScript', icon: vueLogo },
        { title: 'HTML', icon: vueLogo },
        { title: 'CSS', icon: vueLogo },
        { title: 'Java', icon: vueLogo }
      ],
      frameworksLibraries: [
        { title: 'Vue.js', icon: vueLogo },
        { title: 'React', icon: vueLogo },
        { title: 'Angular', icon: vueLogo },
        { title: 'Express.js', icon: vueLogo },
        { title: 'Tailwind CSS', icon: vueLogo },
        { title: 'Node.js', icon: vueLogo }
      ],
      developerTools: [
        { title: 'Git & GitHub', icon: mebald },
        { title: 'Docker', icon: mebald },
        { title: 'MongoDB', icon: mebald },
        { title: 'MySQL', icon: mebald },
        { title: 'Webpack', icon: mebald },
        { title: 'CI/CD', icon: mebald }
      ]
    };
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'TechnoRace-Italic';
  src: url('../assets/fonts/TechnoRace-Italic.otf') format('opentype');
  font-style: italic;
  font-weight: 400;
}

.skills-section {
  pointer-events: none; 
  padding: 4rem 0;
  position: relative;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
}

.content-container {
  pointer-events: none; 
  z-index: 10;
  position: relative;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}


.section-heading {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: 'TechnoRace-Italic', sans-serif;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(139, 233, 253, 0.7);
  letter-spacing: 2px;
  pointer-events: none;
}

.introduction-subtitle {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  text-align: center;
}


.category-heading {
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
}


.programming-heading {
  color: #e0b0ff;
  text-shadow: 0 0 15px rgba(156, 39, 176, 0.8);
}

.frameworks-heading {
  color: #ffb0d0;
  text-shadow: 0 0 15px rgba(233, 30, 99, 0.8);
}

.tools-heading {
  color: #b0e0e6;
  text-shadow: 0 0 15px rgba(0, 188, 212, 0.8);
}

 
.planets-container {
  pointer-events: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
}


.planet-sphere {
  perspective: 1000px;
  width: 150px;
  height: 150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.8);
  animation: float 6s ease-in-out infinite;
  cursor: pointer;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  transform-style: preserve-3d;
}


.programming-planets .planet-sphere {
  background: radial-gradient(circle at 30% 30%, 
    #9c27b0 0%, 
    #673ab7 30%, 
    #4a148c 70%, 
    #311b92 100%);
  box-shadow: 
    0 0 25px rgba(156, 39, 176, 0.7),
    inset 0 0 30px rgba(0, 0, 0, 0.8);
}

.programming-planets .planet-sphere:hover {
  box-shadow: 
    0 0 30px rgba(156, 39, 176, 0.9),
    0 0 60px rgba(156, 39, 176, 0.4),
    inset 0 0 30px rgba(0, 0, 0, 0.6);
}

.programming-planets .planet-name {
  text-shadow: 0 0 5px rgba(156, 39, 176, 0.8);
}


.frameworks-planets .planet-sphere {
  background: radial-gradient(circle at 30% 30%, 
    #ff5722 0%, 
    #e91e63 30%, 
    #c2185b 70%, 
    #880e4f 100%);
  box-shadow: 
    0 0 25px rgba(233, 30, 99, 0.7),
    inset 0 0 30px rgba(0, 0, 0, 0.8);
}

.frameworks-planets .planet-sphere:hover {
  box-shadow: 
    0 0 30px rgba(233, 30, 99, 0.9),
    0 0 60px rgba(233, 30, 99, 0.4),
    inset 0 0 30px rgba(0, 0, 0, 0.6);
}

.frameworks-planets .planet-name {
  text-shadow: 0 0 5px rgba(233, 30, 99, 0.8);
}


.tools-planets .planet-sphere {
  background: radial-gradient(circle at 30% 30%, 
    #00bcd4 0%, 
    #009688 30%, 
    #00796b 70%, 
    #004d40 100%);
  box-shadow: 
    0 0 25px rgba(0, 188, 212, 0.7),
    inset 0 0 30px rgba(0, 0, 0, 0.8);
}

.tools-planets .planet-sphere:hover {
  box-shadow: 
    0 0 30px rgba(0, 188, 212, 0.9),
    0 0 60px rgba(0, 188, 212, 0.4),
    inset 0 0 30px rgba(0, 0, 0, 0.6);
}

.tools-planets .planet-name {
  text-shadow: 0 0 5px rgba(0, 188, 212, 0.8);
}


.planet-shadow {
  position: absolute;
  left: 25%;
  top: 80%;
  z-index: -1;
  width: 80px;
  height: 20px;
  border-radius: 50%;
  background: transparent;
  box-shadow: 0 25px 30px rgba(255, 255, 255, 0.25);
  transform: rotateX(70deg);
  animation: shadow-float 6s ease-in-out infinite;
}


.planet-atmosphere {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  filter: blur(8px);
  z-index: -1;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}


.programming-planets .planet-atmosphere {
  background: radial-gradient(circle at 30% 30%, 
    rgba(186, 104, 200, 0.2) 0%, 
    rgba(103, 58, 183, 0.1) 50%, 
    rgba(49, 27, 146, 0.05) 80%, 
    transparent 100%);
}

.frameworks-planets .planet-atmosphere {
  background: radial-gradient(circle at 30% 30%, 
    rgba(255, 87, 34, 0.2) 0%, 
    rgba(233, 30, 99, 0.1) 50%, 
    rgba(136, 14, 79, 0.05) 80%, 
    transparent 100%);
}

.tools-planets .planet-atmosphere {
  background: radial-gradient(circle at 30% 30%, 
    rgba(0, 188, 212, 0.2) 0%, 
    rgba(0, 150, 136, 0.1) 50%, 
    rgba(0, 77, 64, 0.05) 80%, 
    transparent 100%);
}


.planet-rings {
  position: absolute;
  width: 200%;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transform: rotateX(75deg);
  z-index: -1;
  box-shadow: 
    0 0 10px rgba(255, 255, 255, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.2);
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
}


.planet-icon {
  width: 70px;
  height: 70px;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.9));
  z-index: 5;
  transition: transform 0.5s ease, filter 0.5s ease;
}


.planet-name {
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}


.orbit-particles {
  position: absolute;
  width: 180%;
  height: 180%;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: rotate 20s linear infinite;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}


.orbit-particles::before,
.orbit-particles::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.6);
}

.orbit-particles::before {
  top: 50%;
  left: 10%;
}

.orbit-particles::after {
  top: 30%;
  right: 15%;
  width: 3px;
  height: 3px;
}


.planet-sphere:hover {
  transform: scale(1.15) rotateY(15deg);
  z-index: 10;
}

.planet-sphere:hover .planet-icon {
  transform: scale(1.2) rotate(360deg);
  filter: drop-shadow(0 0 12px rgba(255, 255, 255, 1)) brightness(1.2);
}

.planet-sphere:hover .planet-rings {
  opacity: 1;
  transform: rotateX(75deg) scale(1.1);
}

.planet-sphere:hover .planet-name {
  opacity: 1;
  transform: translateY(0);
}

.planet-sphere:hover .planet-atmosphere {
  opacity: 1;
}

.planet-sphere:hover .orbit-particles {
  opacity: 1;
}


.planet-sphere:hover .planet-shadow {
  box-shadow: 0 25px 40px rgba(255, 255, 255, 0.35);
  width: 90px;
}


@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes shadow-float {
  0% {
    transform: rotateX(70deg) translateY(0);
    opacity: 0.25;
  }
  50% {
    transform: rotateX(70deg) translateY(15px);
    opacity: 0.15;
  }
  100% {
    transform: rotateX(70deg) translateY(0);
    opacity: 0.25;
  }
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}


@media screen and (max-width: 768px) {
  .section-heading {
    font-size: 2rem;
  }
 
  .introduction-subtitle {
    font-size: 1.5rem;
  }
  
  .category-heading {
    font-size: 1.25rem;
  }
  
  .planet-sphere {
    width: 120px;
    height: 120px;
  }
  
  .planet-icon {
    width: 55px;
    height: 55px;
  }
  
  .planet-name {
    font-size: 0.8rem;
    bottom: -25px;
  }
  
  .planet-shadow {
    width: 60px;
    top: 75%;
  }
}
</style>