function RoomReducer(state = "", action) {
    switch (action.type) {
        case "set":
            return action.text;
        default:
            return state;
    }
}
export default RoomReducer;