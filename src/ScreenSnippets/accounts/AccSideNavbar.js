import React, { Component } from "react";
import AccCustomerLinks from "./AccCustomerLinks";
import AccSellerLinks from "./AccSellerLinks";
import "../../../public/css/accsidenavbar.css";

class AccSideNavbar extends Component {

    render() {
        return (    
            <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="sidebar-heading">My Easy account </div>
                {this.props.user === "customer" ?  <AccCustomerLinks /> : <AccSellerLinks /> }   
            </div>

        );
    }
}

export default AccSideNavbar;
