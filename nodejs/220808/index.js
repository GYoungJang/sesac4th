const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const router = require('./router/index')

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/', router);




app.listen(port, () => {
    console.log("서버연결 : ", port);
});