const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
// const { homedir } = require('os');
// const fs = require('fs').promises;

app.set('view engine', 'ejs'); // set() 웹서버의 환경 설정
app.use(express.static('public'));
app.use(express.urlencoded({extended:true})); //{extended: true}를 하면 qs.parse를 사용하므로, object를 상속받을 수  있음
app.use(bodyParser.json()); // json 형태로 받아옴.. 딕셔너리 형태..


app.get('/', function(req, res){
    res.render('index'); // view파일을 렌더링 한다
})

app.get('/test', function(req, res){
    res.send('test'); // 클라이언트한테 값을 보내줌
})

app.get('/test2', function(req, res){
    res.send({name:'test2', message: 123}); // 클라이언트한테 값을 보내줌
})

app.post('/receive', function(req, res){
    console.log(req.body);
    let name = req.body.name;
    let msg = req.body.name + ' 안녕';
    // res. send(); 빈 데이터를 보냄
    res.send({ name : name, message: msg}); //응답하기, 한 개의 값만 보낼 수 있음 그래서 여러 개를 보내고 싶을 땐 리스트나 딕셔너리로 보냄.
})
app.get('/receive', function(req, res){
    console.log(req.query);
    let name = req.query.name;
    let msg = req.query.name + ' Get 안녕';
    // res. send(); 빈 데이터를 보냄
    res.send({ name : name, message: msg}); //응답하기, 한 개의 값만 보낼 수 있음 그래서 여러 개를 보내고 싶을 땐 리스트나 딕셔너리로 보냄.
})

app.listen(port, () => {
    console.log('Server Port : ', port);
})

// // 실습용
// app.get('/', function(req, res){
//     res.render('home');
// });
// app.get('/home', function(req, res){
//     res.render('home');
// });
// app.get('/signup', function(req, res){
//     res.render('signup');
// });
// app.get('/login', function(req, res){
//     res.render('login');
// });

// app.post('/login_receive', function(req, res) {
// 		let {id, pw} = req.body;

// 		async function exec(){
// 			//최초 로그인 시에만..
// 			// await fs.writeFile('./signup/login_info.txt', `${id}//${pw}`);
// 			let login_info = await (await fs.readFile('./signup/login_info.txt')).toString().split('//');
// 			//console.log(login_info);
			
// 			if (id === login_info[0] && pw === login_info[1]) {
// 				res.write("<script>alert('login success')</script>");
// 			}
// 			else {
// 				res.write("<script>alert('login failure')</script>");
// 			}};
			
// 		exec();
// 		//res.render('login_receive', req.body)};
// 	});
			

// app.post('/signup_receive', function(req, res) {
//     console.log(req.body); // post일 때..
//     console.log(req.query); // get일 때
// 		let {id, name, pw} = req.body;
// 		async function exec(){
// 			await fs.mkdir('./signup1');
// 			await fs.writeFile('./signup1/info1.txt', `${id}//${name}//${pw}`);
// 		};
//     res.redirect('home');
// 	});

//     // var id = req.body.id;
//     // var name = req.body.name;      
//     // var pw = req.body.pw;           // 구조분해로 해보자...

    
    // async function exec(){
    //     await fs.mkdir('./signup1');
    //     await fs.writeFile('./signup1/info.txt', `${id}//${name}//${pw}`);
    // }
    // res.render('signup_receive', req.body);
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

// app.listen(port, () => {
//     console.log('Server Port : ', port);
// })