<template>
<nav>
  <div class="nav-header">
    <BurgerButton @click.native="$store.commit('toggleSidebar')" />
    <h5 class="pagename"><strong>Bechtle</strong> Speiseplan</h5>
    <h6 v-html="clock" id="clock"></h6>
    <h6 v-html="date" id="date"></h6>
    <Progressbar style="margin-top: 58px;"/>
  </div>
  <Sidebar/>

  <div
    v-on:click="$store.commit('closeSidebar')"
    class="nav-cover"
    :class="{
      'shown': $store.state.isSidebarOpen,
      'hidden': !$store.state.isSidebarOpen
    }"
  />
</nav>
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
      this.clock = currentTime.toLocaleTimeString("de-DE") + " Uhr";

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
  line-height: 58px;
  width: 100%;
  position: fixed;
  z-index: 4;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
}

.nav-cover {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  z-index: 2;
}

.pagename {
  margin-left: 4px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}

#clock {
  margin-left: auto;
  font-weight: 700;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}

@media only screen and (max-width: 1000px) {
  #clock {
    display: none;
  }
}

#date {
  margin: auto;
  margin-right: 40px;
  display: inline-block;
  vertical-align: middle;
  right: 1em;
}

@media only screen and (max-width: 800px) {
  #date {
    display: none;
  }
}
</style>