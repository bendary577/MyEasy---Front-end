import React, { Component } from "react";
import CustomerAccNavBar from "../ScreenSnippets/accounts/CustomerAccNavBar";
import "../../public/css/customeraccount.css";
import book1 from "../../public/images/book_1.png";
import book2 from "../../public/images/book_2.png";
import book3 from "../../public/images/book_3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Footer from "../ScreenSnippets/accounts/Footer";
import SideNav from "../Components/SideNav";
import CartItemInfoCard from "../Components/CartItemInfoCard";
import RecommendItemInfoCard from "../Components/RecommendItemInfoCard";

class CustomerAccount extends Component {


    render() {

        const iconImgsStyle = {
            width: 250,
            height: 250
        };

        return (
            <div>
                <CustomerAccNavBar />
                <div className="accountBody mt-5">
                    {/*-------------------------------------- controls------------------------------------*/}
                    <div className="buttons">
                        <div className="container">
                            <div className="row">
                                <div className="sidenavigation col-lg-3">
                                    <SideNav className="w-100"/>
                                </div>
                                <div className="col-lg-9">
                                    
                                    <div className="intro-headline d-flex my-5">
                                    <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                                    <h2 className="font-weight-bold">Hi Customer !</h2>
                                    </div>

                                    <div className="badge">
                                        <h3 className="mt-3">Browse More Than 500 Stores</h3>
                                        <h4>choose your desired items, add it to your cart</h4>
                                    </div>

                                    <div className="row">

                                        {/*---------------------------- card1-----------------------------*/}

                                        <div className="col-sm-12 col-md-4 mb-3 control">
                                            <div class="card w-100 m-0">
                                                <img
                                                    src={book1}
                                                    alt="Logo1"
                                                    calssName="img img-responsive"
                                                    style={iconImgsStyle}
                                                />
                                                <div className="card-body text-center">
                                                    <a class="btn btn-lg btn-primary" href="/stores" role="button">Browse Stores</a>
                                                </div>
                                            </div>
                                        </div>

                                        {/*---------------------------- card2-----------------------------*/}

                                        <div className="col-sm-12 col-md-4 mb-3 control">
                                            <div className="card w-100 m-0 ">
                                                <img
                                                    src={book2}
                                                    alt="Logo1"
                                                    calssName="img img-responsive"
                                                    style={iconImgsStyle}
                                                />
                                                <div className="card-body text-center">
                                                    <a href="/makeinvoice" className="btn btn-dark btn-lg">Create Invoice</a>
                                                </div>
                                            </div>
                                        </div>


                                        {/*---------------------------- card3-----------------------------*/}

                                        <div className="col-sm-12 col-md-4 mb-3 control">
                                            <div className="card w-100 m-0 ">
                                                <img
                                                    src={book3}
                                                    alt="Logo1"
                                                    calssName="img img-responsive"
                                                    style={iconImgsStyle}
                                                />
                                                <div className="card-body text-center">
                                                    <a href="/complaint" className="btn btn-warning btn-lg">Make complaint</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="recommendations mb-5">
                                            <div className="container">

                                                <div className="intro-headline d-flex my-5">
                                                    <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                                                    <h2 className="font-weight-bold">Recommended for you</h2>
                                                </div>
                                                <div className="row">

                                                    {/*---------------------------- card1-----------------------------*/}

                                                    <div className="col-sm-12 col-md-4 mb-3 control">
                                                        <RecommendItemInfoCard />
                                                    </div>

                                                    {/*---------------------------- card2-----------------------------*/}

                                                    <div className="col-sm-12 col-md-4 mb-3 control">
                                                       <RecommendItemInfoCard />
                                                    </div>


                                                    {/*---------------------------- card3-----------------------------*/}

                                                    <div className="col-sm-12 col-md-4 mb-3 control">
                                                        <RecommendItemInfoCard />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    {/*-------------------------------------- recommendations ------------------------------------*/}

                  
                </div>
                <Footer />
            </div>

        );
    }
}

export default CustomerAccount;
