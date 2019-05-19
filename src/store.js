import { createStore } from "redux";
import rootReducer from "./state/rootReducer";

const initialState = {};

const store = createStore(rootReducer, initialState);

export default store;