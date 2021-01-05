
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import CustomerAccNavBar from "../ScreenSnippets/CustomerAccNavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




class MyOrders extends Component {
    render() {

        return (
            <div className="parent">

                <CustomerAccNavBar />

                <div className="container">
                    <div className="intro-headline d-flex my-5">
                        <FontAwesomeIcon icon={faMoneyBill} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                        <h2 className="font-weight-bold">My Orders</h2>
                    </div>


                    <div className="mytable">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Order Date</th>
                                    <th>Order Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td><a href="" className="btn btn-md btn-primary">View Order Details</a></td>
                                </tr>
                                <tr>
                                    <td>Mary</td>
                                    <td>Moe</td>
                                    <td><a href="" className="btn btn-md btn-primary">View Order Details</a></td>
                                </tr>
                                <tr>
                                    <td>July</td>
                                    <td>Dooley</td>
                                    <td><a href="" className="btn btn-md btn-primary">View Order Details</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyOrders;
