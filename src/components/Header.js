import React from "react";
import { NavLink } from "react-router-dom";
import { SMALL_FONT, MEDIUM_FONT, LARGE_FONT } from "../constants/fontSizes"

function Header(props){
    return(
        <header>
            <span>Font size </span>
            <button onClick={() => props.handleFontSizeClick(SMALL_FONT)}>SMALL</button>
            <button onClick={() => props.handleFontSizeClick(MEDIUM_FONT)}>MEDIUM</button>
            <button onClick={() => props.handleFontSizeClick(LARGE_FONT)}>LARGE</button>

            <span> <NavLink to={"/"}>Home</NavLink> </span>
            <span> <NavLink to={"/posts"}>Posts</NavLink> </span>
            <span> <NavLink to={"/counter"}>Counter</NavLink> </span> 
            <span> <NavLink to={"/about"}>About</NavLink> </span>
        </header>
    );
}

export default Header;