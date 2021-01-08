import React, { Component } from 'react';
import StoreSlider from '../ScreenSnippets/store/StoreSlider';
import '../../public/css/store.css';

class Store extends Component {
    render() {
        return (
            <div className="store">
                <StoreSlider />
            </div>
        )
    }
}

export default Store;