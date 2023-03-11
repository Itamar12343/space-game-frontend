import store from "./redux/store";
import { useState } from "react";
import Box from "./components/box";
import Input from "./components/input";
import Blocker from "./components/blocker";
import GameOver from "./components/gameOver";

function App() {
  const [room, setRoom] = useState(null);
 
  store.subscribe(()=>{
    setRoom(store.getState());
  });

  return (
    <div className="App">
      <Blocker/>
      <GameOver/>
      <Input/>
      <Box/>
    </div>
  );
}

export default App;
