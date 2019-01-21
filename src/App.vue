<template>
<div @click.native="$store.commit('closeSidebar')" class="site" :class="{ 'light': $store.state.theme === 1, 'dark': $store.state.theme === 2, 'fit': $store.state.fit }">
  <Navigation />
    
  <AdminPage v-if="$store.state.currentPage === 'admin'" />
  <CarouselPage v-if="$store.state.currentPage === 'carousel'" />
  <WeekPage v-if="$store.state.currentPage === 'week'" />
  <DayPage v-if="$store.state.currentPage === 'day'" />
  <TestPage v-if="$store.state.currentPage === 'test'" />

  <Footer />
</div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation";

import AdminPage from "./pages/AdminPage";

import CarouselPage from "./pages/CarouselPage";
import DayPage from "./pages/DayPage";
import WeekPage from "./pages/WeekPage";

import TestPage from "./pages/TestPage";

import Footer from "./components/Footer";

var KEYCODE_M = 109;
var KEYCODE_N = 110;

export default {
  components: {
    Navigation,
    AdminPage,
    CarouselPage,
    DayPage,
    WeekPage,
    TestPage,
    Footer
  },
  mounted() {
    // eslint-disable-next-line
    console.log('v0.2.180 | dynamic carousel page');
    window.addEventListener("keypress", e => {
      if (e.keyCode === KEYCODE_N && this.$store.state.shortcuts) {
        this.$store.commit("toggleTheme");
      }
      if (e.keyCode === KEYCODE_M && this.$store.state.shortcuts) {
        this.$store.commit("toggleSidebar");
      }
    });
    
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

::selection {
  background-color: rgba(34, 140, 211, 0.5);
}

.site {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
}

nav {
  margin-bottom: calc(0.75vh + 58px)
}
</style>
