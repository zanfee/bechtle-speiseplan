<template>
  <div class="tagContainer">
    <div v-for="tag in tags" class="tag" v-bind:key="tag">
      <FoodTileTag :tag="tag"/>
    </div>
  </div>
</template>

<script>
import FoodTileTag from "./FoodTileTag";

export default {
  components: {
    FoodTileTag
  },
  props: {
    tags: Array
  }
};
</script>

<style scoped>
.tagContainer {
  display: flex;
  justify-content: center;
}

@media screen and (max-aspect-ratio: 11/8) and (min-aspect-ratio: 9/12) {
  .primary .tagContainer {
    width: 48%;
    margin: 0 auto;
  }
}

.tag {
  max-width: 20%;
  padding-left: 1%;
  padding-right: 1%;
  display: inline-block;
}
</style>
