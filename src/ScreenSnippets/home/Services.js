import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
faHeadset
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
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="thumbnail">
                                    <FontAwesomeIcon icon={faChartLine} style={{ fontSize: '50px' }}></FontAwesomeIcon>
                                    <h4 className="service__title">Growing Business</h4>
                                    <p className="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="thumbnail">
                                    <FontAwesomeIcon icon={faBusinessTime} style={{ fontSize: '50px' }}></FontAwesomeIcon>
                                    <h4 className="service__title">Save Time</h4>
                                    <p className="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="thumbnail">
                                    <FontAwesomeIcon icon={faHeadset} style={{ fontSize: '50px' }}></FontAwesomeIcon>
                                    <h4 className="service__title">Free Support</h4>
                                    <p className="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="thumbnail">
                                    <FontAwesomeIcon icon={faFileInvoice} style={{ fontSize: '50px' }}></FontAwesomeIcon>
                                    <h4 className="service__title">Make Invoice </h4>
                                    <p className="service__paragraph" >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="thumbnail">
                                    <FontAwesomeIcon icon={faShoppingBag} style={{ fontSize: '50px' }}></FontAwesomeIcon>
                                    <h4 className="service__title">Create Your Market</h4>
                                    <p className="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="thumbnail">
                                    <FontAwesomeIcon icon={faShoppingBasket} style={{ fontSize: '50px' }}></FontAwesomeIcon>
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