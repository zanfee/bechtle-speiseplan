<template>
<div id="page">
  <div v-for="(item, index) in items" v-bind:key="index">
    <TvTile :display="index"
      :price="item[0]"
      :name="item[1]"
      :description="item[2]"
    :tags="item[3]"></TvTile>
  </div>
</div>
</template>

<script>
import TvTile from "../components/TvTile";

export default {
  data() {
    return {
      items: [
        ["1,00€", "some name", "some description", ["wellfit"]],
        ["2,00€", "some other name", "some other description", ["renewable"]],
        ["3,00€", "and another name", "and another description", ["wellfit", "vegetarian", "renewable"]],
        ["4,00€", "one more name", "one more description", ["wellfit", "vegan", "renewable"]]
      ]
    }
  },
  components: {
    TvTile
  }
};
</script>

<style>
</style>