import "../style/box.css";
import Mysheep from "../components/mysheep";
import Hissheep from "./hissheep";
import ManageBackend from "./manage-backend";

const Box = () => {
    return ( 
        <div className="box">
            <Mysheep/>
            <Hissheep/>
            <ManageBackend/>
        </div>
     );
}
 
export default Box;