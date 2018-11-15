import express from "express"
import bodyParser from "body-parser"
import Shoppinghome from "./shopping-home/shopping-home.service"

const app = express()
const port = 3000

app.use(express.static("dist"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})

app.use('/hello',function(req,res){
    console.log("hello from node");
     const shoppinghomeservice = new Shoppinghome();
     //let items = shoppinghomeservice.loadAllItems();
     shoppinghomeservice.loadItems().then(function(data){
          console.log(data);
     });
   
    res.send("sucess");
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app