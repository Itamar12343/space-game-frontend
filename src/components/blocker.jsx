import store from "../redux/store";
import {motion} from "framer-motion";
import "../style/blocker.css";
import { useState } from "react";

const Blocker = () => {
    const [visibility, setVisibility] = useState("hide");
    const [text, setText] = useState("create or join a game");
    const [count, setCount] = useState(null);

    const unsubscribe = store.subscribe(()=>{
        let approveRoom = store.getState().AproveRoomReducer;
        if(approveRoom !== null){
            if(approveRoom === true && approveRoom !== "game over"){
                setText("");
                setCount(3);
                setTimeout(() => {
                    setCount(2);
                    setTimeout(() => {
                        setCount(1);
                        setTimeout(() => {
                            setCount("ready");
                            setTimeout(() => {
                                setCount("");
                                setVisibility("visible");
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
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
        <motion.div initial={{opacity: 1, pointerEvents:"all"}} animate={{opacity: visibility === "visible" ? 0 : 1, pointerEvents: visibility === "visible" ? "none" : "all"}} className="block-box">
            <h1 className="block-text">{text}</h1>
            {count !== null && <h1 className="block-count">{count}</h1>}
        </motion.div>
     );
}
 
export default Blocker;