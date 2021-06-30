import React, { useState } from "react";
import axios from "axios";
import AccNavbar from "../ScreenSnippets/accounts/AccNavbar";
import Footer from "../ScreenSnippets/accounts/Footer";
import AccSideNavbar from "../ScreenSnippets/accounts/AccSideNavbar";
import "../../public/css/account.css";
import CustomerActions from "../ScreenSnippets/accounts/CustomerActions";
import SellerActions from "../ScreenSnippets/accounts/SellerActions";
import BronzeMedal from "../../public/icons/profile/bronzemedal.png";
import SilverMedal from "../../public/icons/profile/silvermedal.png";
import GoldMedal from "../../public/icons/profile/goldmedal.png";
import AccountInfoSection from '../ScreenSnippets/accounts/AccountInfoSection';
import AccountRecommendedProducts from "./AccountRecommendedProducts";

const Account = () => {

    const [userInfo, setUserInfo] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    
    const componentDidMount = () => {
        axios.all([																		 
            axios.get("https://jsonplaceholder.typicode.com/users"),					 
            axios.get("https://jsonplaceholder.typicode.com/posts")
           ])
             .then(axios.spread((...responses) => {
                    const userInfo = responses[0].data;
                    const recommendations = responses[1].data;
                    setUserInfo(userInfo);													 
                    setRecommendations(recommendations);													 
            }))
             .catch(errors => {
                //react on errors.
              });
      }


    const userType = "seller";    //this.state.userinfo.profile_type;
    const medalImageStyle = {
            width : 30,
            height : 30
    };

        let medalImage;
        if(userInfo.type === "customer"){
            medalImage = "";
        }else if(userInfo.type === "seller"){
            if(userInfo.badge === "bronze"){
                medalImage = <img src={BronzeMedal} style={medalImageStyle} className="" alt="" />
            }else if(userInfo.badge === "silver"){
                medalImage = <img src={SilverMedal} style={medalImageStyle} className="" alt="" />
            }else{
                medalImage = <img src={GoldMedal} style={medalImageStyle} className="" alt="" />
            }
        }


        return (
            <div>
                <div className="d-flex" id="wrapper">

                       <AccSideNavbar user={userType}/>                      

                    <div id="page-content-wrapper">
                        <AccNavbar />
                    
                        <div class="container-fluid">

                       <AccountInfoSection />
                        
                        <hr></hr>
                         {/**------------------------------------- actions row ---------------------------------- */}

                            {userInfo.type === "customer" ? <CustomerActions/> : <SellerActions /> }
                            
                             {/**------------------------------------- recommentation row ---------------------------------- */}

                            <AccountRecommendedProducts products={recommendations} />
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
            

        );
    }

export default Account;
