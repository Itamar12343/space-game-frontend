import "../style/box.css";
import Mysheep from "../components/mysheep";
import Hissheep from "./hissheep";

const Box = () => {
    return ( 
        <div className="box">
            <Mysheep/>
            <Hissheep/>
        </div>
     );
}
 
export default Box;