<template>
<nav id="nav-body" :class="{ 'go-right': $store.state.isSidebarOpen, 'go-left': !$store.state.isSidebarOpen }">
  <ul class="nav-admin unselectable">
    <a class="menu-point">Bearbeiten</a>
  </ul>

  <ul class="nav-view unselectable">
    <SidebarListItem @click.native="setContentPage('week')">Wochenübersicht</SidebarListItem>
    <SidebarListItem @click.native="setContentPage('day')">Tagesübersicht</SidebarListItem>
    <SidebarListItem @click.native="setContentPage('carousel')" style="margin-bottom: 25px">Karussell Ansicht</SidebarListItem>
  </ul>

  <ul class="nav-base unselectable">

    <SidebarList title="Module">
      <SidebarListItem>Speiseplan Woche</SidebarListItem>
      <SidebarListItem>Speiseplan Tag</SidebarListItem>
      <SidebarListItem>Speiseplan Karussell</SidebarListItem>
      <SidebarListItem>Wetter</SidebarListItem>
    </SidebarList>

    <SidebarList title="Einstellungen">
      <SidebarListItem @click.native="toggleTheme">{{ themeMode }}</SidebarListItem>
      <SidebarListItem>Language</SidebarListItem>
      <SidebarListItem>Geschwindigkeit</SidebarListItem>
    </SidebarList>

  </ul>
</nav>
</template>

<script>
import SidebarList from "./SidebarList";
import SidebarListItem from "./SidebarListItem";

import { ThemeService } from "../../services/ThemeService.js";

export default {
  components: {
    SidebarList,
    SidebarListItem
  },
  data() {
    return {
      themeMode: this.getThemeMode()
    };
  },
  methods: {
    getThemeMode() {
      return ThemeService.getStored().isLight ? "Nachtmodus" : "Tagmodus";
    },
    setContentPage(page) {
      this.$store.commit("setPage", page);
    },
    toggleTheme() {
      ThemeService.toggleCurrent();
      this.themeMode = this.getThemeMode();
    }
  }
};
</script>

<style scoped>
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
  border-bottom: 1px solid #757575;
  font-weight: 700;
}

.nav-view {
  list-style: none;
  border-bottom: 1px solid #757575;
}

.nav-base {
  list-style: none;
  font-weight: 700;
}

</style>
