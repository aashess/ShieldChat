
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function Chat() {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState<string[]>([]);


  useEffect(() => {
    socket.on("message", (msg) => {
      setAllMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <div>
      <h1>Chat!</h1>

      {allMessages.map((m, i) => (
        <p key={i}>{m}</p>
      ))}

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
