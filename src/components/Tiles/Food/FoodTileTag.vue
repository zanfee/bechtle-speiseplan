<template>
  <div>
    <img :src="getImgUrl(tag)">
    <p class="tagName">{{ getTagName(tag) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tag: String
  },
  methods: {
    getImgUrl(img) {
      var images = require.context("../../../assets/img/", false, /\.svg$/);
      return images("./" + img + ".svg");
    },
    getTagName(tag) {
      return {
        vegan: "Vegan",
        vegetarian: "Vegetarisch",
        renewable: "Nachhaltige Fischerei",
        wellfit: "Well Fit"
      }[tag];
    }
  }
};
</script>

<style scoped>
.tagName {
  text-align: center;
  margin: 0;
  font-weight: bold;
}

img {
  max-width: 50%;
  margin: 0 auto;
  display: block;
  padding: 10%;
}
</style>
