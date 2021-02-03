
import React, { Component } from "react";
import SignInFrom from "../ScreenSnippets/authentication/SignInForm"
import app6 from "../../public/images/Home/app6.png";


class SigninPage extends Component {

    render() {

        const imageStyle={
            width:475,
            height:475
        };

        return (
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-md-4 mt-5">
                            <img src={app6} style={imageStyle} alt="" />
                        </div>
                        <div className="col-xs-6 col-md-8">
                            <SignInFrom />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default SigninPage;
