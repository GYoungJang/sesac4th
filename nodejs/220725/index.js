const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const fs = require('fs').promises;

app.set('view engine', 'ejs'); // set() 웹서버의 환경 설정
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json()); // json 형태로 받아옴.. 딕셔너리 형태..


// 실습용
app.get('/', function(req, res){
    res.render('login');
});

app.post('/login_receive', function(req, res) {
    res.render('login');
});

// app.post('/signup_receive', function(req, res){
//     console.log(req.body); // post일 때..
//     console.log(req.query); // get일 때
//     var id = req.body.id;
//     var name = req.body.name;      
//     var pw = req.body.pw;           // 구조분해로 해보자...

    
//     async function exec(){
//         await fs.mkdir('./signup');
//         await fs.writeFile('./signup/info.txt', `${id}//${name}//${pw}`);
//     }
//     res.render('signup_receive', req.body);
//     exec();
// });



    

// exec();
// app.get('/prac_receive', function(req, res){
//     //console.log(req.body); // post일 때..
//     console.log(req.query); // get일 때
//     res.render('prac_receive', req.query);
// });




// app.get('/', function(req, res){
//     res.render('index');
// });

// app.post('/receive', function(req, res){
    
//     console.log(req.body);
//     res.render('receive', req.body);
//     //const {name, year, sport, gender} = req.body;
//     //res.render('receive', {a:1, b:2});
// });

app.listen(port, () => {
    console.log('Server Port : ', port);
})