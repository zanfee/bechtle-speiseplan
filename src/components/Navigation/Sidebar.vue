<template>
  <nav :class="{ 'nav-open': $store.state.isSidebarOpen }" id="nav-body">
    <ul class="nav-admin unselectable">
      <SidebarList title="Bearbeiten" @click.native="$store.commit('setPage', 'admin')"></SidebarList>
    </ul>

    <ul class="nav-view unselectable">
      <SidebarListItem @click.native="$store.commit('setPage', 'carousel')">Karussell Ansicht</SidebarListItem>
      <SidebarListItem @click.native="$store.commit('setPage', 'day')">Tagesübersicht</SidebarListItem>
      <SidebarListItem @click.native="$store.commit('setPage', 'week')">Wochenübersicht</SidebarListItem>
    </ul>

    <ul class="nav-base unselectable">
      <SidebarList title="Module">
        <SidebarListItem>Speiseplan Woche</SidebarListItem>
        <SidebarListItem>Speiseplan Tag</SidebarListItem>
        <SidebarListItem>Speiseplan Karussell</SidebarListItem>
        <SidebarListItem>Wetter</SidebarListItem>
      </SidebarList>

      <SidebarList title="Einstellungen">
        <SidebarListItem
          @click.native="$store.commit('toggleTheme');"
        >{{ this.$store.state.themeName }}</SidebarListItem>
        <SidebarListItem>Language</SidebarListItem>
        <SidebarListItem>Geschwindigkeit</SidebarListItem>
        <SidebarListBox command="toggleFit">Responsive</SidebarListBox>
        <SidebarListBox command="toggleShortcuts">Shortcuts</SidebarListBox>
      </SidebarList>
    </ul>
  </nav>
</template>

<script>
import SidebarList from "./SidebarList";
import SidebarListItem from "./SidebarListItem";
import SidebarListBox from "./SidebarListBox";

export default {
  components: {
    SidebarList,
    SidebarListItem,
    SidebarListBox
  },
  mounted() {
    this.$store.commit("loadThemeName");
  }
};
</script>

<style scoped>
#nav-body {
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  margin-top: 60px;
  height: calc(100% - 60px);
  width: 260px;
  left: -260px;
  line-height: 1.2em;
  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;
  transition: left 0.15s cubic-bezier(0.4, 0, 1, 1);
  transform: translateZ(0);
  z-index: 3;
}

.nav-open {
  left: 0px !important;
}

.nav-admin {
  list-style: none;
  border-bottom: 1px solid #757575;
  font-weight: 700;
}

.nav-view {
  list-style: none;
  border-bottom: 1px solid #757575;
  margin-bottom: 25px;
}

.nav-base {
  list-style: none;
  font-weight: 700;
}

::-webkit-scrollbar {
  background-color: rgba(127, 127, 127, 0);
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(127, 127, 127, 0.3);
}
</style>