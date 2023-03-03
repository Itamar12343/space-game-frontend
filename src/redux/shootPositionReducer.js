function ShootPositionReducer(state = null, action) {
    switch (action.type) {
        case "setShootPosition":
            return action.text;
            break;
        default:
            return state;
    }
}
export default ShootPositionReducer;