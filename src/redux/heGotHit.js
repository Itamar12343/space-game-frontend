function HeGotHitReducer(state = false, action) {
    switch (action.type) {
        case "setHeGotHitTrue":
            return true;
        case "setHeGotHitFalse":
            return false;
        default:
            return state;
    }
}
export default HeGotHitReducer;