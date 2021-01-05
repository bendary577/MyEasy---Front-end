
import React, { Component } from "react";
import CustomerAccountNavBar from "../ScreenSnippets/CustomerAccNavBar";
import "../../public/css/makecomplaint.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";


class MakeComplaint extends Component {

    render() {

        return (
            <div className="parent-div">

                <CustomerAccountNavBar />

                {/*------------------------------ intro --------------------------------------------- */}

                <div className="container">
                    <div className="intro-headline d-flex my-5">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="fa-2x mr-2 "></FontAwesomeIcon>
                        <h2 className="font-weight-bold">Make Complaint</h2>
                    </div>

                    <div className="backgroundDiv ml-0 w-100 rounded">
                        <h3 className="ml-2 mt-4">We're feeling so sorry for you &#128532;</h3>
                        <h4 className="ml-2 mt-3">We will work very fast to solve it</h4>
                    </div>


                    {/*------------------------------ complaint text --------------------------------------------- */}

                    <div className="complaint mt-4">
                        <label for="complaint">please describe your complaint breifly</label>
                        <br />
                        <textarea id="complaint" form="editprofile-form" rows="5" cols="100" placeholder="Complaint description ..."></textarea>
                    </div>

                    <div className="browseDocuments">
                        <h6>please provide us with any prooving documents</h6>
                        <input type="file" id="file" name="file" />
                    </div>

                    <div className="text-center my-5">
                        <button type="submit" class="btn btn-lg btn-warning">Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MakeComplaint;
