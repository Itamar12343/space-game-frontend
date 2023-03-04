function LostReducer(state = false, action) {
    switch (action.type) {
        case "setLost":
            return true;
        default:
            return state;
    }
}