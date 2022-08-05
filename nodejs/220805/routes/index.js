const express = require('express');
const user = require('../controller/VisitorController');
const userRouter = express.Router();

userRouter.get('/visitor', user.get_visitor);
userRouter.post('/visitor/write', user.post_comment);

module.exports = userRouter;