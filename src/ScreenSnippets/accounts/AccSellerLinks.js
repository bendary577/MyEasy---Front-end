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
import withdraw from '../../../public/icons/profile/withdraw.png';
import myorders from '../../../public/icons/profile/myorders.png';
import { withRouter } from 'react-router-dom'

const iconStyle = {
    width : 20,
    height : 20,
    marginRight : 5
}

class AccSellerLinks extends Component {

    constructor(props){
        super(props);
        this.state = {
            canWithdrawMoney : false,
            checkWithdraw : false,
        }
    }

    checkCanWithdrawMoney = () => {
        this.props.history.push('/withdraw_money')
        /*
        this.setState({
            checkWithdraw : !this.state.checkWithdraw
        })
        */
    }

    render() {
        return (    
            <div>
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <img src={wallet} style={iconStyle} className="" alt="" />
                        Your Wallet
                        <div className="alert alert-success mt-2 text-center">
                            <h3><strong className="text-success">0.00 EGP</strong></h3>
                            <a href="" className="text-primary">change to dollar</a>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action bg-light">
                        <button className="btn btn-danger" onClick={this.checkCanWithdrawMoney}>
                            <img src={withdraw} style={iconStyle} className="" alt="" />
                            Withdraw money
                        </button>
                        {
                           this.state.checkWithdraw  === true ? 

                           <div className="alert alert-danger mt-2">sorry, can't withdraw money yet</div>
                           :
                           <div></div>
                        }
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

export default withRouter(AccSellerLinks);
