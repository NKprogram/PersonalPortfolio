<template>
    <section id="experience" class="experience-section">
      <div class="content-container">
        <h2 class="section-heading">Work Experience</h2>
  
        <div class="timeline">
          <div class="timeline-item" v-for="(job, index) in jobs" :key="index">
            <!-- The dot on the timeline -->
            <div class="timeline-dot"></div>
  
            <!-- The job info box -->
            <div class="timeline-content">
              <h3 class="job-title">
                {{ job.title }}
                <span class="company">at {{ job.company }}</span>
              </h3>
              <p class="job-dates">{{ job.start }} - {{ job.end }}</p>
              <ul class="job-details">
                <li 
                  v-for="(bullet, bIndex) in job.bullets" 
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
  .experience-section {
    padding: 4rem 0;
    /* If you have a fancy background/canvas behind, you can 
       enable pass-through pointer-events here. Otherwise, remove. */
    pointer-events: none;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .content-container {
    pointer-events: auto;
    z-index: 10;
    position: relative;
    max-width: 800px;
    width: 90%;
    margin: 0 auto;
    text-align: left;
    color: #fff;
  }
  
  .section-heading {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  /* Timeline container */
  .timeline {
    position: relative;
    padding-left: 2rem;   /* Space for the vertical line */
    margin-left: 2rem;
    border-left: 2px solid #666; /* The vertical timeline line */
  }
  
  /* Each timeline item (one job) */
  .timeline-item {
    margin-bottom: 2rem;
    position: relative;
  }
  
  /* The dot on the timeline */
  .timeline-dot {
    position: absolute;
    left: -0.75rem;
    top: 0.6rem; /* Adjust if needed */
    width: 1rem;
    height: 1rem;
    background-color: #3B82F6; /* A nice accent color */
    border-radius: 50%;
    transform: translateX(-50%);
  }
  
  /* Content area of each job */
  .timeline-content {
    margin-left: 1rem;
    padding-bottom: 0.5rem;
  }
  
  .job-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  
  .company {
    font-weight: normal;
    margin-left: 0.25rem;
    color: #3B82F6;
    font-style: italic;
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
  }
  </style>
  