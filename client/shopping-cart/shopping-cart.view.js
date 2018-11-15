import { htmlToTemplate } from "../pages/util/shopping-home.utility"

export const getShoppingCart = () => {
    const cartHtml = `
    <div id="cart-conatiner" class="container">
        <div row id="jumbotron" class="jumbotron">
               
                <img src="./client/images/women/goout-logo.png" width="60" height="40" class="d-inline-block align-top" alt="">
                
                <span class="display-4 text-justify">Cart Items
                    <hr class="my-4">
                </span>
               
        </div>
        <div row id="itemsList" class="itemsList"></div>
        <div row id="checkout" class="checkout"></div>
    </div>`
    return htmlToTemplate(cartHtml)
}
