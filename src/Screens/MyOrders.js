
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";




class MyOrders extends Component {

    state = {
        orders: []
      }
    
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/orders`)
          .then(res => {
            const orders = res.data;
            this.setState({ orders });
          })
    }

    render() {

        return (
            <div className="parent">

                <AccNavbar />

                    <div className="container" style={{height:500}}>
                        <div className="intro-headline d-flex my-5">
                            <FontAwesomeIcon icon={faMoneyBill} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                            <h2 className="font-weight-bold">My Orders</h2>
                        </div>


                        <div className="content">
                                { this.state.orders === [] ? 
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Item Name</th>
                                                <th>Order Date</th>
                                                <th>Order Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.orders.map(order =><tr key={order.id}>
                                                                                <td>{order.name}</td>
                                                                                <td>{order.date}</td>
                                                                                <td><a href="/orderdetails" className="btn btn-md btn-primary">View Order Details</a></td>
                                                                            </tr>)}
                                        </tbody>
                                    </table>
                                :   <div className="noOrders my-5 d-flex">
                                        <h1>you have no orders yet!</h1>
                                        <div className="mx-5">
                                            <a href="/stores" className="btn btn-lg btn-success">Buy now !</a>
                                        </div>
                                    </div>
                                }            
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default MyOrders;
