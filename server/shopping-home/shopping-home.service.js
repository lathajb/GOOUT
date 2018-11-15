var request = require("request");
const fetch = require('node-fetch');


export default class ItemsService{
    constructor() {
        console.log("Inside ItemsService from server Layer");
    }

    loadAllItems(){
        let items;
          request({
            uri: "http://localhost:7000/items",
            method: "GET",
            timeout: 10000,
            followRedirect: true,
            maxRedirects: 10
            }, function(error, response, body) {
            console.log("#####################33"+body);
            items = body;
        });
      return items;
    }

    loadItems(){
         
        fetch("http://localhost:7000/items")
            .then(response => {
                if (response.status === 200) {
                    console.log("6");
                return response.json();
                } else {
                throw new Error('Something went wrong on api server!');
                }
            })
            .then(json => {  console.log("debug");
               console.debug(json);
               return json;
            }).catch(error => {
                console.error(error);
            });
    }

}
