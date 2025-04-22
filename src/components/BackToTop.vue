<template>
  <button
    v-if="isVisible"
    class="back-to-top"
    @click="scrollToTop"
    aria-label="Back to top"
  >
    <!-- SVG icon for the arrow pointing up -->
    <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4l-8 8h6v8h4v-8h6l-8-8z" />
    </svg>
  </button>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style scoped>

.back-to-top {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  overflow: hidden;
  background-size: 300% 300%;
  cursor: pointer;
  backdrop-filter: blur(1rem);
  border-radius: 50%;
  transition: transform 0.5s, box-shadow 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.arrow {
  width: 1.5rem;
  height: 1.5rem;
  fill: #fff;
  transition: transform 0.3s ease;
}


.back-to-top:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.back-to-top:active {
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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

@media screen and (max-width: 768px) {
  .back-to-top {
    width: 3rem;
    height: 3rem;
    bottom: 1.5rem;
    right: 1.5rem;
  }
  .arrow {
    width: 1.2rem;
    height: 1.2rem;
  }
}
</style>
