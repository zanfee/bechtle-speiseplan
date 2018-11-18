<template>
<div>
  <div class="nav-header">
    <div class="header">
      <div @click="isOpen = !isOpen" id="nav-button" tabindex="1">
        <div class="burger-bar"></div>
        <div class="burger-bar"></div>
        <div class="burger-bar"></div>
      </div>

      <h5 class="pagename"><strong>Bechtle</strong> Speiseplan</h5>

      <h6 v-html="clock" id="clock"></h6>
      <h6 v-html="date" id="date"></h6>
    </div>

    <Progressbar />
  </div>

  <nav id="nav-body" :class="{ 'go-right': isOpen, 'go-left': !isOpen }">
    <ul class="nav-admin unselectable">
      <a class="menu-point" style="color: darkred;">Bearbeiten</a>
    </ul>

    <ul class="nav-view unselectable">
      <SidebarListItem @click.native="setContentPage('week')">Wochenübersicht</SidebarListItem>
      <SidebarListItem @click.native="setContentPage('day')">Tagesübersicht</SidebarListItem>
      <SidebarListItem @click.native="setContentPage('carousel')" style="margin-bottom: 25px">Karussell Ansicht</SidebarListItem>
    </ul>

    <ul class="nav-base unselectable">

      <SidebarList title="Module">
        <SidebarListItem @click.native="setContentPage('week')">Speiseplan Woche</SidebarListItem>
        <SidebarListItem @click.native="setContentPage('day')">Speiseplan Tag</SidebarListItem>
        <SidebarListItem @click.native="setContentPage('carousel')">Speiseplan Karussell</SidebarListItem>
        <SidebarListItem>Wetter</SidebarListItem>
      </SidebarList>

      <SidebarList title="Einstellungen">
        <SidebarListItem @click.native="toggleTheme()">Nachtmodus</SidebarListItem>
        <SidebarListItem>Language</SidebarListItem>
        <SidebarListItem>Geschwindigkeit</SidebarListItem>
      </SidebarList>

      <SidebarList title="Settings">
        <SidebarListItem>Hello World</SidebarListItem>
      </SidebarList>

    </ul>
  </nav>

  <div
    id="nav-open"
    class="unselectable"
    :class="{ 'shown': isOpen, 'hidden': !isOpen }"
    style="width:100%"
  />
</div>
</template>

<script>
import Progressbar from "./Progressbar";
import SidebarList from "./SidebarList";
import SidebarListItem from "./SidebarListItem";
import { ThemeService } from "../services/ThemeService.js";

export default {
  components: {
    Progressbar,
    SidebarList,
    SidebarListItem
  },
  data() {
    return {
      isOpen: false,
      progressStyles: "",
      updateID: -1,
      clock: "",
      date: ""
    };
  },
  methods: {
    toggleTheme() {
      ThemeService.toggleCurrent();
    },
    setContentPage(page) {
      this.$store.commit("setPage", page);
    },
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
h5 {
  font-size: 40px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 200;
  color: #757575;
}

h6 {
  font-size: 32px;
  font-family: "Source Sans Pro";
  font-weight: 400;
  color: #757575;
}

a {
  font-family: "Source Sans Pro";
  font-size: 16pt;
  color: #3c3c3c;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  cursor: pointer;
}

/* navigation header */

.nav-header {
  height: 60px;
  width: 100%;
  display: inline-block;
  position: relative;
  z-index: 3;
}

.header {
  height: 58px;
}

#nav-button {
  display: inline-block;
  cursor: pointer;
  padding: 21px;
  position: absolute;
}

#nav-button:hover {
  background-color: rgba(127, 127, 127, 0.2);
}

#nav-button:focus {
  background-color: rgba(127, 127, 127, 0.3);
  outline: 0px;
}

.burger-bar {
  width: 18px;
  height: 2px;
  margin: 3px 0;
  background-color: rgb(117, 117, 117);
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

/* navigation body */

.go-left {
  -webkit-transform: translate(30px, 0);
  -moz-transform: translate(30px, 0);
  -o-transform: translate(30px, 0);
  transform: translate(30px, 0);
  left: -260px;
}

.go-right {
  -webkit-transform: translate(-30px, 0);
  -moz-transform: translate(-30px, 0);
  -o-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
  left: 0px;
}

#nav-body {
  background: #f5f5f5;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  height: calc(100vh - 60px);
  width: 260px;
  line-height: 1.2em;
  overflow: hidden;
  position: fixed;
  top: 60px;
  transition: left 0.2s cubic-bezier(0.4, 0, 1, 1);
  transform: translateZ(0);
  z-index: 3;
}

.nav-admin {
  list-style: none;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 700;
}

.nav-view {
  list-style: none;
  border-bottom: 1px solid #e0e0e0;
}

.nav-base {
  list-style: none;
  font-weight: 700;
}

#modules {
  margin: 0;
  padding: 0;
}

#settings {
  margin: 0;
  padding: 0;
}

.hidden {
  display: none;
}

.toggleList {
  background-color: white;
  height: 100%;
  overflow: hidden;
  -webkit-transition: height 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
}

/* content */

#nav-open {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.05);
  z-index: 2;
}

.fullscreen {
  position: fixed;
  width: 100%;
  height: 100%;
}

/* attributes */

.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>