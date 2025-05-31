<template>
  <section id="experience" class="experience-section">
    <div class="content-container">
      <h2 class="section-heading">
        WORK EXPERIENCE
      </h2>
      <h3 class="introduction-subtitle">
        Where I've Worked
      </h3>
      <div class="experience-wrapper">
        <div class="company-list">
          <div class="orbit-line"></div>
          <div
            v-for="(job, index) in jobs"
            :key="index"
            :class="['company-item', { active: index === selectedIndex }]"
            @click="selectedIndex = index"
          >
            <div class="planet-container">
              <div :class="['planet', `planet-${job.planet}`]">
                <div class="planet-ring"></div>
                <div class="planet-glow"></div>
              </div>
              <span class="planet-name">{{ job.company }} - {{ job.title }}</span>
            </div>
          </div>
        </div>

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
          title: 'Software Engineer Intern',
          company: 'NotJustYou (Remote)',
          location: 'Edmonton, AB',
          start: 'Sep 2024',
          end: 'Dec 2024',
          planet: 'earth',
          bullets: [
            'Engineered a cross-platform Medical Wallet in React Native using Material UI and MongoDB, enabling secure image uploads and health document storage across linked patient–caregiver profiles.',
            'Designed a privacy-first mobile interface inspired by Headspace and Apple Health, improving usability for chronically ill users through calming UI and intuitive navigation.',
            'Automated deployment to iOS with Expo, GitHub Actions, and self-hosted runners, reducing manual deployment time by 35% and accelerating release cycles.',
            'Contributed to the app’s chronic illness support ecosystem by building patient-facing features aligned with ethical UX and privacy-first standards, adopted by 30+ early users.'
          ]
        },
        {
          title: 'Data Science Intern',
          company: 'M2M Tech (Remote)',
          location: 'Vancouver, BC',
          start: 'May 2023',
          end: 'Aug 2023',
          planet: 'mars',
          bullets: [
            'Completed 5+ client-focused ML projects through structured training, applying scikit-learn to real-world datasets and developing skills in feature engineering, model tuning, and evaluation.',
            'Increased segmentation accuracy by 15% using k-means clustering on 10K+ IoT device records, enabling clients to identify distinct user behavior patterns for targeted engagement.',
            'Delivered model insights through interactive Bokeh dashboards and stakeholder presentations, improving client understanding of data trends and model outputs.'
          ]
        },
        {
          title: 'Computer Science Mentor',
          company: 'Future Creators',
          location: 'Edmonton, AB',
          start: 'Jan 2022',
          end: 'Mar 2022',
          planet: 'mercury',
          bullets: [
            'Taught foundational machine learning through C# based game development, mentoring 15+ students in building interactive games that adapted to player behavior.',
            'Delivered workshops on AI logic, game loops, and data-driven behaviors, enabling students to implement ML features like pattern recognition and basic reinforcement learning.',
            'Introduced Git and modular programming practices, helping students structure clean, collaborative codebases and launch playable projects.'
          ]
        },
      ]
    };
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'TechnoRace-Italic';
  src: url('../assets/Fonts/TechnoRace-Italic.otf') format('opentype');
  font-style: italic;
  font-weight: 400;
}

.experience-section {
  pointer-events: none;
  padding: 4rem 0;
  margin-bottom: 12rem;
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
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
  text-align: left;
  color: #fff;
}

.section-heading {
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
  height: 450px;
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
  margin-bottom: 2rem;
  cursor: pointer;
  position: relative;
  padding-left: 3rem;
  font-weight: bold;
  color: #fff;
  transition: color 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  z-index: 10;
  font-size: 1rem;
}

.planet-container {
  display: flex;
  align-items: center;
  transition: transform 0.2s;
}

.planet {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: absolute;
  left: 2px;
  transition: all 0.4s ease;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.planet-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 0px solid rgba(255, 255, 255, 0);
  box-sizing: border-box;
  transform: scale(1.2);
  opacity: 0;
  transition: all 0.4s ease;
  z-index: -1;
}

