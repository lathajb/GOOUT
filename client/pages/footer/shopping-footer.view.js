import { htmlToTemplate } from "../util/shopping-home.utility"

export const getFooterHtml = () => {
    const footerHtml = `
      <div class="footer-container">
        <div class="copyRight-container">
            <div class="copyright">Copyright &copy; www.goout.com</div>
        </div>
      </div>`
    return htmlToTemplate(footerHtml)
}
