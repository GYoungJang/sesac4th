const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

router.get('/', user.get_home);
router.get('/signup', user.get_signup);
router.get('/login', user.get_login);
router.get('/userInfo', user.get_userinfo);
router.post('/signup', user.post_signup);
router.post('/login', user.post_login);
router.post('/userInfo', user.post_userinfo);
router.patch('/userInfo/edit', user.patch_userinfo);
router.delete('/userInfo/delete', user.delete_userinfo);

module.exports = router;