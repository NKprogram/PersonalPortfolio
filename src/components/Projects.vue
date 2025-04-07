<template>
    <section id="projects" class="projects-section">
      <div class="content-container">
        <h2 class="section-heading">My Projects</h2>
        <div class="cards-container">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="card"
          >
            <!-- Project Image -->
            <img
              :src="project.image"
              :alt="project.title"
              class="card-image"
            />
  
            <!-- Project Title -->
            <h3 class="card-title">{{ project.title }}</h3>
  
            <!-- Project Description -->
            <p class="card-description">
              {{ project.description }}
            </p>
  
            <!-- Tags -->
            <div class="card-tags">
              <span
                v-for="(tag, tIndex) in project.tags"
                :key="tIndex"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import vueLogo from '@/assets/vue.svg'; 
  
  export default {
    name: 'Projects',
    data() {
      return {
        projects: [
          {
            title: 'Project One',
            image: vueLogo,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac suscipit sapien.',
            tags: ['Lorem', 'Ipsum', 'Dolor']
          },
          {
            title: 'Project Two',
            image: vueLogo,
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
            tags: ['Ut', 'Enim', 'Minim']
          },
          {
            title: 'Project Three',
            image: vueLogo,
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
            tags: ['Duis', 'Aute', 'Irure']
          },
          {
            title: 'Project Four',
            image: vueLogo,
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
            tags: ['Excepteur', 'Sint', 'Occaecat']
          },
          {
            title: 'Project Five',
            image: vueLogo,
            description: 'Mauris ullamcorper sapien ipsum, ac commodo nisi pulvinar non. Pellentesque habitant morbi.',
            tags: ['Mauris', 'Ullamcorper', 'Pulvinar']
          },
          {
            title: 'Project Six',
            image: vueLogo,
            description: 'Suspendisse potenti. Morbi tempor, diam eget malesuada dapibus, erat sapien aliquam ipsum.',
            tags: ['Suspendisse', 'Potenti', 'Morbi']
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .projects-section {
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
  

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
  

  .card {
    background: #1e1e1e;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: left;
    transition: transform 0.2s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
 
  .card-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .card-title {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: #ffffff;
  }
  
  .card-description {
    margin-top: 0.5rem;
    line-height: 1.4;
    color: #cccccc;
  }
  
  .card-tags {
    margin-top: 1rem;
  }
  
  .tag {
    display: inline-block;
    background-color: #444444;
    color: #ffffff;
    border-radius: 4px;
    padding: 0.25rem 0.6rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
  </style>
  