import {useDispatch} from "react-redux";
import "../style/mysheep.css";
import {RocketTakeoffFill} from "react-bootstrap-icons";
import { useState } from "react";

const Mysheep = () => {
    const [left, setleft] = useState(50);
    const dispatch = useDispatch();


    document.onkeydown = (e)=>{
        let key = e.key;
     
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

    return ( 
        <div>
            <RocketTakeoffFill style={{left: left ? `${left}%` : "50%"}} className="mysheep"/>
        </div>
     );
}
 
export default Mysheep;