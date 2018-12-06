import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: "carousel",
    isSidebarOpen: false,
    theme: 1,
    themeName: "Tagmodus"
  },
  mutations: {
    setPage(state, payload) {
      state.currentPage = payload;
    },
    openSidebar(state) {
      state.isSidebarOpen = true;
    },
    closeSidebar(state) {
      state.isSidebarOpen = false;
    },
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleTheme(state) {
      state.theme === 2 /* amount of themes */ ? state.theme = 1 : state.theme++;
      localStorage.setItem("current-theme", state.theme.toString());
      switch(state.theme) {
        case 1: state.themeName = "Nachtmodus";
          break;
        default: state.themeName = "Tagmodus";
          break;
      }
    },
    loadThemeName(state) {
      switch(state.theme) {
        case 1: state.themeName = "Nachtmodus";
          break;
        default: state.themeName = "Tagmodus";
          break;
      }
    }
  },
  actions: {

  }
})