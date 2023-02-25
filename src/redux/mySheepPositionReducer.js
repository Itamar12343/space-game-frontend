function MySheepPositionReducer(state = null, action) {
    switch (action.type) {
        case "setMySheepPosition":
            return action.text
        default:
            return state
    }
}
export default MySheepPositionReducer;