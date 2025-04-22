<template>
  <section id="experience" class="experience-section">
    <div class="content-container">
      <h2 class="section-heading">
        WORK EXPERIENCE
      </h2>
      <h3 class="introduction-subtitle">
        Where I've Worked.
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
              <div :class="['planet', `planet-${job.planet}`]"></div>
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
          company: 'NotJustYou',
          start: 'Sep 2024',
          end: 'Dec 2024',
          planet: 'earth',
          bullets: [
            'Developed the Medical Wallet feature in React Native, enabling image uploads and health entry tracking, while connecting patient and caregiver profiles securely.',
            'Designed an accessible, calming UI tailored for chronically ill users and caregivers, with a focus on privacy and ethical user experience.',
            'Automated CI/CD pipelines using GitHub Actions and self-hosted runners, reducing manual deployment time by 30% and streamlining releases.'
          ]
        },
        {
          title: 'Data Science Intern',
          company: 'M2M Tech',
          start: 'May 2023',
          end: 'Aug 2023',
          planet: 'mars',
          bullets: [
            'Developed and optimized predictive models for 10K+ records using Python, scikit-learn, and Bokeh, improving the precision of segmentation by 17%.',
            'Created interactive dashboards and visual reports using Pandas, Matplotlib, and Seaborn to analyze trends and support data-driven exploration.',
            'Collaborated with front-end teams to embed machine learning outputs into web interfaces, enabling real-time recommendations and user insights.'
          ]
        },
        {
          title: 'Computer Science Mentor',
          company: 'Future Creators',
          start: 'Jan 2022',
          end: 'Mar 2022',
          planet: 'mercury',
          bullets: [
            'Delivered weekly coding workshops focused on beginner-friendly tools and Python-based project development.',
            'Guided mentees through end-to-end application design, incorporating backend logic, interface layout, and testing.',
            'Introduced version control and API usage to support clean, modular, and collaborative development practices.'
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
  margin-left: 12px;
  transition: color 0.3s;
  font-size: 1.2rem;
}

.company-item.active .planet {
  transform: scale(1.25);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4);
}

.company-item.active .planet-name {
  color: #ff79c6;
  text-shadow: 0 0 6px rgba(255, 121, 198, 0.5);
  font-size: 1.3rem;
}

.company-item:hover .planet-container {
  transform: translateX(6px);
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