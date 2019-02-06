<template>
  <div class="title-bar-button unselectable">
    <span class="material">{{ iconCode }}</span>
  </div>
</template>

<script>
export default {
  props: {
    iconCode: String
  }
}
</script>

<style scoped>
.title-bar-button .material {
  font-size: calc(16px + 2vw);
}
</style>
