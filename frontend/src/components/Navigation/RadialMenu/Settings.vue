<template>
  <div class="settings" :class="{ 'hidden': $store.state.settingsPage === 'none' }">
    <div class="settings-header">
      <h1 class="material unselectable">settings</h1>
      <h1>{{ settingsPageTitle }}</h1>
    </div>
    
    <SettingsBody v-if="$store.state.settingsPage === 'settings'"/>
    <PageSettingsBody v-if="$store.state.settingsPage === 'page-settings'"/>
    <PagesBody v-if="$store.state.settingsPage === 'pages'"/>
  </div>
</template>

<script>
import SettingsBody from "./SettingsPages/SettingsBody";
import PageSettingsBody from "./SettingsPages/PageSettingsBody"
import PagesBody from "./SettingsPages/PagesBody"

export default {
  components: {
    SettingsBody,
    PageSettingsBody,
    PagesBody
  },
  data() {
    return {
    };
  },
  computed: {
    settingsPageTitle() {
      switch(this.$store.state.settingsPage) {
        case "settings":
          return "Settings";
        case "pages":
          return "View";
        case "page-settings":
          return "Carousel Settings";
        default:
          return "";
      }
    }
  }
}
</script>

<style scoped>
h1 {
  display: inline-block;
  margin-right: calc(0.25em + 0.5vw);
  vertical-align: unset;
}

h1 {
  font-size: 2em;
}

.fit h1 {
  font-size: calc(1em + 1.5vh);
}

.settings {
  width: 40%;
  min-width: 70vh;
  max-width: 80vw;
  height: 70vh;
  margin: auto;
  position: fixed;
  z-index: 80;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 2%;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
}

@media screen and (max-aspect-ratio: 9/12) {
  .settings {
    width: 100%;
    max-width: unset;
    height: calc(90% - 60px);
    margin: 60px auto;
    border-radius: 0%;
  }
}

.light .settings {
  background-color: #f9f9f9;
}

.dark .settings {
  background-color: #494949;
}

.settings-header {
  width: 90%;
  height: 80px;
  display: flex;
  margin: 0 auto;
  align-items: center;
}

.settings-body {
  height: calc(100% - 80px);
  border-radius: inherit;
}

.light .settings-body {
  background-color: #eaeaea;
}

.dark .settings-body {
  background-color: #505050;
}
</style>
