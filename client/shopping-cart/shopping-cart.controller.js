import { renderViewToContainer } from "../pages/util/shopping-home.utility"
import { getShoppingCart } from "./shopping-cart.view"
import {createTableComponent}  from '../pages/table/shopping-table.controller';

export const createShoppingComponent = (containerId) => {
    console.log(containerId);
    const footerContent = getShoppingCart();
    renderViewToContainer(footerContent, containerId)
    createTableComponent('#itemsList');
}