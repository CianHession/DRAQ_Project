const express = require('express')
const app = express()
const port = 4000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

//MY Db connection
const myConnectionString = "mongodb+srv://admin:Zqsdt9$8@cluster0.onmwl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//connect to mongoose
mongoose.connect(myConnectionString, { useNewUrlParser: true });

//schema
const Schema = mongoose.Schema;

//Make single page app now
app.use(express.static(path.join(__dirname, '../build')));
app.use('static', express.static(path.join(__dirname, 'build/static')));


//Item Schema
var itemSchema = new Schema({
    name: String,
    price: String,
    image: String
});

//Model and mongo collection - Item
var ItemModel = mongoose.model("item", itemSchema);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Cross-Origin Resource Sharing - to allow 2 domains to interact
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/api/items', (req, res) => {
    //Finds all documents
    ItemModel.find((err, data) => {
        res.json(data);
    })
})

app.get('/api/items/:id', (req, res) => {
    console.log(req.params.id);
    //By ID
    ItemModel.findById(req.params.id, (err, data) => {
        res.json(data)
    })
});

app.put('/api/items/:id', (req, res) => {
    console.log("Updating " + req.params.id);

    //Update Item by ID
    ItemModel.findByIdAndUpdate(req.params.id, req.body, { new:true },
        (err, data) => {
            res.send(data);
        })
})


app.post('/api/items', (req, res) => {
    //Log data
    console.log(req.body);
    console.log(req.body.Name);
    console.log(req.body.Price);
    console.log(req.body.Image);

    //Send to DB
    ItemModel.create({
        name: req.body.Name,
        price: req.body.Price,
        image: req.body.Image
    })

    //Stop Dups, by sending back to client
    res.send("Item Added");
});

//delete Item by ID
app.delete('/api/items/:id',(req,res) =>{
console.log("Deleting: "+req.params.id);
//One By One (Per Click)
ItemModel.deleteOne({_id:req.params.id},
    //call back function
    (error,data)=>{
        if(error)
        //return error
            res.send(error);
            //else send data
        res.send(data);
    })
})

//SendFile for sinlge page app
app.get('*', (req,res)=>{
    res.SendFile(path.join(__dirname+'/../build.index.html'));
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
