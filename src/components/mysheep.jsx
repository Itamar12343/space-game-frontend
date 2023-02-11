import {useDispatch} from "react-redux";
import "../style/mysheep.css";
import {RocketTakeoffFill} from "react-bootstrap-icons";
import { useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const Mysheep = () => {
    const [left, setleft] = useState(50);
    const [room, setRoom] = useState(null);
    const dispatch = useDispatch();


    document.onkeydown = (e)=>{
        let key = e.key;
     
        if(key === "ArrowRight"){
            if(left < 90){
                let leftPosition = left + 10;
                //socket.emit("space_sheep_position",{ leftPosition, room});
                dispatch({type: "set-position", text: leftPosition});
                setleft(prev=> prev + 10);
            }
        }
        if(key === "ArrowLeft"){
            if(left > 10){
                let leftPosition = left - 10;
                //socket.emit("space_sheep_position",{ leftPosition, room});
                dispatch({type: "set-position", text: leftPosition});
                setleft(prev=> prev - 10);
            }
        }
    }

    return ( 
        <div>
            <RocketTakeoffFill style={{left: left ? `${left}%` : "50%"}} className="mysheep"/>
        </div>
     );
}
 
export default Mysheep;