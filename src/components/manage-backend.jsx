import store from "../redux/store";
import {useDispatch} from "react-redux";
import io from "socket.io-client";
import { useState } from "react";
const socket = io.connect("http://localhost:3001");

const ManageBackend = () => {
    const dispatch = useDispatch();
    const [prevRoom, setPrevRoom] = useState(null);

    
  const unsubscribe = store.subscribe(()=>{
    
    let room = store.getState().RoomReducer;
    let position = store.getState().PositionReducer;


    if(position !== 0){
        socket.emit("space_sheep_position",{room, position});
        console.log("send position");
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
    dispatch({type: "rejectRoom", text: "gh"});
  });

  socket.off("aprove_room").on("aprove_room",()=>{
    dispatch({type: "aproveRoom", text: "gh"});
  });

  socket.off("waiting_room").on("waiting_room",()=>{
    dispatch({type: "waitingRoom", text: "gh"});
  });

    return ( 
        <div>

        </div>
     );
}
 
export default ManageBackend;