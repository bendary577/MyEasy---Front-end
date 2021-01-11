import React, { Component } from "react";
import "../../public/css/sidenav.css";

class SideNav extends Component {

    render() {
        return (
            <div>
                <div class="sidenav">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </div>

        );
    }
}

export default SideNav;
