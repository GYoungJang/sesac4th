const express = require('express');
const router = express.Router();
const control = require('../controller/controller');

router.get('/signup/get', control.get_signup);
router.post('/signup/post', control.post_signup);
router.get('/login/get', control.get_login);
router.post('/login/post', control.post_login);
router.post('/userinfo', control.post_info);
router.patch('/patch', control.patch_info);
router.delete('/delete', control.delete_info);


module.exports = router;


