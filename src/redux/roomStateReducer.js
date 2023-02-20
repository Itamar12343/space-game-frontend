function RoomStateReducer(state = false, action) {
    switch (action.type) {
        case "setRoomState":
            return true;
        default:
            return state
    }
}
export default RoomStateReducer;