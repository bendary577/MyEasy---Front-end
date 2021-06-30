import React, { Component } from "react";
import wallet from '../../../public/icons/profile/wallet.png';
import orders from '../../../public/icons/profile/orders.png';
import account from '../../../public/icons/profile/account.png';
import stores from '../../../public/icons/profile/stores.png';
import invoices from '../../../public/icons/profile/invoices.png';
import overview from '../../../public/icons/profile/overview.png';
import privacyPolicy from '../../../public/icons/profile/privacy-policy.png';
import termsAndConditions from '../../../public/icons/profile/terms-conditions.png';
import help from '../../../public/icons/profile/help.png';
import integration from '../../../public/icons/profile/integration.png';
import customers from '../../../public/icons/profile/customers.png';
import myorders from '../../../public/icons/profile/myorders.png';


const iconStyle = {
    width : 20,
    height : 20,
    marginRight : 5
}

class AccSellerLinks extends Component {
    render() {
        return (    
            <div>
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={wallet} style={iconStyle} className="" alt="" />
                        Your Wallet<strong className="text-success ml-5">$0</strong>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={orders} style={iconStyle} className="" alt="" />
                        Orders number <strong className="text-success ml-3">0</strong>
                    </a>
                    <a href="/profile" class="list-group-item list-group-item-action bg-light">
                        <img src={account} style={iconStyle} className="" alt="" />
                        My Profile
                    </a>
                    <a href="/mystore" class="list-group-item list-group-item-action bg-light">
                        <img src={stores} style={iconStyle} className="" alt="" />
                        My Store
                    </a>
                    <a href="/myorders" class="list-group-item list-group-item-action bg-light">
                        <img src={orders} style={iconStyle} className="" alt="" />
                        My Orders 
                    </a>
                    <a href="/myinvoices" class="list-group-item list-group-item-action bg-light">
                        <img src={invoices} style={iconStyle} className="" alt="" />
                        Invoices
                    </a>
                    <a href="/make_complaint" class="list-group-item list-group-item-action bg-light">
                        <img src={customers} style={iconStyle} className="" alt="" />
                        Complaints    
                    </a>
                    <a href="/integration" class="list-group-item list-group-item-action bg-light">
                        <img src={integration} style={iconStyle} className="" alt="" />
                        Integration Settings    
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={overview} style={iconStyle} className="" alt="" />
                        Overview
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={help} style={iconStyle} className="" alt="" />
                        Help
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={privacyPolicy} style={iconStyle} className="" alt="" />
                        Privacy Policy
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={termsAndConditions} style={iconStyle} className="" alt="" />
                        Terms & conditions
                    </a>
                    
                </div>
            </div>

        );
    }
}

export default AccSellerLinks;
