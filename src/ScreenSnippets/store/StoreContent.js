import React, { Component } from 'react';
import StoreItem from '../../Components/StoreItem';

class StoreContent extends Component {
    render() {
        return (
            <div className="store-content">
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-lg-4 p-2">
                        <StoreItem />
                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-4 p-2">
                        <StoreItem />
                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-4 p-2">
                        <StoreItem />
                    </div>

                    <div className="col-xs-12 col-md-6 col-lg-4 p-2">
                        <StoreItem />
                    </div>
                </div>
            </div>
        )
    }
}

export default StoreContent;