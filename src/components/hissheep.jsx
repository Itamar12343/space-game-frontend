import store from "../redux/store";
import "../style/hissheep.css";
import {RocketTakeoffFill} from "react-bootstrap-icons";
import { useState } from "react";

const Hissheep = () => {
    const [left, setLeft] = useState(null);

    const unsubscribe = store.subscribe(()=>{
        let gotPosition = store.getState().GotPositionReducer;
           setLeft(gotPosition);
        unsubscribe();
    });


    return ( 
        <div>
            <RocketTakeoffFill style={{left: left ? `${left}%` : "50%"}} className="hissheep"/>
        </div>
     );
}
 
export default Hissheep;