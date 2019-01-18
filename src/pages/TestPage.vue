<template>
<div id="page">
  <TvTile display="primary"
  price="5,40€"
  name="some name"
  description="some description"
  tags="['wellfit', 'vegan', 'renewable']"></TvTile>
</div>
</template>

<script>
import TvTile from "../components/TvTile";

export default {
  components: {
    TvTile
  }
};
</script>

<style>
</style>