import store from "../redux/store";
import {useDispatch} from "react-redux";
import "../style/mysheep.css";
import {RocketTakeoffFill} from "react-bootstrap-icons";
import { useState } from "react";
import { useRef } from "react";

const Mysheep = () => {
    const [left, setleft] = useState(50);
    const dispatch = useDispatch();
    const [RoomState, setRoomState] = useState(false);
    const [prevRoom, setPrevRoom] = useState(null);
    const shootref = useRef(null);
    let shoot_wait = false;

    const unsubscribe = store.subscribe(()=>{
        let gotRoomState = store.getState().AproveRoomReducer;
        
        if(gotRoomState === true && gotRoomState !== prevRoom){
            setRoomState(true);
            setPrevRoom(true);
        }
        if(gotRoomState === false && gotRoomState !== prevRoom){
            setRoomState(false);
            setPrevRoom(false);
        }
        unsubscribe();
    });

    document.onkeydown = (e)=>{
        if(RoomState === true){
        let key = e.key;

        if(key === "Enter"){
            if(shoot_wait === false){
            shoot_wait = true;
            dispatch({type: "setShootTrue"});
            dispatch({type: "setShootFalse"});
            shootref.current.classList.add("my-shoot-animation");
            setTimeout(() => {
                shootref.current.classList.remove("my-shoot-animation");
                shoot_wait = false;
            }, 400);
        }
        }
     
        if(key === "ArrowRight"){
            if(left < 90){
                let leftPosition = left + 10;
                dispatch({type: "set-position", text: leftPosition});
                setleft(prev=> prev + 10);
            }
        }
        if(key === "ArrowLeft"){
            if(left > 10){
                let leftPosition = left - 10;
                dispatch({type: "set-position", text: leftPosition});
                setleft(prev=> prev - 10);
            }
        }
    }
    }

    return ( 
        <div>
            <RocketTakeoffFill style={{left: left ? `${left}%` : "50%"}} className="mysheep"/>
            <div ref={shootref} style={{left: left ? `${left}%` : "50%"}} className="my-shoot"></div>
        </div>
     );
}
 
export default Mysheep;