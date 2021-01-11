
import React, { Component } from "react";
import CustomerAccNavBar from "../ScreenSnippets/accounts/CustomerAccNavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Footer from "../ScreenSnippets/accounts/Footer";
import CartItemInfoCard from "../Components/CartItemInfoCard";

class MyCart extends Component {
    render() {

        return (
            <div className="parent">

                <CustomerAccNavBar />


                <div className="m-5">
                    <div className="container">

                        <div className="intro-headline d-flex my-5">
                            <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                            <h2 className="font-weight-bold">My Cart</h2>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 col-md-3 mb-3 control">
                                <CartItemInfoCard />
                            </div>

                            <div className="col-sm-6 col-md-3 mb-3 control">
                                <CartItemInfoCard />
                            </div>

                            <div className="col-sm-6 col-md-3 mb-3 control">
                                <CartItemInfoCard />
                            </div>

                            <div className="col-sm-6 col-md-3 mb-3 control">
                                <CartItemInfoCard />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MyCart;
