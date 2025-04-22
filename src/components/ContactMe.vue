<template>
  <section id="contact" class="contact-section">
    <div class="content-container">
      <!-- Celestial elements for background animation -->
      <div class="celestial-elements">
        <div class="stars"></div>
        <!-- Generate shooting stars -->
        <span 
          v-for="(star, index) in shootingStars" 
          :key="'star-' + index" 
          class="shooting-star"
          :style="{
            top: star.top,
            right: star.right,
            background: star.background,
            boxShadow: star.boxShadow,
            animationDelay: star.delay,
            animationDuration: star.duration
          }">
        </span>
        <!-- Generate comets  -->
        <span 
          v-for="(comet, index) in comets" 
          :key="'comet-' + index"
          class="comet"
          :style="{
            top: comet.top,
            right: comet.right,
            background: comet.background,
            boxShadow: comet.boxShadow,
            animationDelay: comet.delay,
            animationDuration: comet.duration
          }">
        </span>
      </div>
      <!-- Main heading and subtitle -->
      <h2 class="section-heading">GET IN TOUCH</h2>
      <h3 class="introduction-subtitle">Feel free to reach out.</h3>
      <!-- Contact form using formspree -->
      <form action="https://formspree.io/f/xpwdzajg" method="POST" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="btn">
          <strong>Send Message.</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {
      // shooting stars and comets data
      shootingStars: [
        { top: "10%", right: "5%", delay: "0s",   duration: "2s",   background: "#fff",   boxShadow: "0 0 0 4px rgba(255,255,255,0.1), 0 0 0 8px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,1)" },
        { top: "15%", right: "25%", delay: "0.8s", duration: "5s",   background: "#fff",   boxShadow: "0 0 0 4px rgba(255,255,255,0.1), 0 0 0 8px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,1)" },
        { top: "30%", right: "10%", delay: "1.4s", duration: "3.5s", background: "#fff",   boxShadow: "0 0 0 4px rgba(255,255,255,0.1), 0 0 0 8px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,1)" },
        { top: "50%", right: "35%", delay: "2.1s", duration: "6s",   background: "#fff",   boxShadow: "0 0 0 4px rgba(255,255,255,0.1), 0 0 0 8px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,1)" },
        { top: "20%", right: "50%", delay: "3.2s", duration: "4.4s", background: "#fff",   boxShadow: "0 0 0 4px rgba(255,255,255,0.1), 0 0 0 8px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,1)" },
        { top: "75%", right: "5%",  delay: "4.5s", duration: "5.6s", background: "#ff8f50", boxShadow: "0 0 0 4px rgba(255,143,80,0.1), 0 0 0 8px rgba(255,143,80,0.1), 0 0 20px rgba(255,143,80,1)" },
        { top: "5%",  right: "70%", delay: "5.2s", duration: "4s",   background: "#50ff8d", boxShadow: "0 0 0 4px rgba(80,255,141,0.1), 0 0 0 8px rgba(80,255,141,0.1), 0 0 20px rgba(80,255,141,1)" },
        { top: "60%", right: "75%", delay: "6s",   duration: "6.4s", background: "#ff50dc", boxShadow: "0 0 0 4px rgba(255,80,220,0.1), 0 0 0 8px rgba(255,80,220,0.1), 0 0 20px rgba(255,80,220,1)" }
      ],
      comets: [
        { top: "40%", right: "15%", delay: "0.5s", duration: "8s", background: "#50c5ff", boxShadow: "0 0 0 4px rgba(80,197,255,0.1), 0 0 0 8px rgba(80,197,255,0.1), 0 0 20px rgba(80,197,255,1)" },
        { top: "65%", right: "20%", delay: "2s",   duration: "10s", background: "#aa50ff", boxShadow: "0 0 0 4px rgba(170,80,255,0.1), 0 0 0 8px rgba(170,80,255,0.1), 0 0 20px rgba(170,80,255,1)" },
        { top: "85%", right: "40%", delay: "3.5s", duration: "7s", background: "#ffcb50", boxShadow: "0 0 0 4px rgba(255,203,80,0.1), 0 0 0 8px rgba(255,203,80,0.1), 0 0 20px rgba(255,203,80,1)" }
      ]
    };
  }
};
</script>

