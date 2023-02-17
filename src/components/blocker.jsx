import store from "../redux/store";
import {motion} from "framer-motion";
import "../style/blocker.css";
import { useState } from "react";

const Blocker = () => {
    const [visibility, setVisibility] = useState("hide");
    const [text, setText] = useState("create or join a game first");

    const unsubscribe = store.subscribe(()=>{
        let approveRoom = store.getState().AproveRoomReducer;
        if(approveRoom !== null){
            if(approveRoom === true){
                setVisibility("visible");
            }
            if(approveRoom === false){
                setVisibility("hide");
                setText("this game is alredy full");
            }
            if(approveRoom === "waiting"){
                setText("waiting for another player");
            }
        }
        unsubscribe();
    });

    return ( 
        <motion.div initial={{opacity: 1}} animate={{opacity: visibility === "visible" ? 0 : 1}} className="block-box">
            <h1 className="block-text">{text}</h1>
        </motion.div>
     );
}
 
export default Blocker;