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

.tag {
  width: 16%;
  padding-left: 1%;
  padding-right: 1%;
  display: inline-block;
}
</style>
