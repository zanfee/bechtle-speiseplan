import Vue from "vue";
import App from "./App.vue";

import "../web/theme.js";

import "../web/stylesheet.css";
import "../web/navigation.css";

import "../web/navigation.js";

new Vue({
  render: h => h(App),
}).$mount("#app");