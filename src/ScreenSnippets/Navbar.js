import React, { Component } from "react";
import Logo from '../../public/images/Navbar/logo.png';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="" width="100" height="70" className="d-inline-block align-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/#about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/#services">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/#categories">CATEGORIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/#contact">CONTACT</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="btn btn-primary" aria-current="page" href="/signin">SIGNIN</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;