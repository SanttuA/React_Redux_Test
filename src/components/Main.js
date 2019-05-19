import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Search from "./Search";
import Posts from "./PostsPage/Posts";
import Counter from "./Counter";

function Main(props){
    return(
        <main>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/posts" component={Posts}/>
                <Route exact path="/counter" component={Counter}/>
            </Switch>
        </main>
    );
}

export default Main;