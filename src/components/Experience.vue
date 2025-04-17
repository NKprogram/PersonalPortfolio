<template>
  <section id="experience" class="experience-section">
    <div class="content-container">
      <!-- Section heading with custom font -->
      <h2 class="section-heading">
        WORK EXPERIENCE
      </h2>
      <h3 class="introduction-subtitle">
        Where I've Worked.
      </h3>
      <!-- Experience wrapper for company list and details -->
      <div class="experience-wrapper">
        <!-- on the left side: Company list with planets -->
        <div class="company-list">
          <div class="orbit-line"></div>
          <div
            v-for="(job, index) in jobs"
            :key="index"
            :class="['company-item', { active: index === selectedIndex }]"
            @click="selectedIndex = index"
          >
            <div class="planet-container">
              <div :class="['planet', `planet-${job.planet}`]"></div>
              <span class="planet-name">{{ job.company }} - {{ job.title }}</span>
            </div>
          </div>
        </div>

        <!-- on the right side: Company details -->
        <div class="company-details">
          <div class="cosmic-details-container">
            <h3 class="job-title">
              {{ jobs[selectedIndex].title }} @ {{ jobs[selectedIndex].company }}
            </h3>
            <p class="job-dates">
              {{ jobs[selectedIndex].start }} - {{ jobs[selectedIndex].end }}
            </p>
            <ul class="job-details">
              <li 
                v-for="(bullet, bIndex) in jobs[selectedIndex].bullets" 
                :key="bIndex"
              >
                {{ bullet }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      selectedIndex: 0,
      jobs: [
        {
          title: 'Senior Front-End Developer',
          company: 'Nebula Systems',
          start: 'May 2021',
          end: 'Present',
          planet: 'earth',
          bullets: [
            'Architected scalable Vue.js applications for enterprise clients',
            'Improved site performance by 42% through optimization techniques',
            'Led a team of 4 developers to deliver 7 major feature releases',
            'Implemented advanced animation systems using GSAP and Three.js'
          ]
        },
        {
          title: 'Front-End Developer',
          company: 'CreativeTech Solutions',
          start: 'Apr 2019',
          end: 'Apr 2021',
          planet: 'mars',
          bullets: [
            'Developed dynamic user interfaces with Vue.js and TailwindCSS',
            'Collaborated with design & QA teams to achieve 30% faster load times',
            'Implemented a real-time chat feature via WebSockets',
            'Contributed to company-wide accessibility standards'
          ]
        },
        {
          title: 'Junior Web Developer',
          company: 'Stellar Labs',
          start: 'Jun 2017',
          end: 'Mar 2019',
          planet: 'mercury',
          bullets: [
            'Built responsive websites with HTML5, CSS3, and JavaScript',
            'Reduced technical debt by refactoring legacy code',
            'Coordinated closely with product owners to meet deadlines',
            'Launched 3 major product releases on schedule'
          ]
        }
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

.experience-section {
  pointer-events: none;
  padding: 4rem 0;
  margin-bottom: 15rem; 
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 600px;
}

.content-container {
  pointer-events: none;
  z-index: 10;
  position: relative;
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  text-align: left;
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
}

.introduction-subtitle {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  text-align: center;
}

.experience-wrapper {
  pointer-events: auto;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.company-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  position: relative;
  justify-content: space-between;
  height: 400px;
}

.orbit-line {
  position: absolute;
  width: 2px;
  background: linear-gradient(to bottom, transparent, #bd93f9, #ff79c6, #50fa7b, transparent);
  top: 0;
  bottom: 0;
  left: 20px;
  z-index: 5;
}

.company-item {
  margin-bottom: 1.5rem; 
  cursor: pointer;
  position: relative;
  padding-left: 3rem;
  font-weight: bold;
  color: #fff;
  transition: color 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  z-index: 10;
}

.planet-container {
  display: flex;
  align-items: center;
  transition: transform 0.3s;
}

.planet {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: absolute;
  left: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  background-size: cover;
  background-position: center;
}


.planet-mercury {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="mercury" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="0%" stop-color="%23e5e5e5" /><stop offset="50%" stop-color="%23c2c2c2" /><stop offset="100%" stop-color="%238a8a8a" /></radialGradient></defs><circle cx="50" cy="50" r="48" fill="url(%23mercury)" /><circle cx="30" cy="30" r="10" fill="%23a5a5a5" opacity="0.6" /><circle cx="70" cy="40" r="15" fill="%23909090" opacity="0.5" /><circle cx="60" cy="70" r="12" fill="%23707070" opacity="0.7" /></svg>');
  box-shadow: 0 0 15px rgba(200, 200, 200, 0.7);
}

.planet-earth {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="earth" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="0%" stop-color="%234b93ff" /><stop offset="100%" stop-color="%232e6dc9" /></radialGradient></defs><circle cx="50" cy="50" r="48" fill="url(%23earth)" /><path d="M30,30 Q40,20 50,30 T70,40 Q80,50 65,60 T40,70 Q30,60 30,30" fill="%2354b948" opacity="0.8" /><path d="M80,30 Q70,40 60,25 T40,20 Q30,30 40,45 T65,70 Q75,60 80,30" fill="%2368bf60" opacity="0.7" /></svg>');
  box-shadow: 0 0 15px rgba(75, 147, 255, 0.8);
}

.planet-mars {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="mars" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="0%" stop-color="%23ff9d6f" /><stop offset="100%" stop-color="%23ce4a4a" /></radialGradient></defs><circle cx="50" cy="50" r="48" fill="url(%23mars)" /><circle cx="30" cy="30" r="10" fill="%23b04a4a" opacity="0.7" /><circle cx="60" cy="40" r="8" fill="%23b04a4a" opacity="0.5" /><circle cx="40" cy="70" r="12" fill="%23b04a4a" opacity="0.6" /><circle cx="70" cy="60" r="5" fill="%23b04a4a" opacity="0.8" /></svg>');
  box-shadow: 0 0 15px rgba(206, 74, 74, 0.8);
}

.planet-name {
  margin-left: 10px;
  transition: color 0.3s;
}

.company-item.active .planet {
  transform: scale(1.25);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4);
}

.company-item.active .planet-name {
  color: #ff79c6;
  text-shadow: 0 0 5px rgba(255, 121, 198, 0.5);
}

.company-item:hover .planet-container {
  transform: translateX(5px);
}

.company-details {
  flex: 2;
  position: relative;
}

.cosmic-details-container {
  background: rgba(40, 42, 54, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(139, 233, 253, 0.3);
  box-shadow: 0 0 15px rgba(139, 233, 253, 0.2);
}

.job-title {
  font-size: 1.6rem; 
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: #ff79c6;
}

.job-dates {
  font-size: 0.9rem;
  color: #bd93f9;
  margin-bottom: 1rem;
}

.job-details {
  list-style-type: none;
  margin-left: 0.5rem;
  color: #f8f8f2;
}

.job-details li {
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  position: relative;
  padding-left: 1.5rem;
}

.job-details li::before {
  content: '★';
  position: absolute;
  left: 0;
  color: #50fa7b;
}

@media screen and (max-width: 768px) {
  .experience-wrapper {
    flex-direction: column;
  }

  .company-list,
  .company-details {
    flex: unset;
    width: 100%;
  }
  
  .company-list {
    height: auto;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 0;
    margin-bottom: 2rem;
  }
  
  .orbit-line {
    width: 90%;
    height: 2px;
    top: 18px;
    left: 5%;
    right: 5%;
    background: linear-gradient(to right, transparent, #bd93f9, #ff79c6, #50fa7b, transparent);
  }
  
  .company-item {
    margin-bottom: 0;
    padding-left: 0;
    padding-top: 3rem;
  }
  
  .planet {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .company-item.active .planet {
    transform: translateX(-50%) scale(1.25);
  }
  
  .planet-container {
    flex-direction: column;
    text-align: center;
  }
  
  .planet-name {
    margin-left: 0;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }

  .section-heading {
    font-size: 2rem;
  }
  
  .introduction-subtitle {
    font-size: 1.5rem;
  }
  
  .job-title {
    font-size: 1.4rem;
  }
  
  .job-dates {
    font-size: 0.8rem;
  }
  
  .job-details li {
    font-size: 1rem;
  }
}
</style>