<template>
  <section id="experience" class="experience-section">
    <div class="content-container">
      <!-- Main heading with custom font -->
      <h2 class="section-heading techno-race-italic">
        Work Experience
      </h2>

      <!-- Subheading in faded text -->
      <h3 class="introduction-subtitle">
        What I've done
      </h3>

      <!-- Experience wrapper for layout -->
      <div class="experience-wrapper">
        <!-- LEFT: Company list with clickable items -->
        <div class="company-list">
          <div
            v-for="(job, index) in jobs"
            :key="index"
            :class="['company-item', { active: index === selectedIndex }]"
            @click="selectedIndex = index"
          >
            {{ job.company }}
          </div>
        </div>

        <!-- RIGHT: Job details section -->
        <div class="company-details">
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
          title: 'Front-End Developer',
          company: 'CreativeTech Solutions',
          start: 'May 2021',
          end: 'Present',
          bullets: [
            'Developed dynamic user interfaces with Vue.js and TailwindCSS',
            'Collaborated with design & QA teams to achieve 30% faster load times',
            'Implemented a real-time chat feature via WebSockets'
          ]
        },
        {
          title: 'Junior Web Developer',
          company: 'Innova Labs',
          start: 'Jun 2019',
          end: 'Apr 2021',
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
/* Importing custom font for the section heading */
@font-face {
  font-family: 'TechnoRace-Italic';
  src: url('../assets/fonts/TechnoRace-Italic.otf') format('opentype');
  font-style: italic;
  font-weight: 400;
}


.experience-section {
  padding: 4rem 0;
  pointer-events: none; 
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15rem; 
}

.content-container {
  pointer-events: auto; 
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
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'TechnoRace-Italic', sans-serif;
}

.introduction-subtitle {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  text-align: center;
}

.experience-wrapper {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}


.company-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #c084fc; 
  padding-left: 1rem;
  position: relative;
}

.company-item {
  margin-bottom: 1.5rem; 
  cursor: pointer;
  position: relative;
  padding-left: 1.5rem;
  font-weight: bold;
  color: #fff;
  transition: color 0.3s;
}

.company-item::before {
  content: '';
  position: absolute;
  left: -0.6rem;
  top: 0.5rem;
  width: 0.8rem;
  height: 0.8rem;
  background-color: #c084fc;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s, background-color 0.3s;
}

.company-item.active::before {
  opacity: 1;
  background-color: #d946ef; 
}

.company-item.active {
  color: #d946ef;
}

.company-item:hover {
  color: #d946ef;
}


.company-details {
  flex: 2;
}

.job-title {
  font-size: 1.6rem; 
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: #c084fc;
}

.job-dates {
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 0.5rem;
}

.job-details {
  list-style-type: disc;
  list-style-position: outside;
  margin-left: 1.5rem;
  color: #ccc;
}


.job-details li {
  margin-bottom: 0.25rem;
  font-size: 1.2rem;
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
    display: flex;
    flex-direction: row;
    border-left: none;
    padding-left: 0;
    overflow-x: auto;
    margin-bottom: 1rem;
  }
  
  .company-item {
    margin-bottom: 0;
    margin-right: 1rem;
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
