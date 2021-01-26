import React from "react";
import SentinumLogo from "../Images/Sentinum_logo.png";
import "./HomePage.css";

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
        />
    );
}

export default HomePage;