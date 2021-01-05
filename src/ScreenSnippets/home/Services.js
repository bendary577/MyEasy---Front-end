import React, { Component } from "react";
import Bill from '../../../public/images/Services/bill.png';
import Busniess from '../../../public/images/Services/busniess.png';
import Market from '../../../public/images/Services/market.jpg';

class Services extends Component {
    render() {
        return (
            <div className="services text-center" id="services">
                <div className="container">
                    <div className="col-12 text-center">
                        <h1>SERVICES</h1>
                        <p>SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES.</p>
                    </div>
                    <div className="row mt-4 pt-4">
                        <div className="col-xs-12 col-lg-4">
                            <img src={Bill} className="w-50 h-50" />
                            <h2 className="pt-4">PAY YOUR BILL</h2>
                        </div>
                        <div className="col-xs-12 col-lg-4">
                            <img src={Busniess} className="w-50 h-50" />
                            <h2 className="pt-4">Goal Your Bussines</h2>
                        </div>
                        <div className="col-xs-12 col-lg-4">
                            <img src={Market} className="w-50 h-50" />
                            <h2 className="pt-4">Make your Market</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;