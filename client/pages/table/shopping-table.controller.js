import { renderViewToContainer } from "../util/shopping-home.utility"
import { getTableHtml } from "./shopping-table.view"
import ShoppingController from "../../shopping-cart/shopping-cart.controller"
import ShoppingCartService from "../../shopping-cart/shopping-cart.service"

var shoppingController = new ShoppingController();

export const createCartTableComponent = (containerId) => {
    console.log(containerId);
    
        
         shoppingController.fetchAllItems().then((data) => {
            var totalAmount = data.reduce((sum, currentPick) => { 
                return sum+currentPick.imrp;         
            }, 0);   
            const cartTableHtml = getTableHtml(data,totalAmount);

            const editBtn = cartTableHtml.querySelector("#edit-item")
        
            editBtn.addEventListener("click", (event) => {
                console.log("edit button clicked");
                var target = event.target;
                // modal targeted by the button
                var modalSelector = target.dataset.item;
                
                document.querySelector(".item-description").innerHTML = target.dataset.description;
                document.querySelector(".item-price").innerHTML = target.dataset.price;
                let itemImg = document.querySelector(".modalimage"); 
                itemImg.src = target.dataset.img;
            })

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


