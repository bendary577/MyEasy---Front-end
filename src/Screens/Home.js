import React, { Component } from "react";
import '../../public/css/home.css';
import NavBar from "../ScreenSnippets/accounts/Navbar";
import Welcome from '../ScreenSnippets/home/Welcome';
import About from '../ScreenSnippets/home/About';
import Services from '../ScreenSnippets/home/Services';
import ContactUs from '../ScreenSnippets/home/ContactUs';
import Panal from '../ScreenSnippets/home/Panal';
import Footer from '../ScreenSnippets/accounts/Footer';


class Home extends Component {
    render() {
        return (
            <div className="parent-div">
                <NavBar />
                <Welcome />
                <Services />
                <Panal head="We Can Make Youe Rich" p="you can use your moeny to busniss it in useful work"
                    href="/store" a="Store" />
                <About />
                <hr />
                <ContactUs />
                <Footer />
            </div>
        )
    }
}

export default Home;