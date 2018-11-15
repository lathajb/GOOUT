import { renderViewToContainer } from "../pages/util/shopping-home.utility"
import { getShoppingCart } from "./shopping-cart.view"
import {createCartTableComponent}  from '../pages/table/shopping-table.controller';
import ShoppingCartService from './shopping-cart.service';

let shoppingCartService = new ShoppingCartService();

export default class ShoppingController{
        
        constructor(){
            console.log("Inside shoppingController Layer");
        }
    
        fetchAllItems(){
            return shoppingCartService.fetchAllItems();
        }

        createShoppingComponent(containerId) {
            const cartContent = getShoppingCart();
            renderViewToContainer(cartContent, containerId)
            createCartTableComponent('#itemsList');
        }
}

