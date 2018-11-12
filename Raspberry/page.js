var navBody = document.getElementById('nav-body');
var navButton = document.getElementById('nav-button');

var expModules = document.getElementById('expandable-Modules');
var expSettings = document.getElementById('expandable-Settings');

function toggleMenu() {
    navBody.className = navBody.className === 'go-left'? 'go-right': 'go-left';
}

function expand(element) {
    
}

navButton.addEventListener('click', toggleMenu);
navButton.addEventListener("keyup", function(event) {

  if (event.keyCode === 13 | event.keyCode === 32) {

    navButton.click();
  }
});
expModules.addEventListener('click', expand(expModules));
expSettings.addEventListener('click', expand(expSettings));