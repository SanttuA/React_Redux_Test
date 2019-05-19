import { FETCH_POSTS } from "../constants/ActionTypes";

export const fetchPosts = (posts) => {
    return {
        type: FETCH_POSTS,
        posts
    };
}