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
        Route exact path = '/' >
        <
        Home / >
        <
        /Route>{" "} <
        Route path = '/aboutus' >
        <
        About / >
        <
        /Route>{" "} <
        Route path = '/contactus' >
        <
        Contact / >
        <
        /Route>{" "} <
        Route path = '/privacypolicy' >
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