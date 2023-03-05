function HitReducer(state = false, action) {
    switch (action.type) {
        case "setHit":
            return true;
        case "setHitFalse":
            return false;
        default:
            return state;
    }
}
export default HitReducer;