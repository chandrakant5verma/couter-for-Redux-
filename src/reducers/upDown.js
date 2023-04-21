let intialState = 0;

const CountNumber = (state = intialState, action) => {
    switch (action.type) {
        case "increament": return state + 1;
        case "Decrement": return state - 1;
        default: return state;
    }
}
export default CountNumber;