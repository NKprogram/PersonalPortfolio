<template> 
  <div>
    <!-- The background. -->
    <ConnectTheDots/>
    <!--the Navigation bar-->
    <NavBar/>
     <!-- intro -->
    <IntroSection/>
    <!-- the about me-->
     <AboutMe/>
    <!-- the experience -->
    <Experience/>
    <!-- the projects -->
    <Projects/>
    <!-- the skills -->
    <Skills/>
    <!-- the contact me -->
    <ContactMe/>
    <!-- the footer -->
    <Footer/>
    <!--Back to the top-->
    <BackToTop/>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
//import components asynchronously
const ConnectTheDots = defineAsyncComponent(()=>import('@/components/ConnectTheDots.vue'));
const NavBar = defineAsyncComponent(()=>import('@/components/NavBar.vue'));
const IntroSection = defineAsyncComponent(()=>import('@/components/IntroSection.vue'));
const AboutMe = defineAsyncComponent(()=>import('@/components/AboutMe.vue'));
const Experience = defineAsyncComponent(() => import('@/components/Experience.vue'));
const Projects = defineAsyncComponent(() => import('@/components/Projects.vue'));
const Skills = defineAsyncComponent(() => import('@/components/Skills.vue'));
const ContactMe = defineAsyncComponent(() => import('@/components/ContactMe.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'));
</script>

