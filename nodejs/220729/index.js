const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

// const upload = multer({ 
//     dest: 'uploads/'               // upload 객체를 만들고, dest 폴더를 미리 만들어놓아야함.
// })

// const upload = multer({
//     storage: multer.diskStorage({
//         destination(req, file, done) {
//             done(null, 'uploads/');
//         },
//         filename(req, file, done) {
//             const ext = path.extname(file.originalname);
//             done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//         },
//     }),
//     limits: {fileSize: 5*1024*1024},
// });
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext);
        },
    }),
    limits: {fileSize: 5*1024*1024},
});

app.set('view engine', 'ejs'); // set() 웹서버의 환경 설정
app.use('/uploads', express.static('uploads')); // 가상경로를 설정하지 않으면 그냥 localhost:8080/[파일이름] 이렇게 해야 정적 파일이 나옴..
app.use(express.urlencoded({extended:true})); //{extended: true}를 하면 qs.parse를 사용하므로, object를 상속받을 수  있음
app.use(bodyParser.json()); // json 형태로 받아옴.. 딕셔너리 형태..

// test, test2는 미들웨어..
app.get('/', test, test2, function(req, res) {
    res.render('signup');
})

// upload.single : 파일 하나만 업로드, input 타입의 name값과 동일한 인자를 줘야함
app.post('/upload', upload.single('userfile'), function(req, res){
    console.log(req.body);
    console.log(req.file);  // multer가 파일을 업로드 하고 파일에 대한 정보를 알려줌.. uploads 폴더에 저장
    //console.log(`${req.file.destination}${req.file.filename}`)
    const filepath = req.file.destination + req.file.filename;
    console.log(filepath);
    
    res.render('signup1', {filepath : filepath} ) // signup1 ejs로 filepath를 보내줌
    
    //res.render(`<img src="${filepath}">`)
    //res.sendFile(`/Users/user/Desktop/github/sesac4th/nodejs/220729/${filepath}`);
    
});
app.post('/upload/array', upload.array('userfile'), function(req, res){
    console.log(req.body);
    console.log(req.files);  // array는 files!
    res.send('upload');
})
app.post('/upload/fields', upload.fields([{name : 'userfile'}, {name : 'userfile2'}, {name : 'userfile3'}]), function(req, res){
    console.log(req.body);
    console.log(req.files);  // field는 files!
    res.send('upload');
})

function test(req, res, next) { 
    console.log('test함수');
    console.log(req.path);
    next();
}
function test2(req, res, next) {
    console.log('test2 함수');
    next();
}

app.listen(port, () => {
    console.log('Server Port : ', port);
})