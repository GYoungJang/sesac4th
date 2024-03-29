var express = require("express");
const { send } = require("process");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function (req, res) {
    console.log("client");
    res.sendFile(__dirname + "/chat2.html");
});

// io -> 클라이언트와의 모든 연결을 갖고 있는 친구
// socket > 클라이언트 한 명. socket.id 클라이언트를 구분하는 식별자
var list = {};
io.on("connection", function (socket) {
    // console.log( "connected : ", socket.id );
    socket.on("info2", function (data) {
        list[socket.id] = data.nickname;
        io.emit("notice", data.nickname + "님이 입장하셨습니다.");
        // socket.broadcast.emit('list', list);

        console.log('l', list);
        //socket.emit('nickList', list);
        io.emit('list', list);
    });

    //io.emit('nickList', list);

    // socket.emit("info", socket.id);
    socket.on("send", function (data) {
        console.log("client message : ", data.msg);
        data['is_dm'] = false;
        data['nickname'] = list[socket.id];
        if (data.to == '전체') {
            io.emit('newMessage', data);
        } else {
            data['is_dm'] = true;
            // data.to = '2';
            // list = {a: '1', b: '2', c: '3'};
            let socketID = Object.keys(list).find((key) => { return list[key] === data.to });
            io.to(socketID).emit('newMessage', data);
            socket.emit('newMessage', data);
        }
    });

    // NameSpace 1번
    const namespace1 = io.of('/namespace1');
    // connection을 받으면, news 이벤트에 hello 객체를 담아 보낸다
    namespace1.on('connection', (socket) => {
    namespace1.emit('news', { hello: "Someone connected at namespace1"});
    });
    const namespace2 = io.of('/namespace2');
    // connection을 받으면, news 이벤트에 hello 객체를 담아 보낸다
    namespace2.on('connection', (socket) => {
    namespace2.emit('news', { hello: "Someone connected at namespace2"});
    });


    socket.on("disconnect", function () {
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
        delete list[socket.id];
    });
});


http.listen(8000, function () {
    console.log("Server port : ", 8000);
});


