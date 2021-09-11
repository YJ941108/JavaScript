import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express(); 
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
        io.emit('chat message', socket.id +" :" + msg);
        console.log(socket.id);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});



