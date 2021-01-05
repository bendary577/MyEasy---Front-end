import React, { Component } from "react";
import '../../public/css/home.css';
import Navbar from "../ScreenSnippets/Navbar";
import Welcome from '../ScreenSnippets/home/Welcome';
import About from '../ScreenSnippets/home/About';
import Services from '../ScreenSnippets/home/Services';
import Category from '../ScreenSnippets/home/Category';
import Contact from '../ScreenSnippets/home/Contact';

class Home extends Component {
    render() {
        return (
            <div className="parent-div">
                <Navbar />

                <Welcome />
                <About />
                <hr />
                <Services />
                <hr />
                <Category />
                <hr />
                <Contact />
            </div>
        )
    }
}

export default Home;