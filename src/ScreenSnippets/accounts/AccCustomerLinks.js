import React, { Component } from "react";

class AccCustomerLinks extends Component {
    render() {
        return (    

            
            <div>
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action bg-light">Your Wallet<strong className="text-success ml-5">$0</strong></a>
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

export default AccCustomerLinks;
