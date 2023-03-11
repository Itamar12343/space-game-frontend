function ILostReducer(state = false, action) {
    switch (action.type) {
        case "setILostTrue":
            return action.text;
        case "setILostFalse":
            return false;
        default:
            return state;
    }
}
export default ILostReducer;