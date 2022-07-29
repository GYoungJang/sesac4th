const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

app.set('view engine', 'ejs'); // set() 웹서버의 환경 설정
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({extended:true})); //{extended: true}를 하면 qs.parse를 사용하므로, object를 상속받을 수  있음
app.use(bodyParser.json()); // json 형태로 받아옴.. 딕셔너리 형태..

app.get('/', function(req, res) {
    res.render('zzbtang');
})

app.listen(port, () => {
    console.log('Server Port : ', port);
})
