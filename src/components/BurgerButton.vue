<template>
<div class="burger-button" tabindex="1">
  <div class="burger-bar"></div>
  <div class="burger-bar"></div>
  <div class="burger-bar"></div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.burger-button {
  display: inline-block;
  cursor: pointer;
  padding: 21px;
  position: absolute;
}

.burger-button:hover {
  background-color: rgba(127, 127, 127, 0.2);
}

.burger-button:focus {
  background-color: rgba(127, 127, 127, 0.3);
  outline: 0px;
}

.burger-bar {
  width: 18px;
  height: 2px;
  margin: 3px 0;
  background-color: rgb(117, 117, 117);
}
</style>
