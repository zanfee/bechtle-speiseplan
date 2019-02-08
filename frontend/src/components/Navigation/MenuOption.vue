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
    size: Number
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
  display: flex;
  width: 50px;
  /* line-height: unset; */

}

.material {
  position: absolute;
  z-index: 141;
}

p, .fit p {
  font-size: .8em;
  margin: 0;
  /* line-height: unset; */
}
</style>
