import store from "../redux/store";
import "../style/hissheep.css";
import { RocketTakeoffFill, HeartFill} from "react-bootstrap-icons";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Hissheep = () => {
    const [left, setLeft] = useState(null);
    const [shoot_left, setSoot_left] = useState(null);
    const shootref = useRef(null);
    const [shoot_wait, setShoot_wait] = useState(false);
    const [isHit, setisHit] = useState(false);
    const [life, setLife] = useState([1,2,3]);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(isHit === true){
            life.pop();
        }
    },[isHit]);
    

    const unsubscribe = store.subscribe(()=>{
        let gotPosition = store.getState().GotPositionReducer;
        let gotShoot = store.getState().GotShootReducer;
        let heGotHit = store.getState().HeGotHitReducer;

        if(heGotHit === true){
            setisHit(true);
            setTimeout(() => {
                setisHit(false);
            }, 1000);
        }

        if(gotShoot === true){
            shootref.current.classList.add("his-shoot-animation");
            setShoot_wait(true);
            setTimeout(() => {
                shootref.current.classList.remove("his-shoot-animation");
                setShoot_wait(false);
                let shootLeft = shootref.current.style.left;
                dispatch({type: "setShootPosition", text: {position: shootLeft, uuid: crypto.randomUUID()}});
                //console.log("shootLeft");
            }, 400);
        }
        if(shoot_wait === false){
            setSoot_left(gotPosition);
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
            <div ref={shootref} style={{left: shoot_left ? `${shoot_left}%` : "50%"}} className="his-shoot"></div>
            {isHit && <div style={{left: left ? `${left}%` : "50%"}} className="his-expload"></div>}
            <div className="his-life" style={{left: left ? `${left}%` : "50%"}}>
                {life.map(lifeNumber =>{
                    return(
                        <HeartFill className="his-heart" key={crypto.randomUUID()}/>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Hissheep;