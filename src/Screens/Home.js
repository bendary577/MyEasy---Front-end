import React, { Component } from "react";
import '../../public/css/home.css';
import Navbar from "../ScreenSnippets/Navbar";
import About from '../ScreenSnippets/home/About';
import Services from '../ScreenSnippets/home/Services';
import Contact from '../ScreenSnippets/home/Contact';
import Lets from '../ScreenSnippets/home/Lets';
import WhatClientSay from '../ScreenSnippets/home/WhatClientSay';
import Footer from '../ScreenSnippets/Footer';

class Home extends Component {
    render() {
        return (
            <div className="parent-div">
                <Navbar />
                <Services />
                <Contact />
                <About />
                <Lets />
                <WhatClientSay />
                <Footer />
            </div>
        )
    }
}

export default Home;