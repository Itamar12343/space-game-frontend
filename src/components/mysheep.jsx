import store from "../redux/store";
import {useDispatch} from "react-redux";
import "../style/mysheep.css";
import {ChevronLeft, ChevronRight, HeartFill, RocketTakeoffFill} from "react-bootstrap-icons";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Mysheep = () => {
    const [left, setleft] = useState(50);
    const dispatch = useDispatch();
    const [RoomState, setRoomState] = useState(false);
    const [prevRoom, setPrevRoom] = useState(null);
    const shootref = useRef(null);
    const [shoot_wait, setShootWait] = useState(false);
    const [shoot_left, setShoot_left] = useState(50);
    const [isHit, setisHit] = useState(false);
    const [life, setLife] = useState([1,2,3]);
    const [I_lost, setI_lost] = useState(false);
    let [lifeDelay, setLifeDelay] = useState(false);


    useEffect(()=>{
        if(I_lost === true){
            setI_lost(false);
            dispatch({type: "setILostTrue", text: "you lost"});
            setTimeout(() => {
                dispatch({type: "setILostTrue", text: "you lost"});
                setTimeout(() => {
                    dispatch({type: "setILostTrue", text: "you lost"});
                }, 100);
            }, 100);
        }
    },[I_lost]);
    function move_left(){
        if(left > 10){
            let leftPosition = left - 10;
            dispatch({type: "set-position", text: leftPosition});
            setleft(prev=> prev - 10);
            setShoot_left(leftPosition);
        }
    }

    function move_right(){
        if(left < 90){
            let leftPosition = left + 10;
            dispatch({type: "set-position", text: leftPosition});
            setleft(prev=> prev + 10);
            setShoot_left(leftPosition);
        }
    }

    function shoot(){
        if(shoot_wait === false){
            setShoot_left(left);
            setShootWait(true);
            dispatch({type: "setShootTrue",text:"bg"});
            setTimeout(() => {
            dispatch({type: "setShootFalse"});
            }, 300);
            shootref.current.classList.add("my-shoot-animation");
            setTimeout(() => {
            shootref.current.classList.remove("my-shoot-animation");
            setShootWait(false);
        }, 400);
    }
    }

    

    const unsubscribe = store.subscribe(()=>{
        let gotRoomState = store.getState().AproveRoomReducer;
        let hit = store.getState().HitReducer;

        if(hit === true){
            //console.log("hit");
            setisHit(true);
            if(lifeDelay === false){
                setLifeDelay(true);
                life.pop();
                if(life[0] === undefined){
                    setI_lost(true);
                }
            }
            //setleft(newLife);
            setTimeout(() => {
                setisHit(false);
                setLifeDelay(false);
            }, 1000);
        }

        
        if(gotRoomState === true && gotRoomState !== prevRoom){
            setTimeout(() => {
                setRoomState(true);
                setPrevRoom(true);
            }, 4000);
        }
        if(gotRoomState === false && gotRoomState !== prevRoom){
            setRoomState(false);
            setPrevRoom(false);
        }
        unsubscribe();
    });

    document.onkeydown = (e)=>{
        if(RoomState === true){
        let key = e.key;

        if(key === "Enter"){
            if(shoot_wait === false){
                setShoot_left(left);
                setShootWait(true);
                dispatch({type: "setShootTrue"});
                setTimeout(() => {
                dispatch({type: "setShootFalse"});
                }, 300);
                shootref.current.classList.add("my-shoot-animation");
                setTimeout(() => {
                shootref.current.classList.remove("my-shoot-animation");
                setShootWait(false);
            }, 400);
        }
        }
     
        if(key === "ArrowRight"){
            if(left < 90){
                let leftPosition = left + 10;
                if(shoot_wait === false){
                    setShoot_left(leftPosition);
                }
                dispatch({type: "set-position", text: leftPosition});
                setleft(prev=> prev + 10);
            }
        }
        if(key === "ArrowLeft"){
            if(left > 10){
                let leftPosition = left - 10;
                if(shoot_wait === false){
                    setShoot_left(leftPosition);
                }
                dispatch({type: "set-position", text: leftPosition});
                setleft(prev=> prev - 10);
            }
        }
    }
    }

    return ( 
        <div>
            <RocketTakeoffFill onClick={shoot} style={{left: left ? `${left}%` : "50%"}} className="mysheep"/>
            <div ref={shootref} style={{left: shoot_left ? `${shoot_left}%` : "50%"}} className="my-shoot"></div>
            {isHit && <div style={{left: left ? `${left}%` : "50%"}} className="my-expload"></div>}
            <ChevronLeft className="left-arrow" onClick={move_left}/>
            <ChevronRight className="right-arrow" onClick={move_right}/>
            <div className="life" style={{left: left ? `${left}%` : "50%"}}>
                {life.map(lifeNumber =>{
                    return(
                        <HeartFill className="heart" key={crypto.randomUUID()}/>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Mysheep;