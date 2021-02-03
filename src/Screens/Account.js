import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";
import RecommendItemInfoCard from "../Components/RecommendItemInfoCard";
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";

import "../../public/css/account.css";
import CustomerActions from "../ScreenSnippets/accounts/CustomerActions";
import SellerActions from "../ScreenSnippets/accounts/SellerActions";


class Account extends Component {

    state = {
        userinfo: [],
        recommendations:[]
      }
    
      componentDidMount() {
        axios.all([																		 
            axios.get("https://jsonplaceholder.typicode.com/users"),					 
            axios.get("https://jsonplaceholder.typicode.com/posts")
           ])
             .then(axios.spread((...responses) => {
                    const userinfo = responses[0].data;
                    const recommendations = responses[1].data;
                    this.setState({ userinfo });													 
                    this.setState({ recommendations });													 
            }))
             .catch(errors => {
                //react on errors.
              });
      }


    render() {

        return (

                <div className="d-flex" id="wrapper">


                    {this.state.userinfo.type === "customer" ?  <AccSideNavbar user="customer"/>   
                      :  this.state.userinfo.type === "seller" ? <AccSideNavbar user="seller"/> 
                      :  <AccSideNavbar user="company"/>  
                    }
                    

                    <div id="page-content-wrapper">
                        <AccNavbar />
                    
                        <div class="container-fluid">

                        {/**------------------------------------- account intro row ---------------------------------- */}

                            <div className="row">
                                <div className="intro-headline d-flex my-5 ml-4">
                                    <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                                    <h2 className="font-weight-bold">Hi Customer !</h2>
                                </div>

                                <div className="badge">
                                    <h3 className="mt-3">Browse More Than 500 Stores</h3>
                                    <h4>choose your desired items, add it to your cart</h4>
                                </div>
                            </div>
                        
                         {/**------------------------------------- actions row ---------------------------------- */}

                            {this.state.userinfo.type === "customer" ?  <CustomerActions/>  : <SellerActions />}
                            
                             {/**------------------------------------- recommentation row ---------------------------------- */}

                            <div className="row">
                                <div className="recommendations mb-5">
                                    <div className="container">
                                        <div className="intro-headline d-flex my-5">
                                            <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                                            <h2 className="font-weight-bold">Recommended for you</h2>
                                        </div>           
                                                
                                        <div className="row">
                                            <div className="content">
                                            { this.state.recommendations === [] ? 
                                                <div className="row">
                                                    {this.state.recommendations.map(recommendedproduct => 
                                                        <div key={recommendedproduct.key} className="col-sm-6 col-md-3 mb-3 control">
                                                            <RecommendItemInfoCard name={recommendedproduct.name} price={recommendedproduct.price} />
                                                        </div>
                                                    )}
                                                </div>
                                                :   <div className="noOrders my-5 d-flex">
                                                        <h3 className="ml-4">there is no recommended products!</h3>
                                                        <div className="mx-5">
                                                            <a href="/stores" className="btn btn-lg btn-success">browse stores !</a>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            

        );
    }
}

export default Account;
