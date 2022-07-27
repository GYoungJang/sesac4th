const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs'); // set() 웹서버의 환경 설정
app.use(express.static('public'));
app.use(express.urlencoded({extended:true})); //{extended: true}를 하면 qs.parse를 사용하므로, object를 상속받을 수  있음
app.use(bodyParser.json()); // json 형태로 받아옴.. 딕셔너리 형태..

app.get('/', function(req, res){
    res.render('practice');
});

app.get('/prac_receive', function(req, res){
    console.log(req.query)  // axios의 파람을 받아옴
    let name = req.query.name;
    let msg = name + '님 회원가입 성공';
    // let gender = req.query.gender;
    // let year = req.query.year;
    // let month = req.query.month;
    // let day = req.query.day;
    // let inter = req.query.inter;

    res.send(msg); // ejs 파일의 axios로 전달
})

app.post('/prac_receive', function(req, res){
    console.log(req.query)  // axios의 파람을 받아옴
    let name = req.query.name;
    let msg = name + '님 회원가입 성공';
    // let gender = req.query.gender;
    // let year = req.query.year;
    // let month = req.query.month;
    // let day = req.query.day;
    // let inter = req.query.inter;

    res.send(msg); // ejs 파일의 axios로 전달
})


app.listen(port, () => {
    console.log('Server Port : ', port);
})