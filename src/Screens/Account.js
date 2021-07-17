import React, { useState, useEffect } from "react";
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
import UserService from "../Services/UserService";

const Account = () => {

    const [userInfo, setUserInfo] = useState({});
    const [recommendations, setRecommendations] = useState([]);
    
    useEffect(() => {
       getUser();
    });
    

    
    const getUser = async () => {
        let response = await UserService.getUserInfo();
        if(response.status == 200){
            setUserInfo(response.data.data);
        }else{

        }
    }

    let userType = "" ;    

    if(userInfo.type === "0"){
        userType = "admin";
    }else if(userInfo.type === "1"){
        userType = "customer";
    }else if(userInfo.type === "2"){
        userType = "seller";
    }

        return (
            <div>
                <div className="d-flex" id="wrapper">

                       <AccSideNavbar user={userType}/>                      

                    <div id="page-content-wrapper">
                        <AccNavbar />
                    
                        <div class="container-fluid">

                       <AccountInfoSection user={userInfo} />
                        
                        <hr></hr>
                         {/**------------------------------------- actions row ---------------------------------- */}
                            <h2>{userInfo.first_name}</h2>
                            {userType === "customer" ? <CustomerActions user={userInfo}/> : <SellerActions user={userInfo}/> }
                            
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
