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
    origin: "*",   // Your React app URL (Vite example)
    methods: ["GET", "POST"]
  }
});


// store users → socket
const users:any = {}; // { username: socketId }

function getRoomName(user1:any, user2:any) {
  const sorted = [user1, user2].sort();
  return `room_${sorted[0]}_${sorted[1]}`;
}


io.on("connection", (socket) => {   
    const username:any = socket.handshake.query.username; // alice or bob
  
  // console.log("User connected:", socket.id);
    console.log(username, "connected");
      users[username] = socket.id;


       // Only Alice & Bob allowed in this example
  if (username !== "alice" && username !== "bob") {
    console.log("Unknown user:", username);
    return;
  }

    // When both are connected → put them in the same room
  if (users["alice"] && users["bob"]) {
    const room = getRoomName("alice", "bob");

    io.sockets.sockets.get(users["alice"])?.join(room);
    io.sockets.sockets.get(users["bob"])?.join(room);

    console.log("Room created:", room);

    // notify them
    io.to(room).emit("system", "Private room ready for Alice & Bob");
  }
  
  // chat message handler
  socket.on("message", (msg) => {
    const room = getRoomName("alice", "bob");
    io.to(room).emit("message", { from: username, text: msg });   //who wants to send message! (username...)
    console.log(msg);
  });

  socket.on("disconnect", () => {
    console.log(username, "disconnected");
    delete users[username];
  });
});


app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

server.listen(3000, () => {
  console.log("Socket+Express running on 3000");
});
