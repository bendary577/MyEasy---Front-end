import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";
import RecommendItemInfoCard from "../Components/Cards/RecommendItemInfoCard";
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";
import "../../public/css/account.css";
import CustomerActions from "../ScreenSnippets/accounts/CustomerActions";
import SellerActions from "../ScreenSnippets/accounts/SellerActions";
import BronzeMedal from "../../public/icons/profile/bronzemedal.png";
import SilverMedal from "../../public/icons/profile/silvermedal.png";
import GoldMedal from "../../public/icons/profile/goldmedal.png";


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

        const medalImageStyle = {
            width : 30,
            height : 30
        };

        let medalImage;
        if(this.state.userinfo.type === "customer"){
            medalImage = "";
        }else if(this.state.userinfo.type === "seller"){
            if(this.state.userinfo.badge === "bronze"){
                medalImage = <img src={BronzeMedal} style={medalImageStyle} className="" alt="" />
            }else if(this.state.userinfo.badge === "silver"){
                medalImage = <img src={SilverMedal} style={medalImageStyle} className="" alt="" />
            }else{
                medalImage = <img src={GoldMedal} style={medalImageStyle} className="" alt="" />
            }
        }

        const userType = "customer";    //this.state.userinfo.profile_type;
        const userName = this.state.userinfo.name;

        return (
            <div>
                <div className="d-flex" id="wrapper">

                       <AccSideNavbar user={userType}/>                      

                    <div id="page-content-wrapper">
                        <AccNavbar />
                    
                        <div class="container-fluid">

                        {/**------------------------------------- account intro row ---------------------------------- */}

                            <div className="row">
                                <div className="intro-headline d-flex my-5 ml-4">
                                    <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                                    <h2 className="font-weight-bold">Hi {userName}!</h2>
                                    {medalImage}
                                </div>
                            </div>
                        
                         {/**------------------------------------- actions row ---------------------------------- */}

                            {this.state.userinfo.type === "customer" ?  <SellerActions /> : <CustomerActions/>}
                            
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
            <Footer/>
        </div>
            

        );
    }
}

export default Account;
