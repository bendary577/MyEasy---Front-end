import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <header className="header header--bg">
                <div className="container">
                    <nav className="navbar">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="">MY EASY</a>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <ul className="nav navbar-nav pull-right">
                            <li className="nav-item"><a href="" className="nav-link">HOME</a></li>
                            <li className="nav-item"><a href="" className="nav-link">SERVISES</a></li>
                            <li className="nav-item"><a href="" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="" className="nav-link">CLINET SAY</a></li>
                            <li className="nav-item"><a href="" className="nav-link">JOIN</a></li>
                        </ul>
                    </nav>
                    <div className="header__content text-center">
                        <h1 className="header__content__title">CREATIVE AGENCY</h1>
                        <p className="header__content__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                        <a className="button button--margin-right button--hover" href="#">LARN MORE</a>
                        <a className="button button--hover" href="#" >PURCHASE</a>
                    </div>
                </div>
            </header >
        )
    }
}

export default Navbar;