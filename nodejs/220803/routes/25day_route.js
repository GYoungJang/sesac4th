const express = require('express');
const userRouter = express.Router();
const user = require('../controller/25day_controller'); // 컨트롤러 갖고옴..?

userRouter.get('/', user.get_root);
userRouter.get('/home', user.get_home);
userRouter.get('/signup', user.get_signup);
// userRouter.get('/login', user.get_login);
userRouter.get('/register', user.register);
// ~/register로 접속시 Usercontroller의 register함수를 실행

userRouter.post('/register', user.post_register);

userRouter.get('/login', user.login);
userRouter.post('/login', user.post_login);


module.exports = userRouter; // index 파일에 보내주는??