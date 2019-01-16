import Vue from "vue";
import App from "./App.vue";

import store from './store';
import swipe from './swipe';

import "./assets/global.css";

new Vue({
  store, swipe,
  render: h => h(App)
}).$mount("#app");