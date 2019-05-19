import React from "react";

function PostSearch(props){
    return(
        <div>
            <span>Search posts: </span>
            <input
                placeholder="post title and body"
                value={props.searchText}
                onChange={props.handleSearchChange}
                name="Search"
                type="text"
            />
        </div>
    );
}

export default PostSearch;