import store from "../redux/store";
import "../style/hissheep.css";
import {RocketTakeoffFill} from "react-bootstrap-icons";
import { useState } from "react";
import { useRef } from "react";

const Hissheep = () => {
    const [left, setLeft] = useState(null);
    const shootref = useRef(null);

    const unsubscribe = store.subscribe(()=>{
        let gotPosition = store.getState().GotPositionReducer;
        let gotShoot = store.getState().GotShootReducer;

        if(gotShoot === true){
            shootref.current.classList.add("his-shoot-animation");
            setTimeout(() => {
                shootref.current.classList.remove("his-shoot-animation");
            }, 400);
        }

        setLeft(gotPosition);
        unsubscribe();
    });

    /*document.onclick = ()=>{
        shootref.current.classList.add("his-shoot-animation");
        setTimeout(() => {
            shootref.current.classList.remove("his-shoot-animation");
        }, 400);
    }*/

    return ( 
        <div>
            <RocketTakeoffFill style={{left: left ? `${left}%` : "50%"}} className="hissheep"/>
            <div ref={shootref} style={{left: left ? `${left}%` : "50%"}} className="his-shoot"></div>
        </div>
     );
}
 
export default Hissheep;