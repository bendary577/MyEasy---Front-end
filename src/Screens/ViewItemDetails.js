import React, { Component } from "react";
import ViewItemInfoCard from "../Components/ViewItemInfoCard";
import CustomerAccNavBar from "../ScreenSnippets/CustomerAccNavBar";



class ViewItemDetails extends Component {

    render() {
        return (
            <div className="parent-div">
                <CustomerAccNavBar />
                <div className="container">

                    {/* ------------------------------- links -------------------------------------------- */}
                    <div className="links d-flex mt-5 mb-4">
                        <a href="#" className="text-dark font-weight-bold">
                            Electronics
                        </a>
                        <p className="font-weight-bold mx-3"> > </p> 
                        <a href="#" className="text-dark font-weight-bold">
                            Mosaad Store
                        </a>
                    </div>

                     {/* ------------------------------- item card -------------------------------------------- */}

                    <ViewItemInfoCard />

                    {/* ------------------------------- rate item -------------------------------------------- */}

                    {/* ------------------------------- rate item -------------------------------------------- */}


                </div>
            </div>
        );
    }
}

export default ViewItemDetails;
