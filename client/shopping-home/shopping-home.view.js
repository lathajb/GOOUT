import { renderViewToContainer } from "../pages/util/shopping-home.utility"
import {} from "./shopping-home.controller"

export const loadShoppingHomepage = () => {
    const shoppingHomePageTemplate = getHomePageContainerTemplate()
    renderViewToContainer(shoppingHomePageTemplate, "#main")
}


