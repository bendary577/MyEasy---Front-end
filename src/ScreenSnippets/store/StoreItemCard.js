import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from '@fortawesome/free-solid-svg-icons';

class StoreItemCard extends Component {

    render() {
        return (
            <div class="card">
                <img src={this.props.item.image} calssName="card-img img-responsive" alt="" />
                <div className="card-body">
                    <div className="clearfix">
                        <h6 className="float-left">Item Name</h6>
                        <div className="float-right">
                            {this.props.item.ratings.map(
                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                            )}
                        </div>
                    </div>

                    <div className="text-secondary">
                        <p>{this.props.item.description}</p>
                    </div>

                    <div className="clearfix">
                        <p className="text-success mt-2 float-left">{this.props.item.price}</p>
                        <a className="btn btn-danger w-50 float-right" href="/viewitemdetails" role="button">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2"></FontAwesomeIcon>
                            view item details
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoreItemCard;