<template>
  <div class="burger-button" :class="{ 'open': $store.state.isMenuOpen, 'circle': $store.state.menuType === 'circle' }">
    <span class="material unselectable">menu</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.burger-button {
  cursor: pointer;
  text-align: center;
  margin: 0;
  position: absolute;
  z-index: 121;
}

.material {
  margin: 18px;
  display: block;
  line-height: 24px;
}

.burger-button:focus {
  outline: 0px;
}

.circle {
  transition: border-bottom-right-radius 1s cubic-bezier(0.5, -0.75, 0.05, 1), 1s z-index cubic-bezier(0.5, -0.75, 0.05, 1), 1s box-shadow cubic-bezier(0.5, -0.75, 0.05, 1);
}

.open.circle {
  z-index: 141;
  border-bottom-right-radius: 100%;
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
}

.circle .material {
  transition: margin 1s cubic-bezier(0.5, -0.75, 0.05, 1), font-size 1s cubic-bezier(0.5, -0.75, 0.05, 1), line-height 1s cubic-bezier(0.5, -0.75, 0.05, 1);
}

.burger-button.open.circle .material {
  line-height: 32px;
  font-size: 32px;
  margin-bottom: 64px;
  margin-right: 64px;
  margin-top: 32px;
  margin-left: 32px;
}
</style>
