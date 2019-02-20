import Vue from "vue";
import VueRouter from "vue-router"
import App from "./App.vue";

import store from './store';
import swipe from './swipe';

import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import CarouselPage from "./pages/CarouselPage";
import DayPage from "./pages/DayPage";
import WeekPage from "./pages/WeekPage";

import "./assets/global.css";

Vue.use(VueRouter); 

const routes = [
  {
    path: '*', component: HomePage
  },
  { 
    path: '/edit', component: AdminPage
  },
  {
    path: '/carousel', component: CarouselPage
  },
  {
    path: '/week', component: WeekPage
  },
  {
    path: '/day', component: DayPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  swipe,
  render: h => h(App)
}).$mount("#app");