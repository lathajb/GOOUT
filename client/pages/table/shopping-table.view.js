import { htmlToTemplate } from "../util/shopping-home.utility"

export const getTableHtml = () => {
    const tableHtml = `
    <div class="container">
    <table class="table">
        <thead>
            <tr>
            <th scope="col"># ITEMS</th>
            <th scope="col">SIZE</th>
            <th scope="col">QTY</th>
            <th scope="col">PRICE</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">
                <img class="" src="./client/images/caurocel/c2.jpeg" alt="Card image cap">
                </th>
                <td>S</td>
                <td><input type="text" value="1" name="quantity"></td>
                <td>$70</td>
            </tr>
            <tr>
                <th scope="row">
                <img class="" src="./client/images/caurocel/c3.jpeg" alt="Card image cap">
                </th>
                <td>S</td>
                <td><input type="text" value="1" name="quantity"></td>
                <td>$50</td>
            </tr>
            <tr>
                <th scope="row">
                    <img class="" src="./client/images/caurocel/c4.jpeg" alt="Card image cap">
                </th>
                <td>L</td>
                <td><input type="text" value="1" name="quantity"></td>
                <td>$30</td>
            </tr>
        </tbody>
        </table>
        <table class="table">
            <tbody>
                <tr>
                    <th rowspan="3">Nee Help<p> or have questions?</p>
                       
                        Call Customer Cervice at
                        <p>1-1800-555-5555</p>
                        Chat with one of our storylists
                        <p><a href="#">See return & exchange policy</a></p>
                        
                    </th>
                    <th colspan="3">ENTER PROMOTION CODE OR GIFT CARD</th>
                    <th colspan="3"><input type="text"  name="promotioncode"></th>
                    <th colspan="1"><button type="button" disabled>APPLY</button></th>
                    
                </tr>
                <tr rowspan="5">
                    
                     <th rowspan="4">hi</p>
                        <th>one</th>
                    
                        <th>two</th>
                    
                        <th>theree</th>
                    
                        <th>four</th>
                    
                        <th>five</th>
                    
                </tr>
                
                <tr>
                    <th>
                    
                    </th>
                    
                </tr>
                
            </tbody>
        </table>

        <table class="table">
            <tr>
                <td rowspan="7"></td>
                <td></td>
                <td></td>
                <td colspan="2"></td>
            </tr>
            <tr>
                <td colspan="3">SUB TOTAL</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="3">PROMOTION CODE JF4 APPLIED</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="3">ESTIMATEED SHIPPING*</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="3"></hr></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="3"></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="4"><p>
                <a href="#">Continue Shopping</a>
                <button type="button" disabled>CHECKOUT</button>
            </p></td>
            </tr>
    </table>
        
    </div>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./client/images/caurocel/c9.jpeg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
    return htmlToTemplate(tableHtml)
}
