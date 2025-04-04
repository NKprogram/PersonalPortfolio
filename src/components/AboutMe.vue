<template>
  <section id="about" class="about-me">
    <div class="content-container">
      <!-- Profile Image -->
      <div class="image-container">
        <img 
          src="@/assets/vue.svg" 
          alt="Profile Photo"
          class="profile-picture"
        />
      </div>
    
      <!-- About Me Description -->
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, 
          eget lacinia odio sem nec elit.
        </p>
    
        <!-- Links -->
        <div class="links">
          <a
            href="https://www.linkedin.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="@/assets/NuuuradinKoraneResume-3.pdf"
            download
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style scoped>
.about-me {
  /* Removed min-height: 100vh to reduce the vertical gap */
  /* Instead, use top/bottom padding to add a bit of spacing */
  padding: 4rem 0;

  position: relative;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-container {
  pointer-events: auto;
  z-index: 10;
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  /* Adjust if you need more or less spacing inside */
  padding: 2rem;
}

.image-container {
  margin-bottom: 1.5rem;
}

.profile-picture {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
}

.description {
  color: #ffffff;
}

.links {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}

.links a {
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
}
</style>
