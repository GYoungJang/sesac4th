const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

router.get('/', user.get_home);
router.get('/signup', user.get_signup);
router.get('/login', user.get_login);
router.post('/signup', user.post_signup);
router.post('/login', user.post_login);
router.post('/userInfo', user.post_userinfo);
router.get('/userInfo', user.get_userinfo);
router.patch('/userInfo/edit', user.patch_userinfo);
router.delete('/userInfo/delete', user.delete_userinfo);

// router.post("/write", visitor.post_comment);
// router.get("/get", visitor.get_visitor);
// router.patch("/edit", visitor.patch_comment);
// router.delete("/delete", visitor.delete_comment);

module.exports = router;