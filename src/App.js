import {useRef, useState} from "react"
import "./app.css";
import io from "socket.io-client";
const socket = io.connect("https://space-game-backend.onrender.com/");

function App() {
 
  socket.emit("stream", "helghuilo");

  socket.on("stream", data=>{
    console.log(data);
  });

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
