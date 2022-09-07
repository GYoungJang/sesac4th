const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    console.log('client');
    res.sendFile(__dirname + "/index.html");
});

// on == read, emit //보내는 것.. hello라는 이벤트 명 뒤에가 데이터
io.on('connection', function(socket) {
    console.log('connected');
    socket.emit('hello', 'server hello');
    socket.on('click', function(data) {
        console.log('client : hello');
        socket.emit('clickResponse', 'hello');
        // io.emit('clickResponse', 'io success');
    })
    socket.on('click1', function(data) {
        console.log('client : study');
        socket.emit('clickResponse', 'study');
        // io.emit('clickResponse', 'io success');
    })
    socket.on('click2', function(data) {
        console.log('client : bye');
        socket.emit('clickResponse', 'bye');
     
        // io.emit('clickResponse', 'io success');
    })
})

http.listen(8000, function() {
    console.log("server port : ", 8000)
});