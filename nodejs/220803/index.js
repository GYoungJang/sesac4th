const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('uploads'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json()); // req.body 읽어줌

const router = require('./routes/index')  // index라 파일명을 적지 않았음
app.use('/app', router); // 첫 시작경로 '/app' 경로에 들어오면 router 처리
const board = require('./routes/board');
app.use('/board', board);


app.listen(port, () => {
    console.log("Server Port : ", port);
})