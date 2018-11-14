function test() {
    alert(theme);
}

var theme = 1;
localStorage.setItem("theme", theme);

var light1 = '#ffffff';
var light2 = '#f5f5f5';
var light3 = '#BDBDBD';
var dark1 = '#3c3c3c';
var dark2 = '#505050';
var dark3 = '#757575';

var light_dark1_c   = document.querySelectorAll('h1, h2, h3, h4');
var light_dark3_c   = document.querySelectorAll('h5, h6, h7, h8');
var light_dark3_b   = document.querySelectorAll('div.bar');
var light_light1_b  = document.querySelectorAll('body');
  
var dark_light1_c   = document.querySelectorAll('h1, h3, h4');
var dark_dark2_c    = document.querySelectorAll('h2');
var dark_light3_c   = document.querySelectorAll('h5, h6, h7, h8');
var dark_light3_b   = document.querySelectorAll('div.bar');
var dark_dark1_b    = document.querySelectorAll('body');

function loadTheme() {
    if (theme === 1) {
        for (i=0; i < light_dark1_c.length; i++) {
            light_dark1_c[i].style.color = dark1;
        }
        for (i=0; i < light_dark3_c.length; i++) {
            light_dark3_c[i].style.color = dark3;
        }
        for (i=0; i < light_dark3_b.length; i++) {
            light_dark3_b[i].style.backgroundColor = dark3;
        }
        for (i=0; i < light_light1_b.length; i++) {
            light_light1_b[i].style.backgroundColor = light1;
        }
    }
    else if (theme === 2) {
        for (i=0; i < dark_light1_c.length; i++) {
            dark_light1_c[i].style.color = light1;
        }
        for (i=0; i < dark_dark2_c.length; i++) {
            dark_dark2_c[i].style.color = dark2;
        }
        for (i=0; i < dark_light3_c.length; i++) {
            dark_light3_c[i].style.color = light3;
        }
        for (i=0; i < dark_light3_b.length; i++) {
            dark_light3_b[i].style.backgroundColor = light3;
        }
        for (i=0; i < dark_dark1_b.length; i++) {
            dark_dark1_b[i].style.backgroundColor = dark1;
        }
    }
}

function toggleTheme() {
    if (theme === 1) {
      theme = 2;
    }
    else {
      theme = 1;
    }
    loadTheme();
}

loadTheme();