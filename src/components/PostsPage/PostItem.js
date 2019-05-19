import React from "react";

function PostItem(props){
    return(
        <div key={props.post.id}>
            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p>
            <hr />
        </div>
    );
}

export default PostItem;