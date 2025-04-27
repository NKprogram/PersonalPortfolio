<template>
  <section id="about" class="about-me">
    <div class="content-container">
      <h1 class="introduction-title">INTRODUCTION</h1>
      <h2 class="introduction-subtitle">Who am I?</h2>

      <div class="space-elements">
        <div class="astronaut astronaut-left"></div>
        <div class="astronaut astronaut-right"></div>
      </div>

      <div class="card">
        <div class="stars-background">
          <div class="stars-layer"></div>
        </div>
        
        <div class="card-content">
          <div class="profile-column">
            <div class="profile-container">
              <img
                src="@/assets/Images/MeFRPic.png"
                alt="Profile Photo"
                class="profile-picture"
              />
              <div class="orbit-ring">
                <div class="moon"></div>
              </div>
            </div>
          </div>
          <div class="info-column">
            <div class="about-text">
              <div class="about-point">
                <span class="about-point-text">Recent <span class="keyword">Computer Science</span> graduate from UAlberta, focused on software development and machine learning.</span>
              </div>
              <div class="about-point">
                <span class="about-point-text">Interested in <span class="keyword">problem-solving</span>, <span class="keyword">smart designs</span>, and <span class="keyword">creative fixes</span>.</span>
              </div>
              <div class="about-point">
                <span class="about-point-text">Built <span class="keyword">full‑stack</span> Webapps, worked on <span class="keyword">data-driven</span> projects, and helped ship tools serving real users.</span>
              </div>
              <div class="about-point">
                <span class="about-point-text">Looking for a <span class="keyword">software developer</span> role where I can <span class="keyword">learn</span>, <span class="keyword">build</span>, and <span class="keyword">grow</span>.</span>
              </div>
            </div>           
            <div class="social-links">
              <a
                href="https://github.com/NKprogram"
                target="_blank"
                rel="noopener noreferrer"
                class="cosmic-btn social-btn"
                aria-label="GitHub Profile"
              >
                <div id="container-stars">
                  <div id="stars"></div>
                </div>
                <span class="btn-content">
                  <svg viewBox="0 0 16 16" fill="currentColor" width="24" height="24">
                    <path
                      fill-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 
                      7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
                      1.08.58 1.23.82.72 1.21 1.87.87 
                      2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
                      0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
                      0 0 .67-.21 2.2.82.64-.18 
                      1.32-.27 2-.27.68 0 1.36.09 
                      2 .27 1.53-1.04 
                      2.2-.82 2.2-.82.44 1.1.16 1.92.08 
                      2.12.51.56.82 1.28.82 2.15 
                      0 3.07-1.87 3.75-3.65 
                      3.95.29.25.54.73.54 1.48 
                      0 1.07-.01 1.93-.01 2.2 
                      0 .21.15.46.55.38A8.013 8.013 0 0 0 16 
                      8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </span>
                <div id="glow">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/korane-nuuradin/"
                target="_blank"
                rel="noopener noreferrer"
                class="cosmic-btn social-btn"
                aria-label="LinkedIn Profile"
              >
                <div id="container-stars">
                  <div id="stars"></div>
                </div>
                <span class="btn-content">
                  <svg viewBox="0 0 448 512" fill="currentColor" width="24" height="24">
                    <path
                      d="M100.28 448H7.4V149.5h92.88zm-46.44-340C24 108 
                      0 83.64 0 53.5A53.5 53.5 0 01106.78 53.5c0 30.14-24 
                      54.49-52.94 54.49zM447.9 448h-92.68V302.4c0-34.7-.7-79.31-48.34-79.31-48.38 
                      0-55.8 37.82-55.8 76.89V448h-92.7V149.5h89.07v40.79h1.28c12.41-23.47 
                      42.67-48.34 87.88-48.34 94 0 111.32 61.89 111.32 
                      142.3V448z"
                    />
                  </svg>
                </span>
                <div id="glow">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </a>

              <a
                href="/NuuradinKoraneResumeSE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="cosmic-btn resume-btn"
              >
                <div id="container-stars">
                  <div id="stars"></div>
                </div>
                <strong>Resume</strong>
                <div id="glow">
                  <div class="circle"></div>
                  <div class="circle"></div>
                </div>
              </a>
            </div>
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
  src: url('../assets/Fonts/TechnoRace-Italic.otf') format('opentype');
  font-style: italic;
  font-weight: 400;
}

