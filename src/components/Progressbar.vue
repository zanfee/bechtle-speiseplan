<template>
  <div class="progress" :style="barStyles"></div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0
    };
  },
  computed: {
    barStyles() {
      return "background-image: linear-gradient(90deg, #008451 " + this.progress + "% , #f76b20";
    }
  },
  methods: {
    moveForeward() {
      if (this.progress < 120) {
        this.progress += 1;
        window.requestAnimationFrame(this.moveForeward);
      } else {
        window.requestAnimationFrame(this.moveBackward);
      }
    },
    moveBackward() {
      if (this.progress > -200) {
        this.progress -= 5;
        window.requestAnimationFrame(this.moveBackward);
      } else {
        window.requestAnimationFrame(this.moveForeward);
      }
    }
  },
  mounted() {
    window.requestAnimationFrame(this.moveForeward);
  }
};
</script>

<style scoped>
.progress {
  height: 2px;
  width: 100%;
  position: absolute;
}
</style>
