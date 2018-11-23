import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: "carousel",
    isSidebarOpen: false,
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
    }
  },
  actions: {

  }
})