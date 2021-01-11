import React, { Component } from "react";
import "../../public/css/sidenavbar.css"

class CustomerSideNav extends Component {

    render() {
        return (    

            <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="sidebar-heading">My Easy account </div>
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action bg-light">Orders number <strong className="text-success ml-3">0</strong></a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Help</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Privacy Policy</a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">Terms and Service</a>
                </div>
            </div>

        );
    }
}

export default CustomerSideNav;
