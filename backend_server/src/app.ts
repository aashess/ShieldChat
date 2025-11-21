import express from "express";
import router from "./routes/user.js";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from 'cors';
// import { fileURLToPath } from 'node:url';
// import { dirname, join } from 'node:path';
// import { Server } from 'socket.io';
const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",   // Your React app URL (Vite example)
    methods: ["GET", "POST"]
  }
});


// app.use("/", router);



io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("message", (data) => {
    console.log("Received:", data);
    io.emit("message", data); // send to all clients
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

server.listen(3000, () => {
  console.log("Socket+Express running on 3000");
});
