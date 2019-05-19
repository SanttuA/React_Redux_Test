import React from "react";

function PostForm(props){
    return(
        <div>
            <h2>Create new post</h2>
            <form onSubmit={props.submitPostForm}>
                <label>Title:</label>
                <br />
                <input
                    type="text"
                    name="postTitle"
                    onChange={props.handlePostFormChange}
                    value={props.postTitle}
                    required/>
                <br />
                <label>Body:</label>
                <br />
                <textarea
                    type="text"
                    name="postBody"
                    onChange={props.handlePostFormChange}
                    value={props.postBody}
                    required/>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostForm;