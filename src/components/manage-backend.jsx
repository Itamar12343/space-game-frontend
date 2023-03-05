import store from "../redux/store";
import {useDispatch} from "react-redux";
import io from "socket.io-client";
import { useState } from "react";
import { useEffect } from "react";
const socket = io.connect("http://localhost:3001");

const ManageBackend = () => {
    const dispatch = useDispatch();
    const [prevRoom, setPrevRoom] = useState(null);
    const [prevShootPosition, setPrevShootPosition] = useState(null);
    const [gotHit, setgotHit] = useState(false);

  useEffect(()=>{
    if(gotHit === true){
      console.log("got hit");
      dispatch({type: "setHit"});
      setTimeout(() => {
        dispatch({type: "setHitFalse"});
      }, 1000);
    }
  },[gotHit]);
    
  const unsubscribe = store.subscribe(()=>{
    
    let room = store.getState().RoomReducer;
    let position = store.getState().PositionReducer;
    let shoot = store.getState().ShootReducer;
    let shootPosition = store.getState().ShootPositionReducer;

    if(shootPosition !== prevShootPosition){
      setPrevShootPosition(shootPosition);
        let myPosition = position + "%";
        //console.log(shootPosition.position + " " + myPosition);
        if(shootPosition.position === myPosition){
          setgotHit(true);
          socket.emit("hit");
        }
      }

    /*if(shootPosition !== prevSoot){
      console.log(shootPosition.position);
      setPrevShoot(shootPosition);
    }*/

    if(shoot === true){
      socket.emit("shoot", room);
    }


    if(position !== 0){
        socket.emit("space_sheep_position",{room, position});
        //console.log("send position");
    }

    if(room !== "" && room !== prevRoom){
      if(prevRoom !== null){
        socket.emit("leave_room", prevRoom);
      }
        socket.emit("join_room",room);
        setPrevRoom(room);
    }
    unsubscribe();
  });

  socket.off("space_sheep_position").on("space_sheep_position",data=>{
    dispatch({type: "set-gotPosition", text: data});
    //console.log(data);
  });

  socket.off("reject_room").on("reject_room",()=>{
    dispatch({type: "rejectRoom"});
  });

  socket.off("aprove_room").on("aprove_room",()=>{
    dispatch({type: "aproveRoom"});
  });

  socket.off("waiting_room").on("waiting_room",()=>{
    dispatch({type: "waitingRoom"});
  });

  socket.off("shoot").on("shoot",()=>{
    dispatch({type: "setGotShootTrue"});
    setTimeout(() => {
      dispatch({type: "setGotShootFalse"});
    }, 200);
  });

    return ( 
        <div>

        </div>
     );
}
 
export default ManageBackend;