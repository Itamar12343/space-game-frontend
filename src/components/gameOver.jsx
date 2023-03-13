import { useState } from "react";
import store from "../redux/store";
import "../style/blocker.css";
import {motion} from "framer-motion";

const GameOver = () => {
    const [gameOver, setGameOver] = useState(false);
    const [text, setText] = useState("you won!!!");

    const unsubscribe = store.subscribe(()=>{
        let ILost = store.getState().ILostReducer;
        unsubscribe();
        if(ILost !== false){
            setGameOver(true);
            setText(ILost + "!");
            
        }
    }); 

    return ( 
        <motion.div initial={{opacity: 0}} animate={{opacity: gameOver ? 1 : 0}} className="block-box">
            <h1 className="block-text">{text}</h1>
        </motion.div>
     );
}
 
export default GameOver;