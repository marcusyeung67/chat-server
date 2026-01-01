import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: process.env.PORT || 8080 });

wss.on("connection", ws => {
  ws.on("message", msg => {
    // forward message to all other connected clients
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === 1) {
        client.send(msg);
      }
    });
  });
});
