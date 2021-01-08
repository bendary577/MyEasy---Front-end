import React, { Component } from 'react';
import Spic from '../../public/images/Store/product3.jpg';

class StoreItem extends Component {
    render() {
        return (
            <div className="store-item w-100 text-center overflow-hidden" style={{ height: '350px' }}>
                <div className="pic w-100" style={{ height: '60%' }}>
                    <img src={Spic} className="w-100 h-100" />
                </div>
                <h2>60$</h2>
                <p>Easy Polo Black Edition</p>
                <a className="btn btn-success w-50">Buy</a>
            </div>
        )
    }
}

export default StoreItem;