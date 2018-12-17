<template>
<div class="burger-button unselectable">
  <span class="material">menu</span>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.burger-button {
  display: inline-block;
  cursor: pointer;
  width: 60px;
  text-align: center;
  margin: 0;
}

.burger-button:hover {
  background-color: rgba(127, 127, 127, 0.2);
}

.burger-button:focus {
  background-color: rgba(127, 127, 127, 0.3);
  outline: 0px;
}
</style>
