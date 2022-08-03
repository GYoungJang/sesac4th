// 주소 mapping 해주는 곳이 route

const express = require('express');
const router = express.Router();
const user = require('../controller/UserController'); // 객체를 받아옴
//const {get_user}= require('../controller/UserController');

// router.get('/a', function (req, res) {
//     res.send('Index');
// })

router.get('/register', user.get_user); // register 경로로 들어오면  get_user 함수 실행해줘..
//router.get('/register', get_user); // register 경로로 들어오면  get_user 함수 실행해줘..

module.exports = router;