import { renderViewToContainer } from "../util/shopping-home.utility"
import { getCaurocelHtml } from "./shopping-caurocel.view"

export const createCaurocelComponent = (containerId) => {
    console.log(containerId);
    const caurocelHtml = getCaurocelHtml();
    renderViewToContainer(caurocelHtml, containerId)
}

export const caurocelConfig = () =>{
    var
    carousel = document.querySelector('.carousel'),
    figure = carousel.querySelector('figure'),
    nav = carousel.querySelector('nav'),
    numImages = figure.childElementCount,
    theta =  2 * Math.PI / numImages,
    currImage = 0
   

        // carousel section
        nav.addEventListener('click', onClickCarousel, true);

        function onClickCarousel(e) {
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
 

