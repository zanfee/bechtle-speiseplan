<template>
  <div class="menu-radial unselectable" :class="{ 'open': $store.state.isMenuOpen, 'circle': $store.state.menuType === 'circle' }">
    <span class="material pages">tv</span>
    <div class="menu-center"> 
      <span class="material settings">settings</span>
    </div>
    <span class="material page-settings">extension</span>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.menu-radial {
  position: absolute;
  border-bottom-right-radius: 100%;
  transition: width 1s cubic-bezier(0.5, -0.75, 0.05, 1), height 1s cubic-bezier(0.5, -0.75, 0.05, 1), z-index 1s cubic-bezier(0.5, -0.75, 0.05, 1);
  width: 0px;
  height: 0px;
  z-index: 120;
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
}

.menu-radial.open.circle {
  width: 200px;
  height: 200px;
  z-index: 140;
}

.menu-center {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0%, 100% 55%, 55% 100%);
  background-color: rgba(27, 155, 240, 0.5);
  border-bottom-right-radius: 100%;
}

.material {
  position: absolute;
  font-size: 48px;
  margin: 6px;
}

.material.pages {
  margin-left: auto;
}

.material.settings {
  vertical-align: bottom;
  flex-direction: flex-end;
}

.material.page-settings {

}
</style>
