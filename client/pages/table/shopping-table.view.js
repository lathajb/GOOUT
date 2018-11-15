import { htmlToTemplate } from "../util/shopping-home.utility"

export const getTableHtml = (itemsList) => {
    const tableHtml = `
    <div class="container">
        
        <div id="#itemsList" class="itemsList">
            <hr>
            <div class="row heading-section">
                <div class="col-md-9 bold">${itemsList.length} ITEMS</div>
                <div class="col-md-1 bold">SIZE</div>
                <div class="col-md-1 bold">QTY</div>
                <div class="col-md-1 bold">PRICE</div>
            </div>
            <hr>
            <div class="row data-section">
                <div class="col-md-2">
                    <img src="${itemsList[0].img}" alt="">
                </div>
                <div class="col-md-7">
                    <div class="row itemdescripion">
                    </div>
                    <div class="row actions">
                    </div>
                </div>
                <div class="col-md-1">${itemsList[0].size}</div>
                <div class="col-md-1">${itemsList[0].qty}</div>
                <div class="col-md-1">${itemsList[0].imrp}</div>
            </div>
        </div>
        <hr>
        <div class="checkoutsection">
            <div class="row">
                <div class="leftSection col-md-3">
                   
                         <span class="bold font-size">Need Help</span>
                        <p class="bold font-size">or have questions?</p>

                        <span class="font-size">Call Customer Service at</span>
                        <p class="font-size">1-1800-555-5555</p>

                        <a class="underline" href="#"><span class="font-size ">Chat with one of</span>
                            <p class="font-size">our storylists</p>
                        </a>

                        <a href="#" class="underline"><span class="font-size">See return</span>
                            <p class="font-size">& exchange policy</p>
                        </a>
                    
                
                </div>

                <div class="rightSection col-md-9">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="bold font-size">ENTER PROMOTION CODE OR GIFT CARD</span>
                        </div>
                        <div class="col-md-4">
                        <input type="text"  name="promotioncode">
                        </div>
                        <div class="col-md-2">
                        <a href="#" class="btn btn-info btn-md shoppingcart">
                            <span class="font-size">APPLY</span>
                        </a>
                        </div>
                    </div>
                    <hr>
                    <div class="row add-margin">
                        <div class="col-md-9">
                        <span class="font-size bold">SUB TOTAL</span>
                        </div>
                        <div class="col-md-3 text-right">
                        <span class="font-size bold">$37.00</span>
                        </div>
                    </div>

                    <div class="row add-margin">
                        <div class="col-md-9">
                        <span class="font-size bold">PROMOTION CODE JF4 APPLIED</span>
                        </div>
                        <div class="col-md-3 text-right">
                        <span class="font-size bold">-$7.00</span>
                        </div>
                    </div>

                    <div class="row add-margin">
                        <div class="col-md-9">
                            <span class="font-size bold">ESTIMATEED SHIPPING*</span>
                            <p class="font-size remove-padding-margin ">you are quilify for free shipping</p>
                            <span class="font-size">because your order is over 500*</span>
                        </div>
                        <div class="col-md-3 text-right">
                        <span class="font-size bold">FREE</span>
                        </div>
                    </div>
                    <hr>
                    <div class="row add-margin">
                        <div class="col-md-9">
                            <span class="font-size bold">ESTIMATED TOTAL</span>
                            <p class="font-size remove-padding-margin">Tax will be applied during checkout </p>
                            
                        </div>
                        <div class="col-md-3 text-right">
                        <span class="amount-font bold">$30.00</span>
                        </div>
                    </div>

                     <div class="row add-margin">
                        <div class="col-md-5"></div>
                        <div class="col-md-7 text-right">
                                 <p>
                                    <a id="continue-shopping underline" href="#" class="font-size underline">CONTINUE SHOPPING</a>
                                    <a href="#" class="btn btn-info btn-md shoppingcart">
                                        <span class="font-size">CHECKOUT</span>
                                    </a>
                                </p>
                                <span class="font-size">
                                <i class="fa fa-lock security-lock" aria-hidden="true"></i>
                                Secure checkout shopping is always safe and secure.</span>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        
    </div>
    `
    return htmlToTemplate(tableHtml)
}
