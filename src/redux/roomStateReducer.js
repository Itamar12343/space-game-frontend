function RoomStateReducer(state = null, action) {
    switch (action.type) {
        case "setRoomState":
            return action.text;
        default:
            return state
    }
}
export default RoomStateReducer;