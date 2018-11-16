import { htmlToTemplate } from "../util/shopping-home.utility"

export const getTableHtml = (itemsList,totalAmount) => {
    const tableHtml = `
    <div class="container">
        <div class="row col-12 heading-section">
                <div class="col-9 col-md-9 bold">ITEM</div>
                <div class="col-1 col-md-1 bold">SIZE</div>
                <div class="col-1 col-md-1 bold">QTY</div>
                <div class="col-1 col-md-1 bold">PRICE</div>
        </div>
        <hr> 
       ${itemsList.map(item => `
        <div id="#itemsList" class="itemsList">
            <div class="row col-12 data-section">

                <div class="col-12 col-md-9">
                    <img src="${item.img}" class="alignleft" alt="item image" width="40%" height="50%">
                    <span class="bold font-size">${item.description}</span>
                    <p class="font-size remove-padding-margin">Style #: ${item.style} </p> 
                    <p class="font-size ">Color : ${item.color} </p>   
                </div>
                
                <div class="col-12 col-md-1 text-center">
                    <span >${item.size}</span>
                </div>
                <div class="col-12 col-md-1 text-center">
                    <span>${item.qty}</span>
                </div>
                
                <div class="col-12 col-md-1 text-center">
                    <span class="col-1 bold">$${item.imrp}</span>
                </div>
            </div>
            <div class="actions-section">
                <p>
                    <a id="edit-item" 
                       class="edit-item menu-separator font-size col-1 col-md-6 add-padding" 
                       href="javascript:void(0)" 
                       data-toggle="modal" 
                       data-description="${item.description}"
                       data-price="${item.imrp}"
                       data-size="${item.size}"
                       data-qty="${item.qty}"
                       data-img="${item.img}"
                       data-target="#exampleModal">EDIT</a>
                    <a id="delete-item" class="delete-item menu-separator font-size col-1 col-md-6 add-padding" href="#" >X REMOVE</a>
                    <a id="save-later" href="#" class="save-later font-size col-1 col-md-6 ">SAVE FOR LATER</a>
                </p>
            </div>
            `)}
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
                    <div class="row col-12">
                        <div class="col-12 remove-padding-margin col-md-6">
                            <span class="bold font-size">ENTER PROMOTION CODE OR GIFT CARD</span>
                        </div>
                        <div class="col-9 col-md-4">
                        <input type="text"  name="promotioncode">
                        </div>
                        <div class="col-2 col-md-2">
                        <a href="#" class="btn btn-info btn-sm shoppingcart">
                            <span class="font-size">APPLY</span>
                        </a>
                        </div>
                    
                    </div>
                    <hr>
                    <div class="row col-12 add-margin">
                        <div class="col-9 col-md-9">
                        <span class="font-size bold">SUB TOTAL</span>
                        </div>
                        <div class="col-3 col-md-3 text-right">
                        <span class="font-size bold">$${totalAmount}.00</span>
                        </div>
                    </div>

                    <div class="row col-12 add-margin">
                        <div class="col-9 col-md-9">
                        <span class="font-size bold">PROMOTION CODE JF4 APPLIED</span>
                        </div>
                        <div class="col-3 col-md-3 text-right">
                        <span class="font-size bold">-$7.00</span>
                        </div>
                    </div>

                    <div class="row col-12 add-margin">
                        <div class="col-9 col-md-9">
                            <span class="font-size bold">ESTIMATEED SHIPPING*</span>
                            <p class="font-size remove-padding-margin ">you are quilify for free shipping</p>
                            <span class="font-size">because your order is over 500*</span>
                        </div>
                        <div class="col-3 col-md-3 text-right">
                        <span class="font-size bold">FREE</span>
                        </div>
                    </div>
                    <hr>
                    <div class="row col-12 add-margin">
                        <div class="col-9 col-md-9">
                            <span class="font-size bold">ESTIMATED TOTAL</span>
                            <p class="font-size remove-padding-margin">Tax will be applied during checkout </p>
                            
                        </div>
                        <div class="col-3 col-md-3 text-right">
                        <span class="amount-font bold">$${totalAmount - 7}.00</span>
                        </div>
                    </div>

                     <div class="row col-12 add-margin">
                        <div class="col-md-5"></div>
                        <div class="col-12 col-md-7 text-right">
                                 <p>
                                    <a id="continue-shopping underline" href="#" class="font-size col-1 col-md-6 underline">CONTINUE SHOPPING</a>
                                    <a href="#" class="btn btn-info btn-md shoppingcart col-12 col-md-6">
                                        <span class="font-size">CHECKOUT</span>
                                    </a>
                                </p>
                                
                                <span class=" col-2 col-md-1 remove-padding-margin">
                                <i class="fa fa-lock security-lock " aria-hidden="true"></i>
                                </span>
                                <span class="font-size col-6 col-md-8 remove-padding-margin">
                                Secure checkout shopping is always safe and secure.
                                </span>
                                
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
      
    </div>

    <div class="modal fade" 
         id="exampleModal" 
         tabindex="-1" 
         role="dialog" 
         aria-labelledby="exampleModalLabel" 
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="row">
                        <div class="col-md-6">
                            <hr>
                            <p class="item-description text-center"></p>
                            <p class="text-center">
                                <span class="font-size">$</span>
                                <span class="item-price bold">30</span>
                            </p>
                            <p class="text-center">
                                    <span><select>    
                                    <option value="">SIZE</option>
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                    </select>
                                    </span>
                                    <span>
                                    <select>    
                                        <option value="">QTY</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    </span>
                                   
                            </p>
                            <button type="button" class="btn btn-md btn-info btn-block">ADD</button>
                            <p class="text-center"><a class="underline" href="">see product details</a></p>
                        </div>
                        <div class="col-md-6">
                           <img class="modalimage" src="" class="alignleft" alt="item image">
                        </div>
                        
                    
                    </div>
                </div> 
                
            </div>
        </div>
   </div>


    `
    return htmlToTemplate(tableHtml)
}
