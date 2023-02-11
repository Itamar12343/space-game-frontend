function GotPositionReducer(state = 0, action) {
    switch (action.type) {
        case "set-gotPosition":
            return action.text;
        default:
            return state;
    }
}
export default GotPositionReducer;