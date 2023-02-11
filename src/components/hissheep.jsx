import store from "../redux/store";
import "../style/hissheep.css";
import {RocketTakeoffFill} from "react-bootstrap-icons";
import io from "socket.io-client";
import { useState } from "react";
const socket = io.connect("http://localhost:3001");

const Hissheep = () => {
    const [left, setLeft] = useState(null);

    const unsubscribe = store.subscribe(()=>{
        let gotPosition = store.getState().GotPositionReducer;
           setLeft(gotPosition);
        unsubscribe();
    });


    return ( 
        <div>
            <RocketTakeoffFill style={{left: left ? `${left}%` : "50%"}} className="hissheep"/>
        </div>
     );
}
 
export default Hissheep;