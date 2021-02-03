import React, { Component } from 'react';
import StoreSlider from '../ScreenSnippets/store/StoreSlider';
import Category from '../ScreenSnippets/store/Category';
import StoreContent from '../ScreenSnippets/store/StoreContent';
import Recommend from '../ScreenSnippets/store/Recommend';
import '../../public/css/store.css';

class StoreSellerView extends Component {
    render() {
        return (
            <div className="store">
                <StoreSlider />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <Category />
                        </div>
                        <div className="col-sm-9">
                            <StoreContent />
                        </div>
                    </div>
                </div>
                <hr />
                <Recommend />
            </div>
        )
    }
}

export default StoreSellerView;