<template>
  <div class="option-element" :style="'width: ' + 2 * size + 'px'">
    <span class="material" :style="'font-size: ' + size + 'px'">{{ iconCode }}</span>
    <p :style="'font-size: ' + size / 45 + 'em'">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    iconCode: String,
    name: String,
    size: String
  }
}
</script>

<style scoped>
.option-element {
  position: absolute;
  text-align: center;
  opacity: 0;
  transition: 0.3s opacity;
  transition-delay: 0.25s;
}

.open.circle .option-element {
  opacity: 1;
}

p, .fit p {
  margin: 0;
  hyphens: auto;
  word-wrap: break-word;
}
</style>
