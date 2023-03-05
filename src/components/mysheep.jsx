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
    const [shoot_wait, setShootWait] = useState(false);
    const [shoot_left, setShoot_left] = useState(50);
    const [isLost, setIsLost] = useState(false);

    const unsubscribe = store.subscribe(()=>{
        let gotRoomState = store.getState().AproveRoomReducer;
        let lost = store.getState().LostReducer;

        if(lost === true){
            setIsLost(true);
            window.location.reload();        }
        
        if(gotRoomState === true && gotRoomState !== prevRoom){
            setTimeout(() => {
                setRoomState(true);
                setPrevRoom(true);
            }, 3000);
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
                setShoot_left(left);
                setShootWait(true);
                dispatch({type: "setShootTrue"});
                setTimeout(() => {
                dispatch({type: "setShootFalse"});
                }, 300);
                shootref.current.classList.add("my-shoot-animation");
                setTimeout(() => {
                shootref.current.classList.remove("my-shoot-animation");
                setShootWait(false);
            }, 400);
        }
        }
     
        if(key === "ArrowRight"){
            if(left < 90){
                let leftPosition = left + 10;
                if(shoot_wait === false){
                    setShoot_left(leftPosition);
                }
                dispatch({type: "set-position", text: leftPosition});
                setleft(prev=> prev + 10);
            }
        }
        if(key === "ArrowLeft"){
            if(left > 10){
                let leftPosition = left - 10;
                if(shoot_wait === false){
                    setShoot_left(leftPosition);
                }
                dispatch({type: "set-position", text: leftPosition});
                setleft(prev=> prev - 10);
            }
        }
    }
    }

    return ( 
        <div>
            <RocketTakeoffFill style={{left: left ? `${left}%` : "50%"}} className="mysheep"/>
            <div ref={shootref} style={{left: shoot_left ? `${shoot_left}%` : "50%"}} className="my-shoot"></div>
            {isLost && <div style={{left: left ? `${left}%` : "50%"}} className="my-expload"></div>}
        </div>
     );
}
 
export default Mysheep;