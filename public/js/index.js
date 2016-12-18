var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
  socket.emit('createMessage', {
    from: 'chamu@example.com',
    text: 'testing initial chat'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from the server');
});

socket.on('newMessage', function (message) {
  console.log('New messave', message);
});
