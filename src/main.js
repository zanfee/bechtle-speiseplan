import Vue from "vue";
import App from "./App.vue";

import {
  ThemeService
} from "./services/ThemeService.js";

import store from './store';

new Vue({
  store,
  beforeMount() {
    ThemeService.applyCurrent();
  },
  render: h => h(App)
}).$mount("#app");