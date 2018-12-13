<template>
<div @click.native="$store.commit('closeSidebar')" v-bind:class="{ 'light': $store.state.theme === 1, 'dark': $store.state.theme === 2 }">
  <div class="background">
    <Navigation />
    
    <AdminPage v-if="$store.state.currentPage === 'admin'" />
    <CarouselPage v-if="$store.state.currentPage === 'carousel'" />
    <DayPage v-if="$store.state.currentPage === 'day'" />
    <WeekPage v-if="$store.state.currentPage === 'week'" />

    <Footer />
  </div>
</div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation";

import AdminPage from "./pages/AdminPage";

import CarouselPage from "./pages/CarouselPage";
import WeekPage from "./pages/WeekPage";
import DayPage from "./pages/DayPage";

import Footer from "./components/Footer";

var KEYCODE_M = 109;
var KEYCODE_N = 110;

export default {
  components: {
    Navigation,
    AdminPage,
    CarouselPage,
    WeekPage,
    DayPage,
    Footer
  },
  mounted() {
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

.background {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
}
</style>
