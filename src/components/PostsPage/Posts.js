import React from "react";
import { connect } from "react-redux"
import { fetchPosts } from "../../actions/postActions"
import PostItem from "./PostItem"
import PostSearch from "./PostSearch";
import PostForm from "./PostForm";

class Posts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            searchText: "",
            postTitle: "",
            postBody: ""
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handlePostFormChange = this.handlePostFormChange.bind(this);
        this.submitPostForm = this.submitPostForm.bind(this);
    }

    handleSearchChange(event){
        this.setState({
            searchText: event.target.value
        })
    }

    handlePostFormChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    submitPostForm(event){
        event.preventDefault();

        const newPost = {
            title: this.state.postTitle,
            body: this.state.postBody
        }

        //Make a fake post to the api that doesn't really add our post in the database...
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(newPost),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(post => this.props.fetchPosts([...this.props.posts, post]))

        this.setState({
            postTitle: "",
            postBody: ""
        })
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => this.props.fetchPosts(posts))
    }

    render(){
        const postItems = this.props.posts.filter((post) => {
            return(
                post.title.toLowerCase().includes(this.state.searchText) ||
                post.body.toLowerCase().includes(this.state.searchText));
        })
        .map(post => {
            return(
                <PostItem post={post} />
            );
        });

        return(
            <main>
                <h1>Post Page</h1>
                <PostForm 
                    postTitle={this.state.postTitle}
                    postBody={this.state.postBody}
                    handlePostFormChange={this.handlePostFormChange}
                    submitPostForm={this.submitPostForm}/>
                <PostSearch
                    searchText={this.state.searchText}
                    handleSearchChange={this.handleSearchChange}
                />
                {postItems}
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchPosts: (posts) => {
            return dispatch(fetchPosts(posts));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);