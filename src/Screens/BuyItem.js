
import React, { Component } from "react";
import CustomerAccountNavBar from "../ScreenSnippets/CustomerAccNavBar";
import "../../public/css/buyitem.css";
import PaymentForm from "../Components/PaymentForm";
import BuyItemInfoCard from "../Components/BuyItemInfoCard";

class BuyItem extends Component {

    render() {

       
        return (
            <div className="parent-div">

                <CustomerAccountNavBar />

                {/*------------------------------ intro --------------------------------------------- */}

                <div className="intro-headline mt-5">
                    <h2 className="text-center font-weight-bold">Complete Payment</h2>
                </div>

                {/*------------------------------ left side bar --------------------------------------------- */}

                <div className="container mt-5">
                    <div className="row">
                        <div className="left col-sm-12 col-md-6">
                            <PaymentForm />
                        </div>

                {/*------------------------------ right side bar --------------------------------------------- */}

                        <div className="right col-sm-12 col-md-6">
                            <BuyItemInfoCard />
                        </div>
                    </div>
                </div>
           </div>
        );
    }
}

export default BuyItem;
