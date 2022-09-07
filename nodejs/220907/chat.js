const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    console.log('client');
    res.sendFile(__dirname + "/chat.html");
});

// on == read, emit //보내는 것.. hello라는 이벤트 명 뒤에가 데이터
io.on('connection', function(socket) {
    console.log('connected : ', socket.id);
    io.emit('info', socket.id);
    socket.on('send', function(data) {
        console.log('msg : ', data.msg);
        // socket.emit('clickResponse', 'hello');
        io.emit('newMsg', data);
    });
    socket.on('disconnect', function() {
        io.emit('notice', socket.id + '님이 퇴장하셨습니다.');
    });
})
     

http.listen(8000, function() {
    console.log("server port : ", 8000)
});