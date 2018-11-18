import Vue from "vue";
import App from "./App.vue";

import store from './store';

import "./assets/global.css";

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");