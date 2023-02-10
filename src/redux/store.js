import { createStore } from "redux";
import RoomReducer from "./roomReducer";

const store = createStore(RoomReducer);
export default store;