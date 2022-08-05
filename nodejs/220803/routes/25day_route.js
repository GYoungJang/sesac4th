const express = require('express');
const userRouter = express.Router();
const user = require('../controller/25day_controller'); // 컨트롤러 갖고옴..?
const multer = require('multer');

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

userRouter.get('/', user.get_root);
userRouter.get('/home', user.get_home);
// userRouter.get('/signup', user.get_signup);
// userRouter.get('/login', user.get_login);
userRouter.get('/signup', user.get_signup);
// ~/signup 접속시 Usercontroller의 get_signup함수를 실행

userRouter.post('/signup', upload.single('file'), user.post_signup);

userRouter.get('/login', user.get_login);
userRouter.post('/login', user.post_login);


module.exports = userRouter; // index 파일에 보내주는??