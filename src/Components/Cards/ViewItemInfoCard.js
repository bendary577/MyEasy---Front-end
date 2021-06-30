import React, { Component } from "react";
import product from "../../../public/images/Products/shoes.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import ProductImagesCarousel from '../Carousels/ProductImagesCarousel';
import star from '../../../public/icons/stores/star.png';

class ViewItemInfoCard extends Component {

    render() {
        const imageStyle={
            width:"100%",
            height:"100%"
        }
        return (
            <div className="parent-div">
               <div className="card">
                    <div className="row">
                        <div className="col-sm-3 col-md-4 h-100">
                            <img src={product} className="" alt="" style={imageStyle}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-block px-2">
                                {/* ------------------------------- item info -------------------------------------------- */}
                                <div className="itemName clearfix">
                                    <div className="float-left">
                                        <h4 className="card-title mt-3">Item Name</h4>
                                        <h5 className="text-success">$129.0</h5>
                                        <h6 className="text-primary">Item Status</h6>
                                    </div>
                                    
                                    <div className=" mt-3 float-right">
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

                                <div className="gallery">
                                    {/*
                                    <div class="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
                                        <div class="row py-3 shadow-5">
                                            <div class="col-3 mt-1">
                                                <img
                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                                                    alt="Gallery image 1"
                                                    class="active w-100"
                                                />
                                            </div>
                                            <div class="col-3 mt-1">
                                                <img
                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                                                    alt="Gallery image 2"
                                                    class="w-100"
                                                />
                                            </div>
                                            <div class="col-3 mt-1">
                                                <img
                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                                                    alt="Gallery image 3"
                                                    class="w-100"
                                                />
                                            </div>
                                            <div class="col-3 mt-1">
                                                <img
                                                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                                    data-mdb-img="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                                    alt="Gallery image 4"
                                                    class="w-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    */}
                                    <ProductImagesCarousel />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------- item rating -------------------------------------------- */}

                    <div className="card-footer w-100 d-flex justify-content-around">
                        <p className="font-weight-bold mt-3">Rate our item ! it will not take a second</p>
                        <a href="#"  className="mt-3" data-toggle="modal" data-target="#rateProduct">
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faStar} className="mr-2 p-0 mt-1"></FontAwesomeIcon>
                                <h5>Rate The Product Now!</h5>
                            </div>
                        </a>
                    </div>

                    {/*----------------------- Modal -------------------------*/}
                    <div class="modal fade" id="rateProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Rating</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="d-flex w-10 justify-content-center">
                                        <a href="" className="mx-2"><img src={star} style={{width:70, height:70}} /></a>
                                        <a href="" className="mx-2"><img src={star} style={{width:70, height:70}} /></a>
                                        <a href="" className="mx-2"><img src={star} style={{width:70, height:70}} /></a>
                                        <a href="" className="mx-2"><img src={star} style={{width:70, height:70}} /></a>
                                        <a href="" className="mx-2"><img src={star} style={{width:70, height:70}} /></a>
                                </div>
                            </div>
                            <div class="modal-footer text-center">
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewItemInfoCard;
