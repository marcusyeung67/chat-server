// server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log("StickC connected");

    ws.on('message', msg => {
        console.log("Received from StickC:", msg);
    });
});
