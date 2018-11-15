/* Navigation */
var navBody = document.getElementById('nav-body');
var navButton = document.getElementById('nav-button');
var navOpen = document.getElementById('nav-open');

var modules = document.getElementById('modules').childNodes;
var settings = document.getElementById('settings').childNodes;

var date = document.getElementById("date");
var clock = document.getElementById("clock");

/* Progress Bar*/
var barGradient = -200;
var progressbar = document.getElementById('progress');

/* Content */
var content = document.getElementById('content');

/* Navigation */
function toggleMenu() {
    if (navBody.className === 'go-left') {
      navBody.className = 'go-right';
      navOpen.className = 'shown';
    }
    else {
      navBody.className = 'go-left';
      navOpen.className = 'hidden';
    }
}

function closeMenu() {
  navBody.className = 'go-left';
  navOpen.className = 'hidden';
}

function expandList(id) {
  var nodes = document.getElementById(id).children;

  for (var i=0; i < settings.length; i++) {
    var current = nodes[i];

    if (current.classList.contains('hidden')) {
      current.classList.add('shown');
      current.classList.remove('hidden');
    }
    else if (current.classList.contains('shown')) {
      current.classList.add('hidden');
      current.classList.remove('shown');
    }
  }
}

var KEYCODE_SPACE = 32;
var KEYCODE_ENTER = 13;

navButton.addEventListener('click', toggleMenu);
navButton.addEventListener("keyup", function(event) {
  if (event.keyCode === KEYCODE_ENTER || event.keyCode === KEYCODE_SPACE) {
    navButton.click();
  }
});

function setContentPath(path) {
  content.innerHTML = '<iframe type="text/html" id="page-object" class="fullscreen" frameborder="0" src="' + path + '"></iframe>'
}

function loadAdmin() {
  setContentPath('./admin/adminTool.html')
}

function loadWeek() {
  setContentPath('./Speiseplan/viewWeek/week.html');
}

function loadDay() {
  setContentPath('./Speiseplan/viewDay/day.html"></iframe>');
}

function loadCarousel() {
  setContentPath('./Speiseplan/viewCarousel/carousel.html"></iframe>');
}

loadCarousel();

/* Progress Bar */

function moveForeward() {
  progressbar.style.backgroundImage = "linear-gradient(90deg, #008451 " + barGradient + "% , #f76b20)";
  if (barGradient < 120) {
    barGradient += 1;
    window.requestAnimationFrame(moveForeward);
  }
  else {
    window.requestAnimationFrame(moveBackward);
  }
}

function moveBackward() {
  progressbar.style.backgroundImage = "linear-gradient(90deg, #008451 " + barGradient + "% , #f76b20)";
  if (barGradient > -200) {
    barGradient -= 5;
    window.requestAnimationFrame(moveBackward);
  }
  else {
    window.requestAnimationFrame(moveForeward);
  }
}

window.requestAnimationFrame(moveForeward);

/* Clock */
function tick() {
  var currentTime = new Date();
  clock.innerHTML = currentTime.toLocaleTimeString();

  var weekDay = currentTime.toLocaleDateString("de-DE", { weekday: "long" });
  date.innerHTML = weekDay.bold() + ", " + currentTime.toLocaleDateString("de-DE");

  window.setTimeout("tick();", 1000);
}

window.onload = tick;