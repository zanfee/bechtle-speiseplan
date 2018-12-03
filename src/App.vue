<template>
<div @click.native="$store.commit('closeSidebar')">
  <Navigation />
  
  <AdminPage v-if="$store.state.currentPage === 'admin'" />
  <CarouselPage v-if="$store.state.currentPage === 'carousel'" />
  <DayPage v-if="$store.state.currentPage === 'day'" />
  <WeekPage v-if="$store.state.currentPage === 'week'" />
  <Footer />
</div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation";

import AdminPage from "./pages/AdminPage";

import CarouselPage from "./pages/CarouselPage";
import WeekPage from "./pages/WeekPage";
import DayPage from "./pages/DayPage";

import Footer from "./components/Footer";

import { ThemeService } from "./services/ThemeService";

import themeDark from "./assets/themeDark.css"
import themeLight from "./assets/themeLight.css"

var KEYCODE_N = 110;
var LOCALSTORAGE_KEY = "current-theme";

const ThemeHelper = function() {
 
  const preloadTheme = (href) => {
    let link = document.createElement('link');
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = href;
    console.log(href);
    link.media = "screen,print";
    document.head.appendChild(link);
    
    return new Promise((resolve, reject) => {
      link.onload = e => {
        const sheet = e.target.sheet;
        sheet.disabled = true;
        resolve(sheet);
      };
      link.onerror = reject;
    });
  };
  
  const selectTheme = (themes, name) => {
    if (name && !themes[name]) {
      throw new Error(`"${name}" has not been defined as a theme.`); 
    }
    Object.keys(themes).forEach(n => themes[n].disabled = (n !== name));
  }
  
  let themes = {};

  return {
    add(name, href) { return preloadTheme(href).then(s => themes[name] = s) },
    set theme(name) { selectTheme(themes, name) },
    get theme() { return Object.keys(themes).find(n => !themes[n].disabled) }
  };
};

export default {
  components: {
    Navigation,
    AdminPage,
    CarouselPage,
    WeekPage,
    DayPage,
    Footer
  },
  data() {
    return {
      themes: {
        light: themeLight,
        dark: themeDark
      },
      themeHelper: new ThemeHelper(),
      loading: true,
    }
  },
  created() {
    // add/load themes
    
    let added = Object.keys(this.themes).map(name => {
      return this.themeHelper.add(name, this.themes[name]);
    });

    Promise.all(added).then(sheets => {
      console.log(`${sheets.length} themes loaded`);
      this.loading = false;
      this.themeHelper.theme = localStorage.getItem(this.LOCALSTORAGE_KEY);
    });
  },
  mounted() {
    //ThemeService.applyCurrent();
    window.addEventListener("keypress", e => {
      if (e.keyCode === KEYCODE_N) {
        ThemeService.toggleCurrent();
      }
    });
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

::selection {
  background-color: rgba(34, 140, 211, 0.5);
}
</style>
