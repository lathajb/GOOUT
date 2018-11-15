import { renderViewToContainer } from "../util/shopping-home.utility"
import { getTableHtml } from "./shopping-table.view"
import ShoppingController from "../../shopping-cart/shopping-cart.controller"
import ShoppingCartService from "../../shopping-cart/shopping-cart.service"

var shoppingController = new ShoppingController();

export const createCartTableComponent = (containerId) => {
    console.log(containerId);
    
         var items;
         shoppingController.fetchAllItems().then((data) => {
            const cartTableHtml = getTableHtml(data);
            renderViewToContainer(cartTableHtml, containerId)
          if (data.message !== null &&  (data.message === "Not Found" || data.message === "Bad credentials")) {
            renderConfirmMsg(data.message,"error");
          } else {
            
            //window.confirm('Repository Created Successfully');
            var msg = 'Repository Created Successfully';
            //renderConfirmMsg(msg,"success");
            //document.location.reload();
          }
        }).catch((error) => {
      
        });
    
}