import React, { Component } from "react";
import productImg from "../../public/images/product1.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faMoneyCheck, faShoppingCart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faBuysellads } from "@fortawesome/free-brands-svg-icons";



class ViewItemInfoCard extends Component {

    render() {
        return (
            <div className="parent-div">
               <div class="card">
                    <div class="row no-gutters">
                        <div class="col-3 h-100">
                            <img src={productImg} class="img-fluid" alt="" />
                        </div>
                        <div class="col">
                            <div class="card-block px-2">
                                <div className="itemName clearfix">
                                    <h4 class="card-title mt-3 float-left">Item Name</h4>
                                    <div className=" mt-3  float-right">
                                        <span class="fa fa-star checked"></span>
                                        <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                        <FontAwesomeIcon icon={faStarHalf} className="checked"></FontAwesomeIcon>
                                        <p className="text-success"> 8 ratings</p>
                                    </div>
                                </div>
                                <p class="card-text">Description</p>
                                <a href="#" className="btn btn-success" role="button">
                                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2"></FontAwesomeIcon>
                                    add to cart
                                </a>
                                <a href="#"  className="btn btn-danger ml-3" role="button">
                                    <FontAwesomeIcon icon={faMoneyBill} className="mr-2"></FontAwesomeIcon>
                                    order now
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer w-100 d-flex">
                        <p className="mt-3">Rate our item ! it will not take a second</p>
                        <a href="#"  className="btn btn-primary ml-2" role="button">
                            <FontAwesomeIcon icon={faMoneyBill} className="mr-2"></FontAwesomeIcon>
                            rate us
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewItemInfoCard;
