const express =require('express')
const cors = require('cors')
const app = express()

app.unsubscribe(cors())
app.use(express.json())

const SERVER_PORT = 4444

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

app.get("/api/inventory", (req,res) => {
    if(req.query.item){
        console.log(req.query.item)
        const filteredItems = inventory.filter(invItem => invItem.toLocaleLowerCase().includes(req.query.item.toLocaleLowerCase()))
        res.status(200).send(filteredItems);
    } else {
    res.status(200).send(inventory);
    }
});

app.get("/api/inventory/:index",(req,res) => {
    //console.log(typeof req.params.index)
    res.status(200).send(inventory[+req.params.index])
})



app.listen(SERVER_PORT,() => console.log(`server running on ${SERVER_PORT}`));
