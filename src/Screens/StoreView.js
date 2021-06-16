import React, { Component } from 'react';
import '../../public/css/store.css';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import Footer from '../ScreenSnippets/accounts/Footer';
import store from '../../public/images/store.png';
import ProductCarousel from '../Components/ProductsCarousel';
class StoreView extends Component {
    render() {
        const storeImgStyle = {
            width : "100%",
            height : "100%"
        }
        return (
            <div className="parent" >

            <AccNavbar />

            <div className="container">
                <div class="row my-5">
                    <div class="col-md-4 text-center">
                        <img src={store} style={storeImgStyle} className="border" alt="store avatar" />
                    </div>
                    <div class="col-md-8  align-items-start">
                        <h2>Store Name</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        <p>registered at 12/7/1998</p>
                        <div className="categories">
                            <span class="badge badge-pill badge-primary p-2 mr-2">Primary</span>
                            <span class="badge badge-pill badge-primary p-2 mr-2">Primary</span>
                            <span class="badge badge-pill badge-primary p-2 mr-2">Primary</span>
                            <span class="badge badge-pill badge-primary p-2 mr-2">Primary</span>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="header">
                        <h3>Category Name</h3>
                    </div>
                    <div className="products">
                        <ProductCarousel />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="header">
                        <h3>Category Name</h3>
                    </div>
                    <div className="products">
                        <ProductCarousel />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        )
    }
}

export default StoreView;