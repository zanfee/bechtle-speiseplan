<template>
  <div
    @click.native="$store.commit('closeMenu')"
    class="site"
    :class="{ 'light': $store.state.theme === 1, 'dark': $store.state.theme === 2, 'fit': $store.state.fit }"
  >
    <Navigation/>
    <Settings v-if="$store.state.settingsPage !== 'none'"/>
    <router-view></router-view>

    <Footer/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation";
import Settings from "./components/Navigation/RadialMenu/Settings";
import Footer from "./components/Footer";

var KEYCODE_M = 109;
var KEYCODE_N = 110;

export default {
  components: {
    Navigation,
    Settings,
    Footer
  },
  mounted() {
    /* eslint-disable */
    window.addEventListener("keypress", e => {
      if (e.keyCode === KEYCODE_N && this.$store.state.shortcuts) {
        this.$store.commit("toggleTheme");
      }
      if (e.keyCode === KEYCODE_M && this.$store.state.shortcuts) {
        this.$store.commit("toggleMenu");
      }
    });
    console.log("Bechtle Speiseplan ♥ v0.2.237 | Restructure slider menu");    
  }
};
</script>

<style>
.site {
  min-height: 100%;
  overflow-x: hidden;
}
</style>
