
import React, { Component } from "react";
import StoreCarousel from "../Components/StoreCarousel";
import CustomerAccNavBar from "../ScreenSnippets/accounts/CustomerAccNavBar";
import Footer from "../ScreenSnippets/accounts/Footer";


class BrowseStores extends Component {
    render() {

        return (
            <div className="parent">
                <CustomerAccNavBar />
                <div className="storeCarousel">
                  <StoreCarousel />
                </div>
            </div>
        );
    }
}

export default BrowseStores;
