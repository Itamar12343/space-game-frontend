function AproveRoomReducer(state = null, action) {
    switch (action.type) {
        case "aproveRoom":
            return true;
        case "rejectRoom":
            return false;
        case "waitingRoom":
            return "waiting";
        default:
            return state;
    }
}
export default AproveRoomReducer;