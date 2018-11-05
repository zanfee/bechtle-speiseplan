var width = 0; 
var bar = document.getElementById('progress-bar');

function move() {
    if (width < 100) {
        width += 0.5;
    }
    else {
        width = 0;
        /* --- 05.11.2018-jf ---
        // color animation green → grey ~2s
        // scroll to next element
        */
    }
    bar.style.width = width + '%';
    window.requestAnimationFrame(move);
}

window.requestAnimationFrame(move);