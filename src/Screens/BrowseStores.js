import React, { Component } from "react";
import CustomerAccNavBar from "../ScreenSnippets/accounts/CustomerAccNavBar";
import BrowseStoreSideNav from "../Components/BrowseStoreSideNav";
import "../../public/css/browsestores.css";
import CategoriesNavbar from "../ScreenSnippets/accounts/CategoriesNavbar";
import ProductCarousel from "../Components/ProductsCarousel";
import Footer from "../ScreenSnippets/accounts/Footer";
import BrowseStoreSlider from "../ScreenSnippets/store/BrowseStoreSlider";
import StoreCarousel from "../Components/StoreCarousel"


class BrowseStores extends Component {


    render() {

        return (
            <div>
                <div className="d-flex" id="wrapper">
                    <BrowseStoreSideNav />
                    <div id="page-content-wrapper">
                        <CustomerAccNavBar />
                        <CategoriesNavbar />
                        <StoreCarousel />
                        <div class="container-fluid">

                            <div className="mt-5">
                                <ProductCarousel />
                            </div>

                            <div className="offerimg w-100 mt-5  d-flex justify-content-center align-items-center text-white">
                                <h2 className="font-weight-bold">helooooooo</h2>
                            </div>

                            <div className="my-5">
                                <ProductCarousel />
                            </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

            

        );
    }
}

export default BrowseStores;
