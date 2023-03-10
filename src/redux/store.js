import { createStore, combineReducers } from "redux";
import RoomReducer from "./roomReducer";
import PositionReducer from "./positionReducer";
import GotPositionReducer from "./gotPositionReducer";
import AproveRoomReducer from "./aproveRoomReducer";
import GotShootReducer from "./gotShootReducer";
import ShootReducer from "./shootReducer";
import ShootPositionReducer from "./shootPositionReducer";
import HitReducer from "./hitReducer";
import HeGotHitReducer from "./heGotHit";

const reducers = combineReducers({ RoomReducer, PositionReducer, GotPositionReducer, AproveRoomReducer, GotShootReducer, ShootReducer, ShootPositionReducer, HitReducer, HeGotHitReducer });

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;