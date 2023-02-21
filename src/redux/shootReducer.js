function ShootReducer(state = false, action) {
    switch (action.type) {
        case "setShootTrue":
            return true;
        case "setShootFalse":
            return false;
        default:
            return state;
    }
}
export default ShootReducer;