.about-me {
  padding: 4rem 0;
  margin-bottom: 12rem;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  min-height: 600px;
}

.content-container {
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  max-width: 1000px;
  width: 100%;
  position: relative;
  pointer-events: none;
}

.introduction-title {
  text-align: center;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-family: 'TechnoRace-Italic', sans-serif;
  color: #ffffff;
  text-shadow: 0 0 12px rgba(139, 233, 253, 0.7);
  letter-spacing: 3px;
  pointer-events: none;
}

.introduction-subtitle {
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
}

.space-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.astronaut {
  position: absolute;
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
}

.astronaut-left {
  left: -1%;
  top: 180px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 120'%3E%3Cdefs%3E%3ClinearGradient id='visor' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%2366c5ff' stop-opacity='0.7'/%3E%3Cstop offset='100%25' stop-color='%233280ff' stop-opacity='0.9'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg%3E%3Cellipse cx='50' cy='40' rx='30' ry='30' fill='white'/%3E%3Crect x='20' y='40' width='60' height='50' rx='20' fill='white'/%3E%3Cellipse cx='50' cy='40' rx='22' ry='22' fill='url(%23visor)'/%3E%3Ccircle cx='40' cy='90' r='10' fill='white'/%3E%3Ccircle cx='60' cy='90' r='10' fill='white'/%3E%3Crect x='45' y='70' width='10' height='20' fill='%23444'/%3E%3Crect x='35' y='40' width='30' height='5' fill='%23444'/%3E%3Ccircle cx='32' cy='35' r='3' fill='%23ff5555'/%3E%3Ccircle cx='68' cy='35' r='3' fill='%23ff5555'/%3E%3C/g%3E%3C/svg%3E");
  animation: float-left 15s ease-in-out infinite;
}

.astronaut-right {
  right: -2%;
  top: 300px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 120'%3E%3Cdefs%3E%3ClinearGradient id='visor' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%2366c5ff' stop-opacity='0.7'/%3E%3Cstop offset='100%25' stop-color='%233280ff' stop-opacity='0.9'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg%3E%3Cellipse cx='50' cy='40' rx='30' ry='30' fill='white'/%3E%3Crect x='20' y='40' width='60' height='50' rx='20' fill='white'/%3E%3Cellipse cx='50' cy='40' rx='22' ry='22' fill='url(%23visor)'/%3E%3Ccircle cx='40' cy='90' r='10' fill='white'/%3E%3Ccircle cx='60' cy='90' r='10' fill='white'/%3E%3Crect x='45' y='70' width='10' height='20' fill='%23444'/%3E%3Crect x='35' y='40' width='30' height='5' fill='%23444'/%3E%3Ccircle cx='32' cy='35' r='3' fill='%23ff5555'/%3E%3Ccircle cx='68' cy='35' r='3' fill='%23ff5555'/%3E%3C/g%3E%3C/svg%3E");
  transform: rotate(45deg);
  animation: float-right 15s ease-in-out 2s infinite;
}

.card {
  background: rgba(25, 25, 40, 0.8);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  padding: 3.5rem;
  max-width: 1000px;
  width: 92%;
  position: relative;
  overflow: hidden;
  margin-bottom: 2em;
  pointer-events: auto;
  box-shadow: 0 0 40px rgba(111, 66, 193, 0.4);
  border: 1px solid rgba(111, 66, 193, 0.3);
  z-index: 2;
  min-height: 350px;
}

.stars-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
}

.stars-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
    radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 120px 130px, #fff, rgba(0,0,0,0)),
    radial-gradient(1px 1px at 160px 60px, #ddd, rgba(0,0,0,0));
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0.5;
  animation: twinkling 10s linear infinite;
}

.card-content {
  position: relative;
  z-index: 5;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
}

