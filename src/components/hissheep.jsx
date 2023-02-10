import "../style/hissheep.css";
import {RocketTakeoffFill} from "react-bootstrap-icons";
import io from "socket.io-client";
import { useState } from "react";
const socket = io.connect("http://localhost:3001");

const Hissheep = () => {
    const [left, setLeft] = useState(null);

    socket.on("space_sheep_position",data=>{
        setLeft(data);
    });

    return ( 
        <div>
            <RocketTakeoffFill style={{left: left ? `${left}%` : "90%"}} className="hissheep"/>
        </div>
     );
}
 
export default Hissheep;