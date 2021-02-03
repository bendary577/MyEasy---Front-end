import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";
import RecommendItemInfoCard from "../Components/RecommendItemInfoCard";
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";
import store from "../../public/icons/profile/store.png";
import invoice from "../../public/icons/profile/invoice.png";
import complaint from "../../public/icons/profile/complaint.png";
import "../../public/css/account.css";


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

        const iconImgsStyle = {
            width: 120,
            height: 120
        };
        

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

                            

                            <div className="row">
                                {/*---------------------------- card1-----------------------------*/}
                                <div className="col-sm-12 col-md-4 mb-3 ">
                                    <div class="card w-100 m-0 control">
                                        <div className="card-body text-center">
                                            <img
                                                src={store}
                                                alt="Logo1"
                                                calssName="img img-responsive"
                                                style={iconImgsStyle}
                                            />
                                            <div>
                                                <a class="btn btn-lg btn-primary" href="/browsestores" role="button">Browse Stores</a>
                                            </div>
                                        </div>
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
                                                <a href="/makeinvoice" className="btn btn-dark btn-lg">Create Invoice</a>
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
                                                <a href="/complaint" className="btn btn-warning btn-lg">Make Complaint</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
