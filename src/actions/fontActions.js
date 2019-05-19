import { CHANGE_FONT_SIZE } from "../constants/ActionTypes";

export const changeFont = (fontSize) => {
    return {
        type: CHANGE_FONT_SIZE,
        fontSize
    };
}