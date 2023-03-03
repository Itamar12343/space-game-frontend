function PositionReducer(state = 50, action) {
    switch (action.type) {
        case "set-position":
            return action.text;
        default:
            return state;
    }
}
export default PositionReducer;