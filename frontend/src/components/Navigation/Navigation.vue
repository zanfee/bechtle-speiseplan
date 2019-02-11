<template>
  <nav>
    <div class="nav-header">
      <MenuRadial/>
      <BurgerButton @click.native="$store.commit('toggleMenu')"/>
      <div class="clock-box">
        <h6 v-html="clock" id="clock"></h6>
      </div>
      <div class="header-text">
        <h5 class="pagename">
          <strong><strong>Bechtle</strong></strong> Speiseplan
        </h5>
        <h6 v-html="date" id="date"></h6>
      </div>
      <Progressbar :triggerCarousel="$store.state.slide" />
    </div>
    <Sidebar/>

    <div
      @click="$store.commit('closeMenu')"
      class="nav-cover"
      :class="{
        'shown': $store.state.isMenuOpen,
        'hidden': !$store.state.isMenuOpen
      }"
    />
  </nav>
</template>

<script>
import BurgerButton from "../BurgerButton";

import Sidebar from "./Sidebar";
import MenuRadial from "./MenuRadial";

import Progressbar from "../Progressbar";

export default {
  components: {
    Progressbar,
    BurgerButton,
    Sidebar,
    MenuRadial
  },
  data() {
    return {
      updateID: -1,
      clock: "",
      date: ""
    };
  },
  methods: {
    tickClock() {
      var currentTime = new Date();
      this.clock = currentTime.toLocaleTimeString("de-DE") + " Uhr";

      var weekday = currentTime.toLocaleDateString("de-DE", {
        weekday: "long"
      });
      this.date =
        weekday.bold() + ", " + currentTime.toLocaleDateString("de-DE");
    }
  },
  mounted() {
    this.tickClock();
    this.updateID = setInterval(this.tickClock, 1000);
  },
  destroyed() {
    clearInterval(this.updateID);
  }
};
</script>

<style scoped>
.nav-header {
  width: 100%;
  position: fixed;
  z-index: 4;
  background-color: rgba(255, 255, 255, 0.7);
}

.header-text {
  line-height: 58px;
  margin-left: 60px;
  display: flex;
  justify-content: space-between;
}

.nav-cover {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: 0.15s;
  z-index: 2;
}

.pagename {
  margin-left: 4px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}

.clock-box {
  width: 100%;
  position: absolute;
  text-align: center;
}

#clock {
  font-weight: 700;
  position: relative;
  line-height: 58px;
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
}

@media only screen and (max-width: 800px) {
  #date {
    display: none;
  }
}
</style>