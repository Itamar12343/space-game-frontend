import store from "../redux/store";
import {useDispatch} from "react-redux";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const ManageBackend = () => {
    const dispatch = useDispatch();

    
  const unsubscribe = store.subscribe(()=>{
    
    let room = store.getState().RoomReducer;
    let position = store.getState().PositionReducer;

    if(position !== 0){
        socket.emit("space_sheep_position",{room, position});
    }

    if(room !== ""){
        socket.emit("join_room",room);
    }
    unsubscribe();
  });

  socket.on("space_sheep_position",data=>{
    dispatch({type: "set-gotPosition", text: data});
    //console.log(data);
  });


    return ( 
        <div>

        </div>
     );
}
 
export default ManageBackend;