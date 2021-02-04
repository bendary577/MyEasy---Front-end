import React, { Component } from "react";
import egypt from "../../../public/icons/home/egypt.png";
import "../../../public/css/customeraccnavbar.css";


class CustomerAccNavBar extends Component {
    render() {
        const langIconStyle={
            width:30,
            height:30
        };
        return (

            <nav className="topnavigation navbar navbar-expand-sm bg-dark navbar-dark">

                {/*------------------------- brand logo ----------------------------------------------*/}

                {/* -- 
                <a className="navbar-brand" href="#">
                    <img src="" alt="Logo" style={ImageStyle} />
                </a>
                */}

                <a class="navbar-brand" href="/home">My Easy</a>


                {/*------------------------- search bar ---------------------------------------------*/}

                <div class="input-group w-50">
                    <input type="text" class="form-control" placeholder="search" aria-describedby="sizing-addon2" />
                </div>


                {/*------------------------- collapsing button ---------------------------------------*/}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/*------------------------- nav links ----------------------------------------------*/}

                <div className="ml-5 collapse navbar-collapse accLinks" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2 mt-2">
                            <a className="nav-link" href="/stores">stores</a>
                        </li>
                        <li className="nav-item mx-2 mt-2">
                            <a className="nav-link" href="/mycart">cart</a>
                        </li>
                        <li className="nav-item mx-2 mt-2">
                            <a className="nav-link" href="/myorders">orders</a>
                        </li>

                        <li className="nav-item mx-2 mt-2">
                            <a href="">
                                <img src={egypt} style={langIconStyle} className="mt-2" alt="" />
                            </a> 
                        </li>

                        {/*------------------------- drop down links ----------------------------------------------*/}

                        <li class="nav-item dropdown mr-0 ml-5">
                            <a class="nav-link dropdown-toggle" href="/customerprofile" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
