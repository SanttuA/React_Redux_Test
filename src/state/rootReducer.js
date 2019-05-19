import { combineReducers } from "redux";
import fontSizeReducer from "./fontSizeReducer";
import postReducer from "./postReducer";
import counterReducer from "./counterReducer";

export default combineReducers({
    fontSize: fontSizeReducer,
    posts: postReducer,
    counter: counterReducer
});