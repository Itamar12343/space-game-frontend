//import {useRef, useState} from "react"
import store from "./redux/store";
import { useState } from "react";
import io from "socket.io-client";
import Box from "./components/box";
import Input from "./components/input";
const socket = io.connect("http://localhost:3001");

function App() {
  const [room, setRoom] = useState(null);
 
  store.subscribe(()=>{
    setRoom(store.getState());
  });
  //socket.emit("stream", "helghuilo");

  /*socket.on("stream", data=>{
    console.log(data);
  });*/

  return (
    <div className="App">
      <Input/>
      <Box/>
    </div>
  );
}

export default App;
