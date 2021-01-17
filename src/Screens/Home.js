import React, { Component } from "react";
import '../../public/css/home.css';
import NavBar from "../ScreenSnippets/accounts/Navbar";
import Welcome from '../ScreenSnippets/home/Welcome';
import About from '../ScreenSnippets/home/About';
import Services from '../ScreenSnippets/home/Services';
import Lets from '../ScreenSnippets/home/Lets';
import WhatClientSay from '../ScreenSnippets/home/WhatClientSay';
import ContactUs from '../ScreenSnippets/home/ContactUs';
import Footer from '../ScreenSnippets/accounts/Footer';

class Home extends Component {
    render() {
        return (
            <div className="parent-div">
                <NavBar />
                <Welcome />
                <Services />
                <hr />
                <About />
                <hr />
                <ContactUs />
                <Footer />
            </div>
        )
    }
}

export default Home;