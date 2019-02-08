<template>
  <div class="progress" :style="barStyles"></div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      velocity: 1
    };
  },
  props: {
    triggerCarousel: Boolean
  },
  computed: {
    barStyles() {
      return (
        "background-image: linear-gradient(90deg, #008451 " +
        this.progress +
        "% , #f76b20"
      );
    }
  },
  methods: {
    move() {
      this.progress += this.velocity;
      if (this.progress > 120) {
        if (this.triggerCarousel) {
          this.$root.$emit("progress-full");
        }
        this.velocity = -3;
      } else if (this.progress < -200) {
        this.velocity = 0.7;
        this.$root.$emit("progress-empty");
      }
      window.requestAnimationFrame(this.move);
    }
  },
  mounted() {
    window.requestAnimationFrame(this.move);
  }
};
</script>

<style scoped>
.progress {
  height: 2px;
  width: 100%;
  position: absolute;
  z-index: 123;
}
</style>