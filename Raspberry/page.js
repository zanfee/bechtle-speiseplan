var mover = document.getElementById('nav-body');
var trigger = document.getElementById('nav-button');

function toggleMenu() {
    mover.className = mover.className === 'go-left'? 'go-right': 'go-left';
}
trigger.addEventListener('click', toggleMenu);
trigger.addEventListener("keyup", function(event) {

  if (event.keyCode === 13 | event.keyCode === 32) {

    trigger.click();
  }
});