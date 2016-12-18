const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');
  //socket.emit from Admin. welcome.
  socket.emit('newMessage', {
    from: 'admin',
    text: 'Welcome to the chat room',
    createdAt: new Date().getTime()
  });
  //socket.broadcast.emit from adming. new user joined
  socket.broadcast.emit('newMessage', {
    from: 'admin',
    text: 'New user joined the chat room',
    createdAt: new Date().getTime()
  });
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from the client');
  });
});



server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
