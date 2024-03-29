import React, { Component } from "react";
import createStore from "../../../public/icons/profile/create-store.png"
import invoice from "../../../public/icons/profile/invoice.png"
import complaint from "../../../public/icons/profile/complaint.png"
import SellerCharts from "./SellerCharts";
import TransactionsChart from "./TransactionsChart";
import OrdersChart from "./OrdersChart";

class SellerActions extends Component {

    componentDidMount = () => {
        console.log("Kosooooooooom Hayateeeeeeeeeee" + this.props.user.profile)
    }

    render() {

        const iconImgsStyle = {
            width: 120,
            height: 120
        };

        return (    


            <div>

                <div className="container">
                    <SellerCharts />
                </div>
                 
                <div className="row">
                    
                {/*---------------------------- card1-----------------------------*/}

                <div className="col-sm-12 col-md-4 mb-3 ">
                    <div class="card w-100 m-0 control">
                        {
                            this.props.user.profile === 1 ?
                        <div className="card-body text-center">
                            <img
                                src={createStore}
                                alt="Logo1"
                                calssName="img img-responsive"
                                style={iconImgsStyle}
                            />
                            <div>
                                <a class="btn btn-lg btn-primary mt-2" href="/createstore" role="button">Create Store</a>
                            </div>
                        </div>
                        :
                        <div className="card-body text-center">
                            <img
                                src={createStore}
                                alt="Logo1"
                                calssName="img img-responsive"
                                style={iconImgsStyle}
                            />
                            <div>
                                <a class="btn btn-lg btn-success mt-2" href="/mystore" role="button">Visit Store</a>
                            </div>
                        </div>
                        }
                    </div>
                </div>

                {/*---------------------------- card2-----------------------------*/}

                <div className="col-sm-12 col-md-4 mb-3 ">
                    <div className="card w-100 m-0 control ">
                        <div className="card-body text-center">
                            <img
                                src={invoice}
                                alt="Logo1"
                                calssName="img img-responsive"
                                style={iconImgsStyle}
                            />
                            <div>
                                <a href="/make_invoice" className="btn btn-dark btn-lg mt-2">Create Invoice</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/*---------------------------- card3-----------------------------*/}

                <div className="col-sm-12 col-md-4 mb-3 ">
                    <div className="card w-100 m-0 control">
                        <div className="card-body text-center">
                            <img
                                src={complaint}
                                alt="Logo1"
                                calssName="img img-responsive"
                                style={iconImgsStyle}
                            />
                            <div>
                                <a href="/make_complaint" className="btn btn-warning btn-lg mt-2">Make Complaint</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default SellerActions;
