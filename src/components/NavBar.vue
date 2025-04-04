<template>
  <header
    :class="['navbar', isScrolled ? 'scrolled' : '']"
  >
    <div class="navbar-container">
      <!-- Logo -->
      <div class="logo">
        NK
      </div>
      <!-- Mobile Toggle Button -->
      <div class="mobile-menu-toggle">
        <button
          type="button"
          class="block focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span v-if="isMenuOpen" class="text-5xl">
            <img
              src="https://img.icons8.com/color/100/ffffff/delete-sign.png"
              alt="close"
              width="40"
              height="40"
            />
          </span>
          <span v-else class="text-5xl">
            <img
              src="https://img.icons8.com/color/100/ffffff/menu.png"
              alt="menu"
              width="40"
              height="40"
            />
          </span>
        </button>
      </div>

      <!-- Desktop Navigation Menu -->
      <nav
        :class="[
          'nav-menu',
          isMenuOpen ? 'menu-open' : 'menu-closed'
        ]"
      >
        <ul class="shadow-button-set">
          <li 
            v-for="item in Menu" 
            :key="item.name"
            class="nav-item"
            :style="{ background: item.color }"
          >
            <button 
              class="nav-link" 
              :style="{ border: `2px solid ${item.color}` }"
              @click="scrollToSection(item.href)"
              :class="{ 'pressed': activeSection === item.href }"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

//menu items with colors
const Menu = ref([
  { name: 'About Me', href: '#about', color: '#3B82F6' },      // Blue
  { name: 'Experience', href: '#experience', color: '#4F46E5' }, // Indigo
  { name: 'Projects', href: '#projects', color: '#F59E0B' },   // Amber
  { name: 'Skills', href: '#skills', color: '#10B981' },       // Emerald
  { name: 'Contact', href: '#contact', color: '#EF4444' }      // Red
]);


// Mobile menu toggle state
const isMenuOpen = ref(false);
// Active section state
const activeSection = ref('');
// Scrolled state for navbar
const isScrolled = ref(false);

// Update active section based on hash change
function updateActiveSection() {
  activeSection.value = window.location.hash || '';
}

// Scroll to section and close mobile menu
function scrollToSection(href) {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  window.location.hash = href;
  activeSection.value = href;
}

// Check which section is in view on scroll
function handleScroll() {
  isScrolled.value = window.scrollY > 0;
  const sections = Menu.value.map(item => item.href.substring(1));
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = '#' + section;
        break;
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('hashchange', updateActiveSection);
  window.addEventListener('scroll', handleScroll);
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener('hashchange', updateActiveSection);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

:root {
  --gradient: linear-gradient(45deg, #ff3366, #ff6b6b, #4834d4, #686de0);
  --glass-bg: rgba(255, 255, 255, 0.05);
  --border: 1px solid rgba(255, 255, 255, 0.1);
  --shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

body {
  background: #0a0a0a;
  min-height: 100vh;
}


/* Navbar styling */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.8rem 5%; 
  background: #000; 
  border-bottom: var(--border);
  z-index: 1000;
  transition: padding 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); 
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1)); 
}

.navbar.scrolled {
  padding: 0.5rem 5%; 
  background: #000; 
}


.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  position: relative;
}


.logo {
  font-family: 'SpaceNova', sans-serif; 
  font-size: 2.5rem; 
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 8s linear infinite;
  background-size: 300%;
  letter-spacing: -0.5px;
  margin-left: -2%; 
}

/* Mobile menu toggle button container */
.mobile-menu-toggle {
  display: none; 
  z-index: 30;
}

/* Navigation menu */
.nav-menu {
  transition: all 0.3s ease;
}


.shadow-button-set {
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.5vmin; 
  list-style: none;
}

.shadow-button-set > li {
  display: inline-flex;
  margin: 6px;
}

.shadow-button-set > li:is(:hover, :focus-within) > button:not(:active):not(.pressed) {
  --distance: -6px; 
  color: #fff;
}

.shadow-button-set button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  font-family: 'Nebula', sans-serif; 
  font-size: 1.2rem;
  background: #131414;
  text-transform: lowercase;
  color: #fff;
  --distance: 0;
  transform: translateX(var(--distance)) translateY(var(--distance));
  padding: 0.4rem 0.8rem;
  cursor: pointer;
}



.shadow-button-set button.pressed {
  --distance: -6px; 
  color: #fff;
  opacity: 1 !important; 
}

@media (prefers-reduced-motion: no-preference) {
  .shadow-button-set button {
    will-change: transform;
    transition: transform 0.2s ease;
  }
}

.nav-link:active {
  color: #fff;
}


.activeLink {
  opacity: 1 !important;
}


@font-face {
  font-family: 'Nebula';
  src: url('../assets/fonts/NebulaRegular-2O2y3.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'SpaceNova';
  src: url('../assets/fonts/SpaceNova-6Rpd1.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}


@keyframes gradient {
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


@media (max-width: 768px) {
  .navbar-container {
    min-width: auto;
  }
  
  .mobile-menu-toggle {
    display: block; 
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .menu-closed {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  
  .menu-open {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  
  .shadow-button-set {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
  
  .shadow-button-set button {
    font-size: 1.3rem; 
  }
  
  .logo {
    margin-left: 0; 
  }
}
</style>

