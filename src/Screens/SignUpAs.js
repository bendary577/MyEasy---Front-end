
import React, { Component } from "react";
import "../../public/css/signupas.css";
import book1 from "../../public/images/book_1.png";
import book2 from "../../public/images/book_2.png";
import book3 from "../../public/images/book_3.png";


class SignUpAs extends Component {
    render() {

        const iconImgsStyle = {
            width: 300,
            height: 300
        };

        return (
            <div className="registerAs">
                <div class="jumbotron">
                    <h1>My Easy Registration</h1>
                    <h2>Thanks for visiting us...</h2>
                </div>

                <div className="headline ">
                    <h2 className="my-4">Would you like to register as</h2>
                </div>

                {/*-------------------------------------- controls------------------------------------*/}

                <div className="buttons">
                    <div className="container">
                        <div className="row">

                            {/*---------------------------- card1-----------------------------*/}

                            <div className="col-sm-12 col-md-4 mb-2">
                                <div class="card w-100 m-0">
                                    <img
                                        src={book1}
                                        alt="Logo1"
                                        calssName="img img-responsive"
                                        style={iconImgsStyle}
                                    />
                                    <div className="card-body">
                                        <a class="btn btn-primary" href="/signup" role="button">Customer</a>
                                    </div>
                                </div>
                            </div>

                            {/*---------------------------- card2-----------------------------*/}

                            <div className="col-sm-12 col-md-4 mb-2">
                                <div className="card w-100 m-0">
                                    <img
                                        src={book2}
                                        alt="Logo1"
                                        calssName="img img-responsive"
                                        style={iconImgsStyle}
                                    />
                                    <div className="card-body">
                                        <a class="btn btn-warning" href="/signup" role="button">Individual Seller</a>
                                    </div>
                                </div>
                            </div>


                            {/*---------------------------- card3-----------------------------*/}

                            <div className="col-sm-12 col-md-4 mb-2">
                                <div claclassNamess="card w-100 m-0">
                                    <img
                                        src={book3}
                                        alt="Logo1"
                                        calssName="img img-responsive"
                                        style={iconImgsStyle}
                                    />
                                    <div className="card-body">
                                        <a class="btn btn-dark" href="/signup" role="button">Compnay</a>
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

export default SignUpAs;
