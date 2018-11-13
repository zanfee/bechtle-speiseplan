/* Variables */

/* Navigation */
var navBody = document.getElementById('nav-body');
var navButton = document.getElementById('nav-button');

var modules = document.getElementById('modules').childNodes;
var settings = document.getElementById('settings').childNodes;

var content = document.getElementById('content');

/* Progress Bar*/
var barWidth = 0; 
var progressbar = document.getElementById('progress');

/* Date */
var time, hours, minutes, seconds, weekDay, day, month, year;

/* End Variables */


/* Navigation */
function toggleMenu() {
    navBody.className = navBody.className === 'go-left' ? 'go-right' : 'go-left';
}

function expandModules() {
  for (i=0; i < modules.length; i++) {
    if (modules[i].className === 'hidden') {
      modules[i].className = 'shown';
    }
    else if (modules[i].className === 'shown') {
      modules[i].className = 'hidden';
    }
  }
}

function expandSettings() {
  for (i=0; i < settings.length; i++) {
    if (settings[i].className === 'hidden') {
      settings[i].className = 'shown';
    }
    else if (settings[i].className === 'shown') {
      settings[i].className = 'hidden';
    }
  }
}

function loadAdmin() {
  content.innerHTML = '<object type="text/html" data="/admin/adminTool.html"></object>';
}

function loadWeek() {
  content.innerHTML = '<object type="text/html" data="/Speiseplan/viewWeek/week.html"></object>';
}

function loadDay() {
  content.innerHTML = '<object type="text/html" data="/Speiseplan/viewDay/day.html"></object>';
}

function loadCarousel() {
  content.innerHTML = '<object type="text/html" data="/Speiseplan/viewCarousel/carousel.html"></object>';
}

navButton.addEventListener('click', toggleMenu);
navButton.addEventListener("keyup", function(event) {

  if (event.keyCode === 13 | event.keyCode === 32) {

    navButton.click();
  }
});

/* Progress Bar */
function move() {
  if (barWidth < 100) {
      barWidth += 0.5;
  }
  else {
      barWidth = 0;
      /* --- 05.11.2018-jf ---
      // color animation green → grey ~2s
      // scroll to next element
      // Time adjustable in settings
      */
  }
  progressbar.style.width = barWidth + '%';
  window.requestAnimationFrame(move);
}

window.requestAnimationFrame(move);

/* Clock */
function tick(){    
  time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  weekDay = time.getDay();
  day = time.getDate();
  month = time.getMonth() + 1;
  year = time.getFullYear();

  if (minutes < 10) {minutes = "0" + minutes}
  if (seconds < 10) {seconds = "0" + seconds}
  time = hours + ":" + minutes + ":" + seconds + " Uhr";
  clock.innerHTML = time;

  switch(weekDay){
      case 1: weekDay = "Montag, ";
          break;
      case 2: weekDay = "Dienstag, ";
          break;
      case 3: weekDay = "Mittwoch, ";
          break;
      case 4: weekDay = "Donnerstag, ";
          break;
      case 5: weekDay = "Freitag, ";
          break;
      case 6: weekDay = "Samstag, ";
          break;
      case 7: weekDay = "Sonntag, ";
          break;
  }

  if (month < 10) {month = "0" + month}
  if (day < 10) {day = "0" + day}
  getDate = weekDay.bold() + day + "." + month + "." + year;
  date.innerHTML = getDate;

  window.setTimeout("tick();", 1000);
}

window.onload = tick;