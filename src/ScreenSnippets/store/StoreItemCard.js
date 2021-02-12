import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from '@fortawesome/free-solid-svg-icons';

class StoreItemCard extends Component {

    constructor(props) {
        super(props);
      }

      render() {
        return (
            <div class="card" style={{height:300}}>
                <img src={this.props.item.photo_path} calssName="card-img img-responsive" alt="" />
                <div className="card-body">
                    <div className="clearfix">
                        <h6 className="float-left">{this.props.item.name}</h6>
                        <div className="float-right">
                            put rating here
                           {/* {this.props.item.rating.map(function(){
                                <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
                                }
                            )} */}
                        </div>
                    </div>

                    <div className="text-secondary"  style={{height:160}}>
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