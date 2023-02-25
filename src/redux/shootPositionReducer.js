function ShootPositionReducer(state = null, action) {
    switch (action.type) {
        case "setShootPosition":
            return action.text
        default:
            return state
    }
}
export default ShootPositionReducer;