import * as MongoClient from "mongodb";
import * as bodyParser from "body-parser";

const express = require('express');
const app = express()
const port = 3000
let db;

MongoClient.connect('mongodb://127.0.0.1:27017',{ useNewUrlParser: true }, function (err, client) {
    if (err) throw err
    db = client.db('test')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(bodyParser.json());
//support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// GET method route
app.get('/', (req, res) => {
    db.collection('inventory').find().toArray((err, result) => {
        if (err) throw err
        res.send(result)
    });
})

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})
