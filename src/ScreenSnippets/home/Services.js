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
            <section class="service" id="services">
                <div class="container">
                    <div class="page-section text-center">
                        <h2 class="page-section__title">SERVICES WE OFFER</h2>
                        <p class="page-section__paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div class="row gutters-40">
                            <div class="col-md-4">
                                <div class="thumbnail">
                                    <FontAwesomeIcon icon={faChartLine} style={{ fontSize: '50px' }}></FontAwesomeIcon>
                                    <h4 class="service__title">Growing Business</h4>
                                    <p class="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="thumbnail">
                                    <FontAwesomeIcon icon={faBusinessTime} style={{ fontSize: '50px' }}></FontAwesomeIcon>
                                    <h4 class="service__title">Save Time</h4>
                                    <p class="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="thumbnail">
                                    <FontAwesomeIcon icon={faHeadset} style={{ fontSize: '50px' }}></FontAwesomeIcon>
                                    <h4 class="service__title">Free Support</h4>
                                    <p class="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>
                        </div>
                        <div class="row gutters-40">
                            <div class="col-md-4">
                                <div class="thumbnail">
                                    <FontAwesomeIcon icon={faFileInvoice} style={{ fontSize: '50px' }}></FontAwesomeIcon>
                                    <h4 class="service__title">Make Invoice </h4>
                                    <p class="service__paragraph" >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="thumbnail">
                                    <FontAwesomeIcon icon={faShoppingBag} style={{ fontSize: '50px' }}></FontAwesomeIcon>
                                    <h4 class="service__title">Create Your Market</h4>
                                    <p class="service__paragraph">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="thumbnail">
                                    <FontAwesomeIcon icon={faShoppingBasket} style={{ fontSize: '50px' }}></FontAwesomeIcon>
                                    <h4 class="service__title">Make Shopping</h4>
                                    <p class="service__paragraph">
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