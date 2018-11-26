<template>
<div @click.native="$store.commit('closeSidebar')">
  <Navigation />
<Footer></Footer>
  <CarouselPage v-if="$store.state.currentPage === 'carousel'" />
  <DayPage v-if="$store.state.currentPage === 'day'" />
  <WeekPage v-if="$store.state.currentPage === 'week'" />

  
</div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation";

import CarouselPage from "./pages/CarouselPage";
import WeekPage from "./pages/WeekPage";
import DayPage from "./pages/DayPage";

import Footer from "./components/Footer";

import { ThemeService } from "./services/ThemeService";

export default {
  components: {
    Navigation,
    CarouselPage,
    WeekPage,
    DayPage,
    Footer
  },
  mounted() {
    ThemeService.applyCurrent();
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
