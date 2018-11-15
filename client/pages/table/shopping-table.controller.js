import { renderViewToContainer } from "../util/shopping-home.utility"
import { getTableHtml } from "./shopping-table.view"

export const createTableComponent = (containerId) => {
    console.log(containerId);
    const cartTableHtml = getTableHtml();
    renderViewToContainer(cartTableHtml, containerId)
}