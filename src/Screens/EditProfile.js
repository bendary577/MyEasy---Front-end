
import React, { Component } from "react";
import CustomerAccountNavBar from "../ScreenSnippets/accounts/CustomerAccNavBar";
import "../../public/css/editaccount.css";
import book2 from "../../public/images/book_2.png";
import person from "../../public/images/person_2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";


class EditProfile extends Component {


    render() {

        const iconImgsStyle = {
            width: 230,
            height: 230
        };

        return (
            <div className="parent-div">

                <CustomerAccountNavBar />

                {/*------------------------------ left side bar --------------------------------------------- */}

                <div className="container">

                    <div className="intro-headline d-flex my-5">
                        <FontAwesomeIcon icon={faUserEdit} className=" fa-2x mr-2 mt-1"></FontAwesomeIcon>
                        <h2 className="font-weight-bold">Edit Your Profile</h2>
                    </div>

                    <div className="row">

                        <div className="left-div col-md-12 col-lg-3">
                            <div className="profile-image text-center">
                                <img src={person} class="rounded-circle img img-responsive border border-dark" alt="profile-img" style={iconImgsStyle} />
                                <br />
                                <button type="button" className="btn btn-primary mt-2">Upload Photo</button>
                            </div>

                            <div className="bio mt-4 text-center">
                                <label for="bio">Bio</label>
                                <br />
                                <textarea id="bio" form="editprofile-form" rows="5" cols="30" placeholder="Enter your bio here ...."></textarea>
                            </div>
                        </div>

                        {/*------------------------------ right side bar --------------------------------------------- */}

                        <div className="right-div col-md-12 col-lg-9">
                            <form className="my-5 mx-5" id="editprofile-form">
                                <div className="form-row">
                                    <div className="col">
                                        <div class="form-group">
                                            <label for="firstname">First Name</label>
                                            <input type="text" className="form-control" placeholder="first name" id="firstname" />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div class="form-group">
                                            <label for="secondname">Second Name</label>
                                            <input type="text" className="form-control" placeholder="first name" id="secondname" />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="email">Email </label>
                                    <input type="text" className="form-control" placeholder="first name" id="email" />
                                </div>

                                <div class="form-group">
                                    <label for="password">Password </label>
                                    <input type="password" className="form-control" placeholder="password" id="password" />
                                </div>

                                <div class="form-group">
                                    <label for="confirmpassword">Confirm Password </label>
                                    <input type="password" className="form-control" placeholder="confirm password" id="confirmpassword" />
                                </div>


                                <div class="form-group">
                                    <label for="phone">Phone Number </label>
                                    <input type="text" className="form-control" placeholder="phone number" id="phone" />
                                </div>

                                <div class="form-group">
                                    <label for="zipcode">ZIP Code </label>
                                    <input type="text" className="form-control" placeholder="zip code" id="zipcode" />
                                </div>

                                <div className="text-center">
                                    <button type="submit" class="btn btn-primary">Save</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default EditProfile;
