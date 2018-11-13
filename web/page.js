var navBody = document.getElementById('nav-body');
var navButton = document.getElementById('nav-button');

var modules = document.getElementById('modules').childNodes;
var settings = document.getElementById('settings').childNodes;

function toggleMenu() {
    navBody.className = navBody.className === 'go-left' ? 'go-right' : 'go-left';
}

function expand(element) {
  if (element === 0) {
    for (i=0; i < modules.length; i++) {
      if (modules[i].className === 'hidden') {
        modules[i].className = 'shown';
      }
      else if (modules[i].className === 'shown') {
        modules[i].className = 'hidden';
      }
    }
  }
  else if (element === 1) {
    for (i=0; i < settings.length; i++) {
      if (settings[i].className === 'hidden') {
        settings[i].className = 'shown';
      }
      else if (settings[i].className === 'shown') {
        settings[i].className = 'hidden';
      }
    }
  }
}

navButton.addEventListener('click', toggleMenu);
navButton.addEventListener("keyup", function(event) {

  if (event.keyCode === 13 | event.keyCode === 32) {

    navButton.click();
  }
});
