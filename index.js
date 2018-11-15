import './client/sass/styles.scss';
import './node_modules/jquery/dist/jquery.min.js'
import './node_modules/bootstrap/dist/js/bootstrap.min.js'

console.log("hello i am from index.js.....");

window.onload = codeAddress;

function codeAddress(){
    var
    carousel = document.querySelector('.carousel'),
    figure = carousel.querySelector('figure'),
    nav = carousel.querySelector('nav'),
    numImages = figure.childElementCount,
    theta =  2 * Math.PI / numImages,
    currImage = 0
;
    
nav.addEventListener('click', onClick, true);

function onClick(e) {
    e.stopPropagation();
    
    var t = e.target;
    if (t.tagName.toUpperCase() != 'SPAN')
        return;
    
    if (t.classList.contains('next')) {
        currImage++;
    }
    else {
        currImage--;
    }
    
    figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}
}

