import { INCREASE_COUNT, DECREASE_COUNT } from "../constants/ActionTypes";

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREASE_COUNT:
            return {count: state.count+1}
        case DECREASE_COUNT:
            return {count: state.count-1}
        default:
            return state;
    }
}

export default counterReducer;