import { createStore, combineReducers } from "redux";
import RoomReducer from "./roomReducer";
import PositionReducer from "./positionReducer";
import GotPositionReducer from "./gotPositionReducer";
const reducers = combineReducers({ RoomReducer, PositionReducer, GotPositionReducer });

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;