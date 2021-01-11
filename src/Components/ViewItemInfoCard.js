import React, { Component } from "react";
import productImg from "../../public/images/product1.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';



class ViewItemInfoCard extends Component {

    render() {
        return (
            <div className="parent-div">
               <div className="card">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 h-100">

                            {/* ------------------------------- image -------------------------------------------- */}
                            <img src={productImg} className="card-img img-responsive img-fluid" alt="" />
                        </div>
                        <div className="col">
                            <div className="card-block px-2">

                                {/* ------------------------------- item info -------------------------------------------- */}
                                <div className="itemName clearfix">
                                    <div className="float-left">
                                        <h4 className="card-title mt-3">Item Name</h4>
                                        <h5 className="text-success">$129.0</h5>
                                    </div>
                                    
                                    <div className=" mt-3 float-right">
                                        <span class="fa fa-star checked"></span>
                                        <div className="d-flex">
                                            <p className="text-success mr-2">4.6</p>
                                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                        </div>
                                        <h5 className="text-success"> 8 ratings</h5>
                                    </div>
                                </div>

                                {/* ------------------------------- item description -------------------------------------------- */}

                                <p className="card-text">Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>

                                {/* ------------------------------- item actions -------------------------------------------- */}

                                <div class="actions mb-3">
                                    <a href="/mycart" className="btn btn-success" role="button">
                                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2"></FontAwesomeIcon>
                                        add to cart
                                    </a>
                                    <a href="/buyitem"  className="btn btn-danger ml-3" role="button">
                                        <FontAwesomeIcon icon={faMoneyBill} className="mr-2"></FontAwesomeIcon>
                                        order now
                                    </a>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------- item rating -------------------------------------------- */}

                    <div className="card-footer w-100 d-flex justify-content-around">
                        <p className="font-weight-bold mt-3">Rate our item ! it will not take a second</p>
                        <a href="#"  className="mt-3">
                            <FontAwesomeIcon icon={faStar} className="mr-2 p-0"></FontAwesomeIcon>
                            rate us
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewItemInfoCard;
