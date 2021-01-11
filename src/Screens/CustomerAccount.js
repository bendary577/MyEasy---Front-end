import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CustomerAccNavBar from "../ScreenSnippets/accounts/CustomerAccNavBar";
import RecommendItemInfoCard from "../Components/RecommendItemInfoCard";
import CustomerSideNav from "../Components/CustomerSideNav";
import "../../public/css/customeraccount.css";
import book1 from "../../public/images/book_1.png";
import book2 from "../../public/images/book_2.png";
import book3 from "../../public/images/book_3.png";

class CustomerAccount extends Component {


    render() {

        const iconImgsStyle = {
            width: 250,
            height: 250
        };

        return (
                <div className="d-flex" id="wrapper">
                    <CustomerSideNav />

                    <div id="page-content-wrapper">
                        <CustomerAccNavBar />
                    
                        <div class="container-fluid">

                        {/**------------------------------------- account intro row ---------------------------------- */}

                            <div className="row">
                                <div className="intro-headline d-flex my-5 ml-4">
                                    <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                                    <h2 className="font-weight-bold">Hi Customer !</h2>
                                </div>

                                <div className="badge">
                                    <h3 className="mt-3">Browse More Than 500 Stores</h3>
                                    <h4>choose your desired items, add it to your cart</h4>
                                </div>
                            </div>
                        
                         {/**------------------------------------- actions row ---------------------------------- */}

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
                                            <a class="btn btn-lg btn-primary" href="/browsestores" role="button">Browse Stores</a>
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

                             {/**------------------------------------- recommentation row ---------------------------------- */}

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
            

        );
    }
}

export default CustomerAccount;
