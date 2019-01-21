<template>
<div id="page">
  <TvTile :display="getIndex()"
    price="1,00€"
    name="some name"
    description="some description"
  :tags="['wellfit']"></TvTile>
  <TvTile :display="getIndex()"
    price="2,00€"
    name="some other name" 
    description="some other description"
  :tags="['renewable']"></TvTile>
  <TvTile :display="getIndex()"
    price="3,00€"
    name="and another name" 
    description="and another description"
  :tags="['wellfit', 'vegetarian', 'renewable']"></TvTile>
  <TvTile :display="getIndex()"
    price="4,00€"
    name="one more name" 
    description="one more description"
  :tags="['wellfit', 'vegan', 'renewable']"></TvTile>
</div>
</template>

<script>
import TvTile from "../components/TvTile";

export default {
  data() {
    return {
      index: 0
    }
  },
  methods: {
    getIndex() {
      return this.index++;
    }
  },
  components: {
    TvTile
  }
};
</script>

<style>
</style>