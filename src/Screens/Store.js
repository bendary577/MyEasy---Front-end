import React, { Component } from 'react';
import ItemCartCard from '../Components/ItemCartCard';
import '../../public/css/store.css';

class Store extends Component {
    render() {
        return (
            <div className="store mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3 control">
                            <ItemCartCard />
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3 control">
                            <ItemCartCard />
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3 control">
                            <ItemCartCard />
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3 control">
                            <ItemCartCard />
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3 control">
                            <ItemCartCard />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Store;