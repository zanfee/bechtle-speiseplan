<template>
<div>
  <div class="nav-header">
    <div class="header">
      <BurgerButton @click.native="$store.commit('toggleSidebar')" />

      <h5 class="pagename"><strong>Bechtle</strong> Speiseplan</h5>

      <h6 v-html="clock" id="clock"></h6>
      <h6 v-html="date" id="date"></h6>
    </div>
    <Progressbar />
  </div>
  <div style="height: 60px"></div>
  <Sidebar />

  <div
    v-on:click="$store.commit('closeSidebar')"
    class="nav-open"
    :class="{
      'shown': $store.state.isSidebarOpen,
      'hidden': !$store.state.isSidebarOpen
    }"
  />
</div>
</template>

<script>
import BurgerButton from "../BurgerButton";

import Sidebar from "./Sidebar";
import Progressbar from "../Progressbar";

export default {
  components: {
    Progressbar,
    BurgerButton,
    Sidebar
  },
  data() {
    return {
      progressStyles: "",
      updateID: -1,
      clock: "",
      date: ""
    };
  },
  methods: {
    tickClock() {
      var currentTime = new Date();
      this.clock = currentTime.toLocaleTimeString("de-DE");

      var weekday = currentTime.toLocaleDateString("de-DE", { weekday: "long" });
      this.date = weekday.bold() + ", " + currentTime.toLocaleDateString("de-DE");
    }
  },
  mounted() {
    this.updateID = setInterval(this.tickClock, 1000);
  },
  destroyed() {
    clearInterval(this.updateID);
  }
};
</script>

<style>
.nav-header {
  height: 60px;
  width: 100%;
  display: inline-block;
  position: fixed;
  z-index: 4;
}

.nav-open {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.05);
  z-index: 2;
}

.header {
  height: 58px;
}

.pagename {
  position: absolute;
  margin: 4px 64px;
  white-space: nowrap;
}

#clock {
  text-align: center;
  padding: 9px 0 9px 0;
  margin: auto;
  font-weight: 700;
}

@media only screen and (max-width: 1000px) {
  #clock {
    visibility: hidden;
  }
}

#date {
  right: 32px;
  top: 0;
  position: absolute;
  margin: 10px 8px 0 0;
}

@media only screen and (max-width: 800px) {
  #date {
    visibility: hidden;
  }
}
</style>