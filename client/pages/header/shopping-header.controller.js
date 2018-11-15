import { renderViewToContainer } from "../util/shopping-home.utility"
import { getHeaderHtml } from "./shopping-header.view"
//import { createTableComponent } from "../card/shopping-table.controller"
import { createShoppingComponent } from "../../shopping-cart/shopping-cart.controller"

export const createHeaderSection = (containerId) => {
    console.log(containerId);
    const headerContent = getHeaderHtml();
   
    const cartId = headerContent.querySelector("#cartId")
   
    cartId.addEventListener("click", (event) => {
      console.log("cart clicked");
      var body = document.querySelector('#shopping-main');
      body.innerHTML = "";
      createShoppingComponent('#shopping-main');
    })

    renderViewToContainer(headerContent, containerId)
}





  