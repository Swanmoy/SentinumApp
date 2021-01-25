import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/HomePage";
import About from "./Components/About.js";
import Contact from "./Components/ContactUs";
import Privacy from "./Components/PrivacyPolicy.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return ( <
        >
        <
        Router >
        <
        Navbar / >
        <
        Switch >
        <
        Route exact path = '/SentinumApp' >
        <
        Home / >
        <
        /Route>{" "} <
        Route path = '/SentinumApp/aboutus' >
        <
        About / >
        <
        /Route>{" "} <
        Route path = '/SentinumApp/contactus' >
        <
        Contact / >
        <
        /Route>{" "} <
        Route path = '/SentinumApp/privacypolicy' >
        <
        Privacy / >
        <
        /Route>{" "} <
        /Switch>{" "} <
        /Router>{" "} <
        />
    );
}

export default App;