import React, { Component } from "react";
import "../../../public/css/customeraccnavbar.css";


class HomeNavbar extends Component {
    render() {
        return (

            <nav className="topnavigation navbar navbar-expand-sm bg-dark navbar-dark d-flex">
                    <div className="">
                        {/*------------------------- brand logo ----------------------------------------------*/}
                        <a className="navbar-brand font-weight-bold" href="/home">My Easy</a>
                    </div>
                    <div className="ml-auto">
                        {/*------------------------- collapsing button ---------------------------------------*/}

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/*------------------------- nav links ----------------------------------------------*/}

                        <div className="ml-5 collapse navbar-collapse accLinks" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="#services">services</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="/#about">about us</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="#offers">offers</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="#contacts">contacts</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="/privacypolicy">privacy policy</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="/termsofservice">terms of service</a>
                                </li>
                            </ul>
                            <a className="btn btn-sm btn-success mt-2" href="/signin">login</a>
                        </div>
                    </div>
            </nav>
        );
    }
}

export default HomeNavbar;
