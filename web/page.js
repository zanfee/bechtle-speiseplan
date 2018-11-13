var navBody = document.getElementById('nav-body');
var navButton = document.getElementById('nav-button');

var modules = document.getElementById('modules').childNodes;
var settings = document.getElementById('settings').childNodes;

var content = document.getElementById('content');

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

navButton.addEventListener('click', toggleMenu);
navButton.addEventListener("keyup", function(event) {

  if (event.keyCode === 13 | event.keyCode === 32) {

    navButton.click();
  }
});
