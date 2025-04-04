<template>
    <footer class="site-footer">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} Your Name or Company. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  .site-footer {
    width: 100%;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 1rem;
    position: relative;
    /* If you want it stuck to the bottom at all times (optional):
       position: fixed;
       left: 0;
       bottom: 0;
    */
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>
  