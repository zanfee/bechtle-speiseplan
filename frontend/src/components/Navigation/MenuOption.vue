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
  position: relative;
  align-items: center;
  text-align: center;
}

/* .material {
} */

p, .fit p {
  margin: 0;
}
</style>
