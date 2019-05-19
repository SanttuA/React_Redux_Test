import { CHANGE_FONT_SIZE } from "../constants/ActionTypes"
import { SMALL_FONT } from "../constants/fontSizes"

const initialState = {
    fontSize: SMALL_FONT
}

const fontSizeReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_FONT_SIZE:
            return {
                fontSize: action.fontSize
            };
        default:
            return state;
    }
}

export default fontSizeReducer;