.planet-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
  transform: scale(0);
  opacity: 0;
  transition: all 0.5s ease;
  z-index: -2;
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
  margin-left: 12px;
  transition: color 0.3s;
  font-size: 1.2rem;
}

/* Active planet styles */
.company-item.active .planet {
  transform: scale(1.25) rotate(360deg);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4);
  animation: pulse 2s infinite;
}

.company-item.active .planet-ring {
  border-width: 4px;
  opacity: 0.7;
  transform: scale(1.5) rotate(-45deg);
}

.company-item.active .planet-glow {
  transform: scale(2.2);
  opacity: 0.6;
}

.company-item.active .planet-mercury + .planet-ring {
  border-color: rgba(200, 200, 200, 0.5);
  box-shadow: 0 0 10px rgba(200, 200, 200, 0.5);
}

.company-item.active .planet-earth + .planet-ring {
  border-color: rgba(75, 147, 255, 0.5);
  box-shadow: 0 0 10px rgba(75, 147, 255, 0.5);
}

.company-item.active .planet-mars + .planet-ring {
  border-color: rgba(206, 74, 74, 0.5);
  box-shadow: 0 0 10px rgba(206, 74, 74, 0.5);
}

.company-item.active .planet-name {
  color: #ff79c6;
  text-shadow: 0 0 6px rgba(255, 121, 198, 0.5);
  font-size: 1.3rem;
}


.company-item:hover:not(.active) .planet {
  transform: scale(1.15);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.3);
}

.company-item:hover:not(.active) .planet-ring {
  border-width: 2px;
  opacity: 0.5;
  transform: scale(1.4);
}

.company-item:hover:not(.active) .planet-glow {
  transform: scale(1.8);
  opacity: 0.4;
}

.company-item:hover:not(.active) .planet-mercury + .planet-ring {
  border-color: rgba(200, 200, 200, 0.4);
}

.company-item:hover:not(.active) .planet-earth + .planet-ring {
  border-color: rgba(75, 147, 255, 0.4);
}

.company-item:hover:not(.active) .planet-mars + .planet-ring {
  border-color: rgba(206, 74, 74, 0.4);
}

.company-item:hover:not(.active) .planet-name {
  color: rgba(255, 255, 255, 0.9);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.3);
  }
  100% {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4);
  }
}

.company-details {
  flex: 2.5;
  position: relative;
}

.cosmic-details-container {
  background: rgba(40, 42, 54, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(139, 233, 253, 0.3);
  box-shadow: 0 0 20px rgba(139, 233, 253, 0.3);
  min-height: 370px;
}

.job-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ff79c6;
  text-shadow: 0 0 6px rgba(255, 121, 198, 0.4);
}

.job-dates {
  font-size: 1rem;
  color: #bd93f9;
  margin-bottom: 1.5rem;
}

.job-details {
  list-style-type: none;
  margin-left: 0.5rem;
  color: #f8f8f2;
}

.job-details li {
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.5;
}

.job-details li::before {
  content: '★';
  position: absolute;
  left: 0;
  color: #50fa7b;
  font-size: 1.2rem;
  text-shadow: 0 0 6px rgba(80, 250, 123, 0.6);
}

@media screen and (max-width: 992px) {
  .content-container {
    max-width: 95%;
  }
  
  .job-details li {
    font-size: 1.1rem;
  }
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
    transform: translateX(-50%) scale(1.25) rotate(360deg);
  }
  
  .company-item:hover:not(.active) .planet {
    transform: translateX(-50%) scale(1.15);
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
  
  .job-title {
    font-size: 1.6rem;
  }
  
  .job-dates {
    font-size: 0.9rem;
  }
  
  .job-details li {
    font-size: 1.1rem;
  }
  
  .cosmic-details-container {
    padding: 1.5rem;
    min-height: auto;
  }
}
</style>