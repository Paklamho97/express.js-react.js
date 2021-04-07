let express = require('express')
let app = express()
const db = require('./config/db');
const product = require('./js/product');
app.use(express.static('public'));


app.get('/index', async function (req, res) {
    let result = await product.getAll();
    console.log(result)
    res.json(result);
})

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public/html/main.html')
})

app.post('/getItems', async function (req, res) {
    let result = await product.getAll();
    console.log(result)
    res.json(result);
})

app.listen(8080)