.profile-column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-column {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
}

.profile-container {
  position: relative;
  width: 260px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.95;
  border: 3px solid rgba(255, 255, 255, 0.3);
  z-index: 2;
  box-shadow: 0 0 15px rgba(139, 233, 253, 0.3);
}

.orbit-ring {
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 2px dashed rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.moon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center left;
  width: 40px;
  height: 40px;
  background: linear-gradient(145deg, #e6e6e6, #b3b3b3);
  border-radius: 50%;
  box-shadow: inset -6px -6px 12px rgba(0, 0, 0, 0.2);
  animation: rotate-moon 12s linear infinite;
  z-index: 3;
}

.moon::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  width: 10px;
  height: 10px;
  background: rgba(200, 200, 200, 0.8);
  border-radius: 50%;
}

.about-text {
  color: white;
  font-size: 1.2rem;
  line-height: 1.7;
  margin: 0;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.about-point {
  position: relative;
  padding-left: 3rem;
  background: linear-gradient(90deg, rgba(111, 66, 193, 0.2), transparent);
  border-radius: 8px;
  padding: 0.8rem 1rem 0.8rem 3.5rem;
  transition: all 0.3s ease;
  border-left: 2px solid rgba(139, 233, 253, 0.7);
  overflow: hidden;
}

.about-point:hover {
  transform: translateX(5px);
  background: linear-gradient(90deg, rgba(111, 66, 193, 0.3), transparent);
  box-shadow: 0 0 15px rgba(139, 233, 253, 0.2);
}

.about-point::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 40px;
  background: linear-gradient(90deg, rgba(139, 233, 253, 0.2), transparent);
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
}

/* Remove emoji from content and use as pseudo-element */
.about-point:nth-child(1)::after { content: "🎓"; }
.about-point:nth-child(2)::after { content: "🧠"; }
.about-point:nth-child(3)::after { content: "🛠️"; }
.about-point:nth-child(4)::after { content: "🔍"; }

.about-point::after {
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7));
  animation: pulse 3s infinite;
}


.about-point-text {
  font-family: 'Space Mono', monospace;
  position: relative;
  display: inline;
  background: linear-gradient(90deg, #8be9fd, #bd93f9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 8px rgba(139, 233, 253, 0.3);
}


.keyword {
  color: #ff79c6;
  font-weight: bold;
  position: relative;
  text-shadow: 0 0 5px rgba(255, 121, 198, 0.5);
}

@keyframes pulse {
  0%, 100% {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(-50%) scale(1.1);
    opacity: 0.9;
  }
}


@media (max-width: 768px) {
  .about-point {
    padding-left: 3rem;
  }
  
  .about-point::after {
    left: 0.8rem;
  }
}

@media (max-width: 576px) {
  .about-text {
    font-size: 1.1rem;
  }
  
  .about-point {
    padding: 0.7rem 0.8rem 0.7rem 2.8rem;
  }
  
  .about-point::after {
    font-size: 1.2rem;
    left: 0.7rem;
  }
}

.about-point:last-child {
  margin-bottom: 0;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
}

.cosmic-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 3rem;
  overflow: hidden;
  cursor: pointer;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(
      137.48deg,
      #ffdb3b 10%,
      #fe53bb 45%,
      #8f51ea 67%,
      #0044ff 87%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  text-decoration: none;
  margin-top: 0.75rem;
  position: relative;
}

.social-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
}

.resume-btn {
  width: auto;
  padding: 0 1.8rem;
  height: 56px;
}

#container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: inherit;
}

.btn-content {
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-shadow: 0 0 4px white;
}

.btn-content svg {
  width: 28px;
  height: 28px;
}

strong {
  z-index: 2;
  font-family: "Avalors Personal Use", sans-serif;
  font-size: 15px;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 6px white;
  display: flex;
  align-items: center;
  justify-content: center;
}

#glow {
  position: absolute;
  display: flex;
  width: 80%;
  height: 25px;
}

.circle {
  width: 100%;
  height: 25px;
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

.cosmic-btn:hover #container-stars {
  z-index: 1;
  background-color: #212121;
}

