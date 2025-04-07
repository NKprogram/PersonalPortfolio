<template>
  <section id="about" class="about-me">
    <div class="content-container">
      <h1 class="introduction-title">INTRODUCTION</h1>
      <h2 class="introduction-subtitle">Who am I?</h2>

      <div class="card">
        <!-- Profile Photo -->
        <img
          src="@/assets/images/mebald.png"
          alt="Profile Photo"
          class="profile-picture"
        />

        <!-- About text -->
        <p class="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis,
          est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
          sem nec elit.
        </p>

        <!-- Social Links: Two Rows -->
        <div class="social-links">
          <!-- Row 1: GitHub and LinkedIn (Circular) -->
          <div class="social-row">
            <!-- GitHub Button -->
            <a
              href="https://github.com/NKprogram"
              target="_blank"
              rel="noopener noreferrer"
              class="btn social-btn circle-btn"
            >
              <span class="btn-content">
                <svg viewBox="0 0 16 16" fill="currentColor" width="24" height="24">
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </span>
              <div class="container-stars">
                <div class="stars"></div>
              </div>
              <div class="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </a>

            <!-- LinkedIn Button -->
            <a
              href="https://www.linkedin.com/in/korane-nuuradin/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn social-btn circle-btn"
            >
              <span class="btn-content">
                <svg viewBox="0 0 448 512" fill="currentColor" width="24" height="24">
                  <path
                    d="M100.28 448H7.4V149.5h92.88zm-46.44-340C24 108 0 83.64 0 53.5A53.5 53.5 0 01106.78 53.5c0 30.14-24 54.49-52.94 54.49zM447.9 448h-92.68V302.4c0-34.7-.7-79.31-48.34-79.31-48.38 0-55.8 37.82-55.8 76.89V448h-92.7V149.5h89.07v40.79h1.28c12.41-23.47 42.67-48.34 87.88-48.34 94 0 111.32 61.89 111.32 142.3V448z"
                  />
                </svg>
              </span>
              <div class="container-stars">
                <div class="stars"></div>
              </div>
              <div class="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </a>
          </div>

          <!-- Row 2: Resume (Download) -->
          <div class="social-row">
            <a
              href="@/assets/files/NuuuradinKoraneResume-3.pdf"
              download
              rel="noopener noreferrer"
              class="btn social-btn resume-btn"
            >
              <strong>Resume</strong>
              <div class="container-stars">
                <div class="stars"></div>
              </div>
              <div class="glow">
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
            </a>
          </div>
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
@font-face {
  font-family: 'TechnoRace-Italic';
  src: url('../assets/fonts/TechnoRace-Italic.otf') format('opentype');
  font-style: italic;
  font-weight: 400;
}


.about-me {
  padding: 6rem 2rem;
  background: transparent;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  pointer-events: none;
}


.content-container {
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  max-width: 1200px;
  width: 100%;
}

.introduction-title {
  font-family: 'TechnoRace-Italic', sans-serif;
  font-size: 3rem;
  color: #ffffff;
  letter-spacing: 2px;
}

.introduction-subtitle {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 3rem 2rem;
  max-width: 700px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2em;
  pointer-events: auto;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.95;
}

.about-text {
  color: white;
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 550px;
}


.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
}


.btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  overflow: hidden;
  height: 3rem;
  background-size: 300% 300%;
  cursor: pointer;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  text-decoration: none;
  color: #ffffff;
}


.btn .btn-content,
.btn strong {
  z-index: 2;
  font-family: "Avalors Personal Use", sans-serif;
  font-size: 12px;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
  display: flex;
  align-items: center;
  justify-content: center;
}


.container-stars,
.glow,
.stars,
.circle {
  pointer-events: none;
}

.container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
}

.glow {
  position: absolute;
  display: flex;
  width: 12rem;
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

.btn:hover .container-stars {
  z-index: 1;
  background-color: #212121;
}

.btn:hover {
  transform: scale(1.1);
}

.btn:active {
  border: double 4px #fe53bb;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.btn:active .circle {
  background: #fe53bb;
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

@keyframes animStar {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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

.circle-btn {
  width: 56px !important;
  height: 56px !important;
  border-radius: 50% !important;
  padding: 0;
}

.resume-btn {
  width: auto;
  padding: 0 1.5rem;
  height: 56px;
  border-radius: 50px;
}

@media (max-width: 768px) {
  .btn {
    width: 10rem;
    height: 2.5rem;
  }
  .btn .btn-content,
  .btn strong {
    font-size: 10px;
  }
  .circle-btn {
    width: 44px !important;
    height: 44px !important;
  }
}
</style>

