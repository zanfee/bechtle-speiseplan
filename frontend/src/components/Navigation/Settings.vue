<template>
  <div class="settings" :class="{ 'hidden': $store.state.settingsPage === 'none' }">
    <div class="settings-navigation">
      <SettingsTab v-for="tab in tabs" :key="tab" :length="tabs.length"></SettingsTab>
    </div>
  </div>
</template>

<script>
import SettingsTab from "./SettingsTab";

export default {
  components: {
    SettingsTab
  },
  data() {
    return {
      tabs: ["Settings",  this.$store.state.currentPage + " Settings", "Pages"]
    };
  }
}
</script>

<style scoped>
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
  background-color: #505050;
}

.settings-navigation {
  width: 90%;
  height: 10%;
  margin: 0 auto;
  display: flex;
}
</style>
