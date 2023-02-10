import {useDispatch} from "react-redux";
import { useState } from "react";
import "../style/input.css";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const Input = () => {
    const dispatch = useDispatch();

    function joinRoom(e){
        if(e.target.value.length > 0){
            socket.emit("join_room", e.target.value);
            dispatch({type:"set", text: e.target.value});
        }
    }
    return (  
        <input type="text" className="input" placeholder="join your room" onKeyUp={joinRoom}/>
    );
}
 
export default Input;