<template>
<div>
  <Navigation />

  <CarouselPage v-if="$store.state.currentPage === 'carousel'" />
  <DayPage v-if="$store.state.currentPage === 'day'" />
  <WeekPage v-if="$store.state.currentPage === 'week'" />
</div>
</template>

<script>
import Navigation from "./components/Navigation";

import CarouselPage from "./pages/CarouselPage";
import WeekPage from "./pages/WeekPage";
import DayPage from "./pages/DayPage";

export default {
  components: {
    Navigation,
    CarouselPage,
    WeekPage,
    DayPage
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

.light1 {
  color: white;
}

.light2 {
  color: #f5f5f5;
}

.light3 {
  color: #bdbdbd;
}

.dark1 {
  color: #3c3c3c;
}

.dark2 {
  color: #505050;
}

.dark3 {
  color: #757575;
}
</style>
