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

const activeRooms = new Set<string>();

io.on("connection", (socket) => {
  const username = socket.handshake.query.username as string || "Anonymous";
  console.log("A user connected: " + socket.id + " (" + username + ")");
  
  // Send current active rooms to the new user
  socket.emit("active_rooms", Array.from(activeRooms));

  socket.on("join_room", (room) => {
    socket.join(room);
    console.log(`${username} joined room: ${room}`);
    io.to(room).emit("system", `${username} joined the chat`);

    // Add room to active list and broadcast to ALL clients
    if (!activeRooms.has(room)) {
        activeRooms.add(room);
        io.emit("active_rooms", Array.from(activeRooms));
    }
  });

  // WebRTC Signaling
  socket.on("join_voice", (room) => {
      // Notify others in room that a user joined voice
      socket.to(room).emit("user_joined_voice", { id: socket.id, username });
      console.log(`${username} joined voice in ${room}`);
  });

  socket.on("offer", (payload) => {
      io.to(payload.target).emit("offer", payload);
  });

  socket.on("answer", (payload) => {
      io.to(payload.target).emit("answer", payload);
  });

  socket.on("ice_candidate", (payload) => {
      io.to(payload.target).emit("ice_candidate", payload);
  });

  socket.on("leave_voice", (room) => {
      socket.to(room).emit("user_left_voice", { id: socket.id, username });
  });

  // chat message handler
  socket.on("message", (msg) => {
    // msg should be { room, text, from }
    if (msg.room) {
        io.to(msg.room).emit("message", { from: username, text: msg.text, timestamp: new Date().toISOString(), room: msg.room });
        console.log(`Message in ${msg.room}: ${msg.text}`);
    }
  });

  socket.on("disconnect", () => {
    console.log(username, "disconnected");
    // Ideally we track which room they were in to notify that room
    // For now, we can't easily notify a specific room on disconnect without tracking state
  });
});


app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

server.listen(3000, () => {
  console.log("Socket+Express running on 3000");
});
