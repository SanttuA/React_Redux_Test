import { FETCH_POSTS } from "../constants/ActionTypes"

const initialState = {
    posts: []
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POSTS:
            return {
                posts: action.posts
            };
        default:
            return state;
    }
}

export default postReducer;