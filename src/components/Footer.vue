<template>
  <footer class="site-footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Nuuradin Korane. All rights reserved.</p>
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
  background: transparent;
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: relative;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
