<template>
<div @click.native="$store.commit('closeSidebar')" v-bind:class="{ 'light': $store.state.theme === 1, 'dark': $store.state.theme === 2 }">
  <Navigation />
  
  <AdminPage v-if="$store.state.currentPage === 'admin'" />
  <CarouselPage v-if="$store.state.currentPage === 'carousel'" />
  <DayPage v-if="$store.state.currentPage === 'day'" />
  <WeekPage v-if="$store.state.currentPage === 'week'" />

  <Footer />
</div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation";

import AdminPage from "./pages/AdminPage";

import CarouselPage from "./pages/CarouselPage";
import WeekPage from "./pages/WeekPage";
import DayPage from "./pages/DayPage";

import Footer from "./components/Footer";

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
      if (e.keyCode === KEYCODE_N) {
        this.$store.commit("toggleTheme");
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
</style>
