import React, { Component } from "react";
import "../../public/css/customeraccnavbar.css";

class CustomerAccNavBar extends Component {


    render() {



        return (

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

                {/*------------------------- brand logo ----------------------------------------------*/}

                {/* -- 
                <a className="navbar-brand" href="#">
                    <img src="" alt="Logo" style={ImageStyle} />
                </a>
                */}

                <a class="navbar-brand" href="#">My Easy</a>


                {/*------------------------- search bar ----------------------------------------------*/}
                <form className="form-inline w-50">
                    <input className="form-control mr-sm-2 w-75" type="text" placeholder="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>


                {/*------------------------- collapsing button ---------------------------------------*/}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/*------------------------- nav links ----------------------------------------------*/}

                <div class="collapse navbar-collapse accLinks" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item mt-2">
                            <a className="nav-link" href="#">Browse Stores</a>
                        </li>
                        <li className="nav-item mt-2">
                            <a className="nav-link" href="mycart">My Cart</a>
                        </li>
                        <li className="nav-item mt-2">
                            <a className="nav-link" href="myorders">My Orders</a>
                        </li>

                        {/*------------------------- drop down links ----------------------------------------------*/}

                        <li class="nav-item dropdown ml-5">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" alt="logo" className="rounded-circle" />
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Edit Profile</a>
                                <a className="dropdown-item" href="#">Privacy Policy</a>
                                <a className="dropdown-item" href="#">Terms Of Service</a>
                                <a className="dropdown-item" href="#">Help</a>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default CustomerAccNavBar;