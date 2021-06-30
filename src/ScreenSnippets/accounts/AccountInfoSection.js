import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import person_2 from '../../../public/images/person_2.jpg';

class AccountInfoSection extends Component {

    render() {


    
        const avatarStyle = {
            width : "80%",
            height : "80"
        };

        return (
            <div>
                {/**------------------------------------- account intro row ---------------------------------- */}

                <div className="row">
                                <div className="intro-headline d-flex my-5 ml-4">
                                    <FontAwesomeIcon icon={faShoppingCart} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                                    <h2 className="font-weight-bold">Welcome to your account!</h2>
                                </div>
                            </div>

                         {/**------------------------------------- account info row ---------------------------------- */}

                            <div className="acount info mb-5">
                                <div className="continer">
                                    <div className="row">
                                        <div className="col-md-4">
                                                <img src={person_2} style={avatarStyle} className="rounded" alt="avatar" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="info">
                                                <h2>User Name</h2>
                                                <p>User Account Type</p>
                                                <p>registered at 12/3/1998</p>
                                            </div>
                                            <div className="about">
                                                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>

        );
    }
}

export default AccountInfoSection;
