import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <header className="header header--bg">
                <div className="container">
                    <nav className="navbar">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="">MY EASY</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav pull-right">
                                <li><a href="">HOME</a></li>
                                <li><a href="">SERVICES</a></li>
                                <li><a href="">FEATURES</a></li>
                                <li><a href="">PORTFOLIO</a></li>
                                <li><a href="">BLOG</a></li>
                                <li><a href="">CONTACT</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="header__content text-center">
                        <h1 className="header__content__title">CREATIVE AGENCY</h1>
                        <p className="header__content__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                        <a className="button button--margin-right button--hover" href="#">LARN MORE</a>
                        <a className="button button--hover" href="#" >PURCHASE</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;