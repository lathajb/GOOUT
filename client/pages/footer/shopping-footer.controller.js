import { renderViewToContainer } from "../util/shopping-home.utility"
import { getFooterHtml } from "./shopping-footer.view"

export const createFooterSection = (containerId) => {
    console.log(containerId);
    const footerContent = getFooterHtml();
    renderViewToContainer(footerContent, containerId)
}