<style scoped>
.contact-section {
  pointer-events: none;
  padding: 4rem 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.content-container {
  pointer-events: none;
  position: relative;
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, rgba(5,5,20,0.8), rgba(15,15,40,0.8));
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(139,233,253,0.3);
  box-shadow: 0 0 40px rgba(63,81,181,0.4);
  backdrop-filter: blur(5px);
  overflow: hidden;
  z-index: 10;
}
.celestial-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}
.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(1px 1px at 25px 5px, white, rgba(255,255,255,0)),
    radial-gradient(1px 1px at 50px 25px, white, rgba(255,255,255,0)),
    radial-gradient(1px 1px at 125px 20px, white, rgba(255,255,255,0)),
    radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255,255,255,0)),
    radial-gradient(2px 2px at 15px 125px, white, rgba(255,255,255,0)),
    radial-gradient(1px 1px at 110px 80px, white, rgba(255,255,255,0)),
    radial-gradient(1.5px 1.5px at 160px 120px, white, rgba(255,255,255,0)),
    radial-gradient(1px 1px at 200px 150px, white, rgba(255,255,255,0)),
    radial-gradient(1.5px 1.5px at 250px 220px, white, rgba(255,255,255,0)),
    radial-gradient(1px 1px at 300px 250px, white, rgba(255,255,255,0)),
    radial-gradient(2px 2px at 350px 280px, white, rgba(255,255,255,0)),
    radial-gradient(1.5px 1.5px at 400px 320px, white, rgba(255,255,255,0)),
    radial-gradient(1px 1px at 450px 350px, white, rgba(255,255,255,0)),
    radial-gradient(1.5px 1.5px at 500px 400px, white, rgba(255,255,255,0)),
    radial-gradient(1px 1px at 550px 450px, white, rgba(255,255,255,0)),
    radial-gradient(2px 2px at 600px 500px, white, rgba(255,255,255,0)),
    radial-gradient(1px 1px at 650px 550px, white, rgba(255,255,255,0)),
    radial-gradient(1.5px 1.5px at 700px 600px, white, rgba(255,255,255,0));
  background-repeat: repeat;
  z-index: 1;
}
.shooting-star {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255,255,255,0.1), 0 0 0 8px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,1);
  opacity: 0;
  animation-name: animate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.shooting-star::before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 1px;
  background: linear-gradient(90deg, #fff, transparent);
}
.comet {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  opacity: 0;
  animation-name: animate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.comet::before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 250px;
  height: 2px;
}
@keyframes animate {
  0% {
    transform: rotate(315deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(315deg) translateX(-1000px);
    opacity: 0;
  }
}
.section-heading {
  text-align: center;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-family: 'TechnoRace-Italic', sans-serif;
  color: #ffffff;
  text-shadow: 0 0 12px rgba(139, 233, 253, 0.7);
  letter-spacing: 3px;
  position: relative;
  z-index: 10;
}
.introduction-subtitle {
  font-size: 2.5rem;
  color: rgba(255,255,255,0.7);
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  z-index: 10;
}
.contact-form {
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}
label {
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 5px rgba(139,233,253,0.5);
}
input, textarea {
  padding: 0.75rem;
  border: 1px solid rgba(139,233,253,0.3);
  border-radius: 8px;
  background-color: rgba(30,30,46,0.6);
  color: #fff;
  width: 100%;
  font-size: 1rem;
  resize: none;
  outline: none;
  transition: all 0.3s ease;
}
input:focus, textarea:focus {
  border-color: rgba(142,81,234,0.7);
  box-shadow: 0 0 10px rgba(142,81,234,0.3);
}
input::placeholder, textarea::placeholder {
  color: #888;
}
.btn {
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
  background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin-left: auto;
  margin-top: 1rem;
}
#container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
}
strong {
  z-index: 2;
  font-family: "Avalors Personal Use", sans-serif;
  font-size: 12px;
  letter-spacing: 5px;
  color: #fff;
  text-shadow: 0 0 4px #fff;
}
#glow {
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
  background: rgba(254,83,186,0.636);
}
.circle:nth-of-type(2) {
  background: rgba(142,81,234,0.704);
}
.btn:hover #container-stars {
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
  background-image: radial-gradient(#fff 1px, transparent 1%);
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
  background-image: radial-gradient(#fff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
}
@keyframes animStar {
  from { transform: translateY(0); }
  to { transform: translateY(-135rem); }
}
@keyframes animStarRotate {
  from { transform: rotate(360deg); }
  to { transform: rotate(0); }
}
@keyframes gradient_301 {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0,0,0,0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0,0,0,0);
  }
  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0,0,0,0);
  }
}
@media (max-width: 768px) {
  .content-container {
    width: 95%;
    padding: 1.5rem;
  }
  .section-heading {
    font-size: 2.5rem;
  }
  .introduction-subtitle {
    font-size: 1.5rem;
  }
  .btn {
    width: 100%;
  }
}
</style>