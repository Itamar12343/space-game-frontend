function GotShootReducer(state = false, action) {
    switch (action.type) {
        case "setGotShootTrue":
            return true;
        case "setGotShootFalse":
            return false;
        default:
            return state;
    }
}
export default GotShootReducer;