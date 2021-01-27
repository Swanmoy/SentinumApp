import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const rou = NavbarData.map((item, index) => {
        return ( <
            li key = { index }
            className = 'nav-text' >
            <
            Link to = { item.path } > { " " } { item.name } { item.icon } { " " } <
            /Link>{" "} <
            /li>
        );
    });
    return ( <
        >
        <
        IconContext.Provider value = {
            { color: "#fff" } } >
        <
        div className = 'navbar' >
        <
        Link to = '#'
        className = 'menu-bars' >
        <
        FaIcons.FaBars onClick = {
            () => {
                setSidebar(!sidebar);
            }
        }
        />{" "} <
        /Link>{" "} <
        h6 > Sentinum < /h6>{" "} <
        /div>{" "} <
        nav className = { sidebar ? "nav-menu active" : "nav-menu" } >
        <
        ul className = 'nav-menu-items' >
        <
        li className = 'navbar-toggle' >
        <
        Link to = '#'
        className = 'menu-bars' >
        <
        AiIcons.AiOutlineClose onClick = {
            () => {
                setSidebar(!sidebar);
            }
        }
        />{" "} <
        /Link>{" "} <
        /li>{" "} { rou } { " " } <
        /ul>{" "} <
        /nav>{" "} <
        /IconContext.Provider>{" "} <
        />
    );
}

export default Navbar;