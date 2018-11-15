import { htmlToTemplate } from "../util/shopping-home.utility"

export const getCaurocelHtml = () => {
    const caurocelHtml = `
    <div id="carouselcontainer" class="container">
        <div row>   
            <div class="carousel">
                <figure class="carouselfigure">
                  <img src="./client/images/caurocel/c9.jpeg" alt="">
                  <img src="./client/images/caurocel/c2.jpeg" alt="">
                  <img src="./client/images/caurocel/c3.jpeg" alt="">
                  <img src="./client/images/caurocel/c4.jpeg" alt="">
                  <img src="./client/images/caurocel/c5.jpeg" alt="">
                  <img src="./client/images/caurocel/c6.jpeg" alt="">
                  <img src="./client/images/caurocel/c7.jpeg" alt="">
                  <img src="./client/images/caurocel/c8.jpeg" alt="">
                </figure>
                <nav id="carouselnav" class="carouselnav">
                     <button class="nav prev"><span class="prev carousel-control-prev-icon"></span></button>
                     <button class="nav next"><span class="next carousel-control-next-icon"></span></button>
                </nav>
            </div>
            
        </div>
        
    </div>`
    return htmlToTemplate(caurocelHtml)
}