.cosmic-btn:hover {
  transform: scale(1.1);
}

.cosmic-btn:active {
  border: double 4px #fe53bb;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.cosmic-btn:active .circle {
  background: #fe53bb;
}

#stars {
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
}

#stars::after {
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

#stars::before {
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

@keyframes rotate-moon {
  0% {
    transform: rotate(0deg) translateX(140px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(140px) rotate(-360deg);
  }
}

@keyframes twinkling {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-200px);
  }
}

@keyframes float-left {
  0%, 100% {
    transform: translateX(0) translateY(0) rotate(-10deg);
  }
  50% {
    transform: translateX(20px) translateY(-20px) rotate(10deg);
  }
}

@keyframes float-right {
  0%, 100% {
    transform: translateX(0) translateY(0) rotate(45deg);
  }
  50% {
    transform: translateX(-20px) translateY(-20px) rotate(30deg);
  }
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

@media screen and (max-width: 992px) {
  .content-container {
    max-width: 95%;
  }
  
  .card {
    padding: 3rem;
  }
  
  .about-text {
    font-size: 1.2rem;
  }
}

@media (max-width: 932px) {
  .astronaut-left {
    left: 2%;
    top: 180px;
    width: 90px;
    height: 90px;
    opacity: 0.8;
  }
  
  .astronaut-right {
    right: 2%;
    top: 300px;
    width: 90px;
    height: 90px;
    opacity: 0.8;
  }

  .card {
    max-width: 92%;
    padding: 3rem;
  }

  .profile-container {
    width: 240px;
    height: 240px;
  }

  .profile-picture {
    width: 180px;
    height: 180px;
  }

  .orbit-ring {
    width: 260px;
    height: 260px;
  }

  .moon {
    width: 35px;
    height: 35px;
  }

  @keyframes rotate-moon {
    0% {
      transform: rotate(0deg) translateX(130px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(130px) rotate(-360deg);
    }
  }
}

@media (max-width: 768px) {
  .introduction-title {
    font-size: 2.5rem;
  }
  
  .introduction-subtitle {
    font-size: 1.8rem;
  }

  .card {
    padding: 2.5rem;
  }
  
  .card-content {
    flex-direction: column;
    gap: 2.5rem;
  }
  
  .info-column {
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
  
  .profile-container {
    width: 200px;
    height: 200px;
  }
  
  .profile-picture {
    width: 160px;
    height: 160px;
  }
  
  .orbit-ring {
    width: 220px;
    height: 220px;
  }
  
  .moon {
    width: 32px;
    height: 32px;
  }
  
  @keyframes rotate-moon {
    0% {
      transform: rotate(0deg) translateX(110px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(110px) rotate(-360deg);
    }
  }
  
  .astronaut-left {
    left: 0;
    transform: scale(0.8);
    top: 150px;
    width: 70px;
    height: 70px;
    opacity: 0.7;
  }
  
  .astronaut-right {
    right: 0;
    transform: scale(0.8) rotate(45deg);
    top: 280px;
    width: 70px;
    height: 70px;
    opacity: 0.7;
  }
}

@media (max-width: 576px) {
  .card {
    padding: 2rem;
    width: 85%;
  }
  
  .profile-container {
    width: 180px;
    height: 180px;
  }
  
  .profile-picture {
    width: 140px;
    height: 140px;
  }
  
  .orbit-ring {
    width: 200px;
    height: 200px;
  }
  
  .moon {
    width: 28px;
    height: 28px;
  }
  
  @keyframes rotate-moon {
    0% {
      transform: rotate(0deg) translateX(100px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(100px) rotate(-360deg);
    }
  }
  
  .social-links {
    gap: 1rem;
  }
  
  .cosmic-btn {
    transform: scale(0.9);
  }
  
  .resume-btn {
    height: 50px;
  }
  
  .astronaut-left,
  .astronaut-right {
    opacity: 0.5;
    transform: scale(0.6);
    width: 60px;
    height: 60px;
  }
  
  .astronaut-right {
    transform: scale(0.6) rotate(45deg);
  }
}
</style>