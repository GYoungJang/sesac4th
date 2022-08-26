const express = require('express');
const app = express();
// const cookieParser = require('cookie-parser');
const session = require('express-session');
const port = 8080;

app.set('view engine', 'ejs');


// app.use(cookieParser('3458')); // 1234 키를 이용해서 쿠키를 만듦
app.use(session({
    secret : 'secret key',
    resave : false, // 변경이 되었을 때 세션을 덮어쓸지 말지 결정
    saveUninitialized : true, // 초깃값 설정하지 않아도 미리 세션을 만들어 놓는다...
}))

const cookieConfig = {
    maxAge: 50000,
    path: '/', // /get /get/a/ get/a/b 쿠키에 접근할 수 있는 경로
    //httpOnly: true,  // 클라이언트는 못 봐 document.cookie로 안 됨.. 웹서버를 통해서만 접근 가능
    // signed: true // value 값을 암호화
};

app.get('/', (req, res) => {
    req.session.name = '홍길동';
    console.log(req.session);
    // res.cookie('key', 'value', cookieConfig);
    // res.cookie('key2', 'value2', cookieConfig);
    res.render('index');
});

app.get('/get', (req, res) => {
    console.log(req.session.name);
    // console.log(req.cookies);
    res.send(req.session.name);
});

app.get('/cookie', (req, res) => {
    res.render("cookie.ejs");
})

app.get('/destroy', (req, res) => {
    // req.session.destroy(function(err){
    //     res.send('삭제');
    // })
    req.session.name = " ";
    res.send('123');
})


app.listen(port, () => {
    console.log('Server : ', port);
})
// app.get('/login', (req, res) => {
//     res.render('login.ejs');
// })

// app.post('/login', (req, res) => {
//     let flag = true;
//     if (flag) {
//         res.session.id = req.body.id;
//         res.redirect('profile.ejs');
//     } else res.redirect('login.ejs');
// })

// app.get('/profile', (req, res) => {
//     // if (req.session.id == undefined || req.session.id == ''){
//         res.redirect('/login');
//         console.log("1");
//         return false;
//     // }
//     res.render('profile');
// })

// app.get('/main', (req, res) => {
//     res.render('main.ejs');
// })


