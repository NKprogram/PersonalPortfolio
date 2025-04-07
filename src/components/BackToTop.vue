<template>
    <button
      v-if="isVisible"
      class="back-to-top"
      @click="scrollToTop"
    >
      ↑
    </button>
  </template>
  
  <script>
  export default {
    name: 'BackToTop',
    data() {
      return {
        isVisible: false
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.isVisible = window.scrollY > 300;
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    line-height: 0.9;
    text-align: center;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    z-index: 999; 
    transition: transform 0.2s ease;
  }
  
  .back-to-top:hover {
    transform: translateY(-3px);
  }
  </style>
  