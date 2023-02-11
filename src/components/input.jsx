import { useState } from "react";
import {useDispatch} from "react-redux";
import "../style/input.css";

const Input = () => {
    const dispatch = useDispatch();
    const [room, setRoom] = useState(null);
    const [currentRoom, setCurrentRoom] = useState(null);


    function updateRoom(e){
        if(e.target.value.length > 0){
            setRoom(e.target.value);
        }

    }
    function joinRoom(){
        dispatch({type:"set", text: room});
    }
    return (  
        <>
        <input type="text" className="input" placeholder="join a game" onKeyUp={updateRoom}/>
        <button className="join-btn" onClick={joinRoom}>join</button>
        </>
    );
}
 
export default Input;