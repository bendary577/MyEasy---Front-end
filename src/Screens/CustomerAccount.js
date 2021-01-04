import React, { Component } from "react";
import CustomerAccNavBar from "../ScreenSnippets/CustomerAccNavBar";
import "../../public/css/customeraccount.css";
import book1 from "../../public/images/book_1.png";
import book2 from "../../public/images/book_2.png";
import book3 from "../../public/images/book_3.png";

class CustomerAccount extends Component {


    render() {
    
        const iconImgsStyle = {
            width: 300,
            height: 300
        };

        return (
            <div>
                <CustomerAccNavBar />
                <div className="accountBody mt-5">

                {/*-------------------------------------- intro------------------------------------*/}

                    <h2 className="mt-5 ml-5">Hi, Customer !</h2>

                    <div className="badge">
                        <h3 className="mt-3">Browse More Than 500 Stores</h3>
                        <h4>choose your desired items, add it to your cart</h4>
                    </div>


                    {/*-------------------------------------- controls------------------------------------*/}

                    <div className="buttons">
                        <div className="container">
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
                                             <a class="btn btn-lg btn-primary" href="/complaint" role="button">Make Complaint</a>
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
                                            <button type="button" className="btn btn-warning btn-lg">Create Invoice</button>
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
                                            <button type="button" className="btn btn-dark btn-lg">Browse Stores</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*-------------------------------------- recommendations------------------------------------*/}



                    <h2 className="ml-5 my-5">Recommended for you</h2>

                   {/*-------------------------------------- recommendations ------------------------------------*/}

                  <div className="recommendations mb-5">
                        <div className="container">
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
                                            <h5 className="card-title"></h5>
                                            <p className="card-text"> some text in card</p>
                                            <a class="btn btn-primary" href="/signup" role="button">do something</a>
                                        </div>
                                    </div>
                                </div>

                                {/*---------------------------- card2-----------------------------*/}

                                <div className="col-sm-12 col-md-4 mb-3 control">
                                    <div className="card w-100 m-0">
                                        <img
                                            src={book2}
                                            alt="Logo1"
                                            calssName="img img-responsive"
                                            style={iconImgsStyle}
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title"></h5>
                                            <p className="card-text"> some text in card</p>
                                            <a class="btn btn-warning" href="/signup" role="button">do something</a>
                                        </div>
                                    </div>
                                </div>


                                {/*---------------------------- card3-----------------------------*/}

                                <div className="col-sm-12 col-md-4 mb-3 control">
                                    <div className="card w-100 m-0">
                                        <img
                                            src={book3}
                                            alt="Logo1"
                                            calssName="img img-responsive"
                                            style={iconImgsStyle}
                                        />
                                        <div className="card-body text-center">
                                            <h5 className="card-title"></h5>
                                            <p className="card-text"> some text in card</p>
                                            <a class="btn btn-dark" href="/signup" role="button">do something</a>
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
