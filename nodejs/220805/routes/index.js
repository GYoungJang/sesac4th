const express = require('express');
const userRouter = express.Router();
const user = require('../controller/VisitorController');

userRouter.get('/visitor', user.get_visitors);
userRouter.get('/visitor/get', user.get_visitor);
userRouter.post('/visitor/write', user.post_comment);
userRouter.patch('/visitor/edit', user.patch_comment);
userRouter.delete('/visitor/delete', user.delete_comment);


module.exports = userRouter;