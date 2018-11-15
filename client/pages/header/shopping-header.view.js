import { htmlToTemplate } from "../util/shopping-home.utility"

export const getHeaderHtml = () => {
    const headerHtml = `
    <div class="navbarsection">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
             <img src="./client/images/women/goout-logo.png" width="60" height="40" class="d-inline-block align-top" alt="">
      </a>
     <button class="navbar-toggler align-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div class="navbar-nav">
         <a class="nav-item nav-link active" href="#">Home 
             <span class="sr-only">(current)</span>
         </a>
         <a class="nav-item nav-link" href="#">Women</a>
         <a class="nav-item nav-link" href="#">Men</a>
         <a class="nav-item nav-link disabled" href="#">Kids</a>
         </div>
     </div>
    
      <a id="cartId" href="#" class="btn btn-info btn-sm shoppingcart">
       <i class="fa fa-shopping-cart" aria-hidden="true"></i> GOOUT
      </a>
     </nav>
    </div>`
    return htmlToTemplate(headerHtml)
}




