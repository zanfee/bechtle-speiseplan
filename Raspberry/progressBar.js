var width = 0; 
var bar = document.getElementById('progress-bar');

function move() {
    if (width < 100) {
        width += 0.5;
        bar.style.width = width + '%';
        window.requestAnimationFrame(move);
    } 
}

window.requestAnimationFrame(move);