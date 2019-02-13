<template>
  <div class="settings-tab">
    <h1 class="tab-name">hey</h1>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    length: Number
  },
  mounted() {
    this.$el.style.width = 90 / this.length + "%";
  }
}
</script>

<style scoped>
.settings-tab {
  height: 100%;
  margin: 0 auto;
  background-color: rgb(47, 127, 218);
  display: flex;
}

.tab-name {
  font-size: 1em;
}

.line {
  content: "";
  display: inline-block;
  margin: 0 auto;
  width: 0%;
  height: 500%;
  background-color: red;
}
</style>
