import express from "express";
import router from "./routes/user.js";
import { createServer } from "node:http";
import { Server } from "socket.io";

// import { fileURLToPath } from 'node:url';
// import { dirname, join } from 'node:path';
// import { Server } from 'socket.io';
const app = express();
const server = createServer(app);
const io = new Server(server);

app.use("/", router);

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("message", (data) => {
    // sends the data to everyone connected to the server
    socket.emit("response", data);
  });
});

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
