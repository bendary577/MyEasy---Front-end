import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import product from "../../../public/images/Products/shoes.jpg";

class BuyItemInfoCard extends Component {
    render() {

        const ImgsStyle = {
            height: 300
        };


        return (
            <div className="card mb-5">
                <img className="card-img-top w-100" alt="" src={product} style={ImgsStyle} />
                <div className="card-body bg-light">
                    <h3 className="card-title">Summary</h3>
                    <div className="name clearfix">
                        <p className="card-text float-left">Item Name</p>
                        <div className="float-right">
                            <span class="fa fa-star checked"></span>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStarHalf} className="checked"></FontAwesomeIcon>
                        </div>
                    </div>

                    <p className="card-text">Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

                    <div className="price clearfix">
                        <p className="card-text float-left">Item Price</p>
                        <p className="float-right">$129.99</p>
                    </div>

                    <div className="discount clearfix">
                        <p className="card-text float-left">discount</p>
                        <p className="float-right">-$50.99</p>
                    </div>

                    <div className="delivery clearfix">
                        <p className="card-text float-left">delivery charge</p>
                        <p className="float-right">FREE</p>
                    </div>

                </div>
                <div className="card-body bg-light border-top">
                    <div className="total clearfix font-weight-bold">
                        <h3 className="card-text float-left">Total :</h3>
                        <h3 className="float-right">$129.99</h3>
                    </div>
                    <p className="mt-4">By completing your purchase you agree to these <a href="#">Terms of Service.</a></p>
                </div>
            </div>

        );
    }
}

export default BuyItemInfoCard;
