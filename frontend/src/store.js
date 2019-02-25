import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settingsPage: "none",
    menuType: localStorage.getItem("menu-type") == null ? "sidebar" : localStorage.getItem("menu-type"),
    isMenuOpen: false,
    theme: localStorage.getItem("current-theme") == null ? 1 : parseInt(localStorage.getItem("current-theme")),
    fit: localStorage.getItem("fit") !== "false",
    shortcuts: localStorage.getItem("shortcuts") !== "false",
    slide: localStorage.getItem("slide") !== "false"
  },
  mutations: {
    setPage(state, payload) {
      localStorage.setItem("page", payload);
    },
    toggleMenuType(state) {
      state.menuType === "sidebar" ? state.menuType = "circle" : state.menuType = "sidebar";
      localStorage.setItem("menu-type", state.menuType);
    },
    openSettings(state, tab) {
      state.settingsPage = tab;
    },
    openMenu(state) {
      state.isMenuOpen = true;
    },
    closeMenu(state) {
      state.isMenuOpen = false;
      state.settingsPage = "none";
    },
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
      if (!state.isMenuOpen) {
        state.settingsPage = "none";
      }
    },
    toggleTheme(state) {
      state.theme === 2 /* amount of themes */ ? state.theme = 1 : state.theme++;
      localStorage.setItem("current-theme", state.theme.toString());
    },
    toggleFit(state) {
      state.fit = !state.fit;
      localStorage.setItem("fit", state.fit.valueOf());
    },
    toggleShortcuts(state) {
      state.shortcuts = !state.shortcuts;
      localStorage.setItem("shortcuts", state.shortcuts.valueOf());
    },
    toggleSlide(state) {
      state.slide = !state.slide;
      localStorage.setItem("slide", state.slide.valueOf());
    }
  }
})