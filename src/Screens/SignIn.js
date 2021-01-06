import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faGoogle,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "../../public/css/signin.css";

class SignIn extends Component {
    render() {
        return (
            <div className="loginDiv">
                <div className="login d-flex justify-content-center align-items-center my-5">
                    <div className="card loginCard w-50 mt-5">
                        {/*--------------------- card header ------------------------------------------------ */}

                        <div className="card-header bg-dark text-body text-center font-weight-bold py-4">
                            <h2 className="text-white">
                                <strong>Sign in</strong>
                            </h2>
                        </div>

                        {/*--------------------- card body ------------------------------------------------ */}

                        <div className="card-body">
                            <form className="needs-validation" method="post" novalidate>
                                {/*--------------------email, password  ----------------------------------------- */}

                                <div className="form-group">
                                    <input
                                        type="eamil"
                                        placeholder="email"
                                        className="form-control"
                                        name="email"
                                        maxLength="100"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid email.
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="form-control"
                                        name="password"
                                        maxLength="30"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid password.
                                    </div>
                                </div>

                                {/*---------------------remember & forgot password  ----------------------------------------- */}

                                <div className="d-flex justify-content-around">
                                    <div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="inlineCheckbox1"
                                                value="option1"
                                            ></input>
                                            <label
                                                className="form-check-label"
                                                for="inlineCheckbox1"
                                            >
                                                remember me
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="form-group">
                                            <p>
                                                <b>
                                                    <u>
                                                        <Link to="/ForgotPassword">
                                                            forgot my password
                                                        </Link>
                                                    </u>
                                                </b>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/*---------------------login button ----------------------------------------- */}

                                <div className="form-group mt-4">
                                    <input
                                        className="btn btn-primary btn-block form-control"
                                        type="submit"
                                        value="login"
                                    ></input>
                                </div>

                                {/*--------------------- or register section ----------------------------------------- */}

                                <div className="form-group">
                                    <div className="text-center">
                                        <p>
                                            {" "}
                                            Not a member?{" "}
                                            <b>
                                                <Link to="/signup">
                                                    Register
                                                </Link>
                                            </b>{" "}
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <p> or login with </p>
                                    </div>

                                    <div className="form-row d-flex align-items-center justify-content-center">
                                        <a
                                            type="button"
                                            className="btn-floating btn-lg"
                                        >
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faFacebook}
                                                />
                                            </i>
                                        </a>

                                        <a
                                            type="button"
                                            className="btn-floating btn-lg"
                                        >
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faGoogle}
                                                />
                                            </i>
                                        </a>

                                        <a
                                            type="button"
                                            className="btn-floating btn-lg"
                                        >
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faTwitter}
                                                />
                                            </i>
                                        </a>

                                        <a
                                            type="button"
                                            className="btn-floating btn-lg"
                                        >
                                            <i>
                                                <FontAwesomeIcon
                                                    icon={faLinkedin}
                                                />
                                            </i>
                                        </a>
                                    </div>
                                </div>

                                {/*--------------------- end form ----------------------------------------- */}
                            </form>
                        </div>
                    </div>

                    {/*--------------------- end card ----------------------------------------- */}
                </div>
            </div>
            
        );
    }
}

export default SignIn;
