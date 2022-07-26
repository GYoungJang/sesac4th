const express = require('express');
const app = express(); // app은 express 객체
const port = 8080;

app.set('view engine', 'ejs');

// middleware를 사용할 때  use를 쓰는 건가?
// app.use(express.static('public')); // 정적 파일들의 위치 => public
app.use('/abc/aa', express.static('public')); //public에 접근하는 가상경로 : /abc , 정적 파일들의 위치 => public



// // app.get('/', (req, res) => {
// //     res.send('Hello Express!');
// });

// route, routing
// 경로로 들어오면 콜백 함수 실행
app.get('/', (req, res) =>{
    var list = ['apple', 'banana']
    // res.render('test');
    res.render('test', {a:'aaa', b:'bbb', list : list});
})

// listen 메서드 :  웹 서버를 시작하는 시작점 역할
// port로 서버 연결하고 콜백함수 실행...
app.listen(port, () => {
    console.log('Server port : ', port);
});