const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require("path");
const { connected } = require('process');

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res){
  console.log('client');
  res.render('DefaultNameSpace');
});

// NameSpace 0번
const korea = io.of('/korea');
// connection을 받으면, korea 
korea.on('connection', (socket) => {
  console.log('korea 접속');
  socket.emit('welcome', { welcome: "Someone connected at korea"});
});

// NameSpace 1번
const seoul = io.of('/seoul');

seoul.on('connection', (socket) => {
  console.log('seoul 접속');
  socket.emit('welcome', { welcome: "Someone connected at seoul"});
});

// NameSpace 2번
const busan = io.of('/busan');

busan.on('connection', (socket) => {
  console.log('busan 접속');
  socket.emit('welcome', { welcome: "Someone connected at busan"});
});



http.listen(8000, function() {
  console.log("server port : ", 8000)
});