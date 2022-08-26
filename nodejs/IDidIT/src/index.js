'use strict';

// 모듈
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;

// 라우팅
const router = require('./routes/index');

// 앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());

module.exports = app;




