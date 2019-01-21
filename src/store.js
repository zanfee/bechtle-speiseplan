import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: localStorage.getItem('page') == null ? "carousel" : localStorage.getItem('page'),
    isSidebarOpen: false,
    theme: localStorage.getItem('current-theme') == null ? 1 : parseInt(localStorage.getItem('current-theme')),
    themeName: "Tagmodus",
    fit: localStorage.getItem('fit') !== "false",
    shortcuts: localStorage.getItem('shortcuts') !== "false"
  },
  mutations: {
    setPage(state, payload) {
      state.currentPage = payload;
      localStorage.setItem("page", payload);
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
      switch (state.theme) {
        case 1:
          state.themeName = "Nachtmodus";
          break;
        default:
          state.themeName = "Tagmodus";
          break;
      }
    },
    loadThemeName(state) {
      switch (state.theme) {
        case 1:
          state.themeName = "Nachtmodus";
          break;
        default:
          state.themeName = "Tagmodus";
          break;
      }
    },
    toggleFit(state) {
      if (state.fit) {
        state.fit = false;
        localStorage.setItem("fit", "false")
      } else {
        state.fit = true;
        localStorage.setItem("fit", "true");
      }
    },
    toggleShortcuts(state) {
      if (state.shortcuts) {
        state.shortcuts = false;
        localStorage.setItem("shortcuts", "false");
      } else {
        state.shortcuts = true;
        localStorage.setItem("shortcuts", "true");
      }
    }
  }
})