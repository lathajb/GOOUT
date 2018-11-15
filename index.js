import './client/sass/styles.scss';
import './node_modules/jquery/dist/jquery.min.js'
import './node_modules/bootstrap/dist/js/bootstrap.min.js'

import './node_modules/font-awesome/scss/font-awesome.scss';
import {createHeaderSection} from './client/pages/header/shopping-header.controller.js';
import {createFooterSection} from './client/pages/footer/shopping-footer.controller.js';

import {createCaurocelComponent,caurocelConfig}  from './client/pages/caurocel/shopping-caurocel.controller.js';

console.log("hello i am from index.js.....");

//window.onload = onShoppingHomePageload();
window.addEventListener("load", onShoppingHomePageload);

function onShoppingHomePageload(){
    createHeaderSection("#shopping-header");
    createCaurocelComponent("#shopping-main");
    caurocelConfig();
    createFooterSection("#shopping-footer");
    
}
    


