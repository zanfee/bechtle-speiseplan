<template>
  <div
    @click.native="$store.commit('closeSidebar')"
    class="site"
    :class="{ 'light': $store.state.theme === 1, 'dark': $store.state.theme === 2, 'fit': $store.state.fit }"
  >
    <Navigation/>

    <AdminPage v-if="$store.state.currentPage === 'admin'"/>
    <CarouselPage v-if="$store.state.currentPage === 'carousel'"/>
    <WeekPage v-if="$store.state.currentPage === 'week'"/>
    <DayPage v-if="$store.state.currentPage === 'day'"/>

    <Footer/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation";

import AdminPage from "./pages/AdminPage";

import CarouselPage from "./pages/CarouselPage";
import DayPage from "./pages/DayPage";
import WeekPage from "./pages/WeekPage";

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
    Footer
  },
  mounted() {
    /* eslint-disable */ 
    console.log("Bechtle Speiseplan ♥ v0.2.205 | Fix typo causing bug in swaping algorithm");
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
.site {
  min-height: 100%;
  overflow-x: hidden;
}

nav {
  margin-bottom: calc(58px + 0.5vh);
}
</style>
