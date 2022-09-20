const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const socketIO = require('socket.io');
const moment = require('moment');

const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'src')));

io.on('connection', (socket) => {
  console.log('소켓 연결');
  socket.on('chatting', (data) => {
    console.log(data);
    const { name, msg } = data;

    io.emit('chatting', {
      name,
      msg,
      time: moment(new Date()).format('h:mm A'),
    });
  });
});

server.listen(PORT, () => {
  console.log('Server is running : ', PORT);
});
