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

.material {
  vertical-align: middle;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  
}
</style>
