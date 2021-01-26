import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/HomePage";
import How from "./Components/HowToUse.js";
import Contact from "./Components/ContactUs";
import Privacy from "./Components/PrivacyPolicy.js";
import { ApiTest } from "./Components/ApiTest";
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
        Route path = '/SentinumApp/howtouse' >
        <
        How / >
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