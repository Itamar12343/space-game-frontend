function AproveRoomReducer(state = null, action) {
    switch (action.type) {
        case "aproveRoom":
            return true;
        case "rejectRoom":
            return false;
        default:
            return state;
    }
}
export default AproveRoomReducer;