<template>
  <div class="menu-radial unselectable" :class="{ 'open': $store.state.isMenuOpen, 'circle': $store.state.menuType === 'circle' }">
    <!-- <div style="width: 100%; height: 100%; clip-path: polygon(0 0%, 100% 10%, 100% 40%); position: absolute; background-color: rgba(255,0,0,0.5)"></div>
    <div style="width: 100%; height: 100%; clip-path: polygon(0 0%, 10% 100%, 42% 100%); position: absolute; background-color: rgba(255,0,0,0.5)"></div> -->
    
    <MenuOption class="pages" iconCode="tv" name="Pages" size="32"></MenuOption>
    <div class="menu-center">
      <!-- <div style="width: 100%; height: 100%; clip-path: polygon(0 0%, 100% 75%, 75% 100%); position: absolute; background-color: rgba(255,0,0,0.5)"></div> -->
      <MenuOption class="page-settings" iconCode="view_carousel" :name="pagename" size="32"></MenuOption>
    </div>
    
    <MenuOption class="settings" iconCode="settings" name="Settings" size="32"></MenuOption>
  </div>
</template>

<script>
import MenuOption from "./MenuOption";

export default {
  components: {
    MenuOption
  },
  mounted() {
    let el = document.getElementsByClassName("menu-center")[0];
    this.$root.$on("progress-full", () => {
      el.classList.remove("progress-100");
      el.classList.add("progress-0");
    });
    this.$root.$on("progress-empty", () => {
      el.classList.remove("progress-0");
      el.classList.add("progress-100");
    })
  },
  computed: {
    pagename() {
      return this.$store.state.currentPage + " Settings";
    }
  }
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
  width: 0;
  height: 0;
  clip-path: polygon(0 0%, 100% 80%, 80% 100%);
  background-color: #008451;
  border-bottom-right-radius: 100%;
  
}

.progress-0 {
  background-color: #f76b20;
  transition: 5s background-color;
}

.progress-100 {
  background-color: #008451;
  transition: 18s background-color;
}

.open .menu-center {
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0%, 100% 55%, 55% 100%);
}

:not(.open) .menu-center {
  animation-name: collapse;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}

.open .menu-center {
  animation-name: expand;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}

@keyframes expand {
  0% {
    width: 0;
    height: 0;
    clip-path: polygon(0 0%, 100% 100%, 100% 100%);
  }
  50% {
    width: 140%;
    height: 140%;
  }
  100% {
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0%, 100% 55%, 55% 100%);
  }
}

@keyframes collapse {
  0% {
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0%, 100% 55%, 55% 100%);
  }
  20% {
    width: 140%;
    height: 140%;
  }
  100% {
    width: 0;
    height: 0;
    clip-path: polygon(0 0%, 100% 100%, 100% 100%);
  }
}

.material {
  position: absolute;
  font-size: 42px;
  z-index: 141;
}

.pages {
  left: 50%;
  top: 16%;
  transform: rotate(-75deg);
  transform-origin: 50% 0;
}

.page-settings {
  left: 32%;
  top: 47%;
  height: 50px;
  transform: rotate(-45deg);
  transform-origin: 50% 0;
}

.settings {
  left: 1%;
  top: 66%;
  transform: rotate(-15deg);
  transform-origin: 50% 0;
}
</style>
