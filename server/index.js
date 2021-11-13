const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const port = 4000;
const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: { origin: 'http://localhost:3000' },
});

io.on('connection', (socket) => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message });

    console.log('user: ', name, '\tmessage: ', message);
  });
});

server.listen(port, () => console.log('Listening on port ', port));
