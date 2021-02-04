import React, { Component } from 'react';
import axios from 'axios';
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

class MyInvoices extends Component {

    state = {
        invoices: []
      }
    
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/invoices`)
          .then(res => {
            const invoices = res.data;
            this.setState({ invoices });
          })
    }

    render() {
        return (
            <div className="my-invoices pt-4">
                <AccNavbar />

                <div className="container" style={{height:500}}>
                    <div className="intro-headline d-flex my-5">
                        <FontAwesomeIcon icon={faFileInvoice} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                        <h2 className="font-weight-bold">My Ivoices</h2>
                    </div>


                    <div className="content">
                            { this.state.invoices === [] ? 
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Invoice Name</th>
                                            <th>invoice Price</th>
                                            <th>invoice creation date</th>
                                            <th>invoice expiration date</th>
                                            <th>invoice details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.invoices.map(invoice =><tr key={invoice.id}>
                                                                            <td>{invoice.name}</td>
                                                                            <td>{invoice.price}</td>
                                                                            <td>{invoice.creationdate}</td>
                                                                            <td>{invoice.expirationdate}</td>
                                                                            <td><a href="/orderdetails" className="btn btn-md btn-primary">View Order Details</a></td>
                                                                        </tr>)}
                                    </tbody>
                                </table>
                            :   <div className="noOrders my-5 d-flex">
                                    <h1>you have no inovices yet!</h1>
                                    <div className="mx-5">
                                        <a href="/stores" className="btn btn-lg btn-success">Buy now !</a>
                                    </div>
                                </div>
                            }            
                    </div>
                </div>
            </div >
        )
    }
}

export default MyInvoices;