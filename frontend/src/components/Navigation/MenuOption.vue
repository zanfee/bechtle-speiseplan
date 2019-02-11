<template>
  <div class="option-element">
    <span class="material" :style="style">{{ iconCode }}</span>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    iconCode: String,
    name: String,
    size: String
  },
  computed: {
    style() {
      return "font-size: " + this.size;
    }
  }
}
</script>

<style scoped>
.option-element {
  width: 42px;
  position: relative;
}

.material {
  z-index: 141;
  position: absolute;
}

p, .fit p {
  font-size: .6em;
  margin: 0;
  background-color: rgba(60, 60, 60, 0.8);
  text-align: center;
  position: absolute;
}
</style>
