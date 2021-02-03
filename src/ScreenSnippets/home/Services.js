import React, { Component } from "react";
import statistics from "../../../public/icons/home/statistics.png";
import shop from "../../../public/icons/home/shop.png"
import customerService from "../../../public/icons/home/customer-service.png";
import shopping from "../../../public/icons/home/online-shopping.png";
import time from "../../../public/icons/home/time.png";
import bill from "../../../public/icons/home/bill.png";

class Services extends Component {
    render() {
        return (
            <section className="services" id="services">
                <div className="container mt-5">
                    <div className="text-center">
                        <h2 className="mb-3">SERVICES WE OFFER</h2>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-lg-4 animate__animated animate__backInLeft">
                                <div className="thumbnail">
                                    <img className="w-25 h-25" src={statistics} alt="" /> 
                                    <h4 className="service__title">Growing Business</h4>
                                    <p className="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>

                            {/* -------------------------------- save time ------------------------------------------ */}

                            <div className="col-xs-12 col-md-6 col-lg-4 animate__animated animate__backInDown">
                                <div className="thumbnail">
                                    <img className="w-25 h-25" src={time} alt="" />
                                    <h4 className="service__title">Save Time</h4>
                                    <p className="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>

                            {/* -------------------------------- customer support ------------------------------------------ */}

                            <div className="col-xs-12 col-md-6 col-lg-4 animate__animated animate__backInRight">
                                <div className="thumbnail">
                                    <img className="w-25 h-25" src={customerService} alt="" />
                                    <h4 className="service__title">Customer Support</h4>
                                    <p className="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>

                            {/* -------------------------------- make invoice ------------------------------------------ */}

                            <div className="col-xs-12 col-md-6 col-lg-4 animate__animated animate__backInLeft">
                                <div className="thumbnail">
                                    <img className="w-25 h-25" src={bill} alt="" />
                                    <h4 className="service__title">Make Invoice </h4>
                                    <p className="service__paragraph" >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>

                            {/* -------------------------------- vreate market ------------------------------------------ */}

                            <div className="col-xs-12 col-md-6 col-lg-4 animate__animated animate__backInUp">
                                <div className="thumbnail">
                                    <img className="w-25 h-25" src={shop} alt="" />
                                    <h4 className="service__title">Create Your Market</h4>
                                    <p className="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>

                            {/* -------------------------------- make shopping ------------------------------------------ */}

                            <div className="col-xs-12 col-md-6 col-lg-4 animate__animated animate__backInRight">
                                <div className="thumbnail">
                                    <img className="w-25 h-25" src={shopping} alt="" />
                                    <h4 className="service__title">Make Shopping</h4>
                                    <p className="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;