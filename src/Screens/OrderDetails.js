import React, { Component } from 'react';
import SunClasses from '../../public/images/Products/sunglasses.jpg';

class OrderDetails extends Component {
    render() {
        return (
            <div className="order-details pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-lg-4">
                            <img className="w-100 h-100" src={SunClasses} />
                        </div>

                        <div className="col-xs-12 col-lg-6">
                            <table className="table">
                                <tr>
                                    <td>Item Name</td>
                                    <td>SunClasses</td>
                                </tr>

                                <tr>
                                    <td>Order Name</td>
                                    <td>Order Name</td>
                                </tr>

                                <tr>
                                    <td>Customer Name</td>
                                    <td>Mosad</td>
                                </tr>

                                <tr>
                                    <td>Order Date</td>
                                    <td>12-9-2020</td>
                                </tr>

                                <tr>
                                    <td>Item Price</td>
                                    <td>30 $</td>
                                </tr>

                                <tr>
                                    <td>State</td>
                                    <td>Recived</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderDetails;