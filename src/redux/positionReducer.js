function PositionReducer(state = 50, action) {
    if (action.type === "set-position") {
        return action.text
    }
    switch (action.type) {
        default: return state;
    }
}
export default PositionReducer;