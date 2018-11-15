

export default class ShoppingCartService{

    constructor(){

    }

    fetchAllItems(){
            return fetch("http://localhost:7000/items", {
                method: "GET", 
                mode: "cors", 
                credentials: "same-origin", 
                
            })
            .then(response => response.json()) 
            .catch(error => console.error(`Fetch Error =\n`, error));
    }


}