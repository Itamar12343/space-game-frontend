import {useDispatch} from "react-redux";
import "../style/input.css";

const Input = () => {
    const dispatch = useDispatch();


    function joinRoom(e){
        if(e.target.value.length > 0){
            dispatch({type:"set", text: e.target.value});
            //console.log(e.target.value);
        }
    }
    return (  
        <input type="text" className="input" placeholder="join your room" onKeyUp={joinRoom}/>
    );
}
 
export default Input;