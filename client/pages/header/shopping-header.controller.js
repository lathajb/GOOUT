import { renderViewToContainer } from "../util/shopping-home.utility"
import { getHeaderHtml } from "./shopping-header.view"
import { createCartTableComponent } from "../table/shopping-table.controller"
import  ShoppingController from "../../shopping-cart/shopping-cart.controller"
import  ShoppingCartService from "../../shopping-cart/shopping-cart.service"

var shoppingController = new ShoppingController();

export const createHeaderSection = (containerId) => {
    console.log(containerId);

    shoppingController.fetchAllItems().then((data) => {
            
          const headerContent = getHeaderHtml(data);
   
          const cartId = headerContent.querySelector("#cartId")
        
          cartId.addEventListener("click", (event) => {
            console.log("cart clicked");
            var body = document.querySelector('#shopping-main');
            body.innerHTML = "";
            shoppingController.createShoppingComponent('#shopping-main');

          })

           renderViewToContainer(headerContent, containerId)

          if (data.message !== null &&  (data.message === "Not Found" || data.message === "Bad credentials")) {
            renderConfirmMsg(data.message,"error");
          } else {
            
          }
        }).catch((error) => {
      
    });

    

   
}





  