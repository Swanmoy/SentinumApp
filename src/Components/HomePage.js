import React from "react";
import SentinumLogo from "../Images/Sentinum_logo.png";
import "./HomePage.css";
import { IconContext } from "react-icons";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";

function HomePage() {
    return ( <
        >
        <
        section >
        <
        div id = 'logo-container' >
        <
        img src = { SentinumLogo }
        id = 'logo' / > { " " } <
        /div>{" "} <
        /section>{" "} <
        section >
        <
        div id = 'about' >
        <
        p id = 'about-text' >
        Hello!, In this Project, We are using the { " " } <
        strong > Sentiment Analysis Algorithm < /strong> to predict the
        emotional state of an individual based on the data input from the person 's social media posts and interactions.{" "} <
        /p>{" "} <
        /div>{" "} <
        /section>{" "} <
        h1 id = 'shead' > Sentiment Analysis < /h1>{" "} <
        IconContext.Provider value = {
            { color: " rgb(27, 105, 223)" } } >
        <
        div id = 'icon-container' >
        <
        div id = 'cnt1' > { " " } <
        RiIcons.RiFacebookCircleFill className = 'socialicons' / > { " " } <
        p > Facebook Analyser < /p>{" "} <
        /div>{" "} <
        div id = 'cnt2' > { " " } <
        FaIcons.FaTwitter className = 'socialicons' / >
        <
        p > Twitter Analyser < /p>{" "} <
        /div>{" "} <
        div id = 'cnt3' > { " " } <
        GrIcons.GrInstagram className = 'socialicons' / > { " " } <
        p > Instagram Analyser < /p>{" "} <
        /div>{" "} <
        /div>{" "} <
        /IconContext.Provider>{" "} <
        />
    );
}

export default HomePage;