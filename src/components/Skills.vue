<template>
    <section id="skills" class="skills-section">
      <div class="content-container">
        <h2 class="section-heading">My Skills</h2>
        <div class="skills-grid">
          <!-- Loop through skill categories -->
          <div
            v-for="(category, catIndex) in skillCategories"
            :key="catIndex"
            class="skill-category"
          >
            <h3 class="category-title">{{ category.title }}</h3>
            <ul class="skills-list">
              <!-- Loop through skills in each category -->
              <li v-for="(skill, skillIndex) in category.items" :key="skillIndex">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Skills',
    data() {
      return {
        skillCategories: [
          {
            title: 'Programming Languages',
            items: ['JavaScript', 'Python', 'Java', 'C#', 'HTML', 'CSS']
          },
          {
            title: 'Frameworks & Libraries',
            items: ['Vue.js', 'React', 'Angular', 'Express.js']
          },
          {
            title: 'Databases & Cloud',
            items: ['MongoDB', 'MySQL', 'PostgreSQL', 'AWS', 'Firebase']
          },
          {
            title: 'Tools & Workflow',
            items: ['Git & GitHub', 'Webpack', 'Docker', 'CI/CD']
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .skills-section {
    padding: 4rem 0;
    position: relative;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .content-container {
    pointer-events: auto;
    z-index: 10;
    position: relative;
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    color: #fff;
  }
  
  .section-heading {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .skill-category {
    background: #1e1e1e;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: left;
    transition: transform 0.2s ease;
  }
  
  .skill-category:hover {
    transform: translateY(-5px);
  }
  

  .category-title {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: #ffffff;
  }

  .skills-list {
    list-style: none;
    margin: 0;
    padding: 0;
    color: #cccccc;
  }
  
  .skills-list li {
    margin-bottom: 0.5rem;
  }
  </style>
  