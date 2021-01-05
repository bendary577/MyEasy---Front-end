import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../public/css/signup.css";


class Signup extends Component {
    render() {
        return (
            <div className="signupDiv">
                <div className="signup">
                    <div className="card signupCard">
                        {/*--------------------- card header ------------------------------------------------ */}

                        <div className="card-header bg-dark text-body text-center font-weight-bold py-4">
                            <h2 className="text-white">
                                <strong>Signup as an individual seller</strong>
                            </h2>
                        </div>

                        {/*--------------------- card body ------------------------------------------------ */}

                        <div className="card-body">
                            <form
                                className="needs-validation"
                                method="post"
                                novalidate
                            >
                                {/*---------------------name ------------------------------------------------ */}

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            placeholder="first name"
                                            className="form-control"
                                            name="firstName"
                                            maxLength="25"
                                            autofocus
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please enter a valid name.
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            placeholder="second name"
                                            className="form-control"
                                            name="secondName"
                                            maxLength="25"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please enter a valid name.
                                        </div>
                                    </div>
                                </div>

                                {/*--------------------email, password, phone ----------------------------------------- */}

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

                                <div className="form-group">
                                    <input
                                        type="password"
                                        placeholder="confirm password"
                                        className="form-control"
                                        name="password"
                                        maxLength="30"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid password.
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="phone number"
                                        className="form-control"
                                        name="phoneNUmber"
                                        maxLength="11"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid phone number.
                                    </div>
                                </div>

                                {/*--------------------- specialization ----------------------------------------------- */}
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <select
                                            name="specialization"
                                            className="form-control browser-default custom-select"
                                            required
                                        >
                                            <option value="" disabled>
                                                {" "}
                                                specialization{" "}
                                            </option>
                                            <option value="1" selected>
                                                {" "}
                                                Electronic Devices{" "}
                                            </option>
                                            <option value="2"> Electronic Devices </option>
                                            <option value="3"> Electronic Devices </option>
                                            <option value="4"> Electronic Devices </option>
                                            <option value="5"> Electronic Devices </option>
                                            <option value="6"> Electronic Devices </option>
                                            <option value="7"> Electronic Devices </option>
                                            <option value="8"> Electronic Devices </option>
                                            <option value="9"> Electronic Devices </option>
                                            <option value="10"> Electronic Devices </option>
                                            <option value="11"> Electronic Devices </option>
                                            <option value="12"> Electronic Devices </option>
                                            <option value="13"> Electronic Devices </option>
                                            <option value="14"> Electronic Devices </option>
                                            <option value="15"> Electronic Devices </option>
                                            <option value="16"> Electronic Devices </option>
                                            <option value="17"> Electronic Devices </option>
                                            <option value="18"> Electronic Devices </option>
                                            <option value="19"> Electronic Devices </option>
                                            <option value="20"> Electronic Devices </option>
                                        </select>
                                    </div>
                                </div>

                                {/*---------------------address ----------------------------------------------- */}

                                <div className="form-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputAddress"
                                        placeholder="1234 Main St"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid address.
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <select
                                            name="province"
                                            className="form-control browser-default custom-select"
                                            required
                                        >
                                            <option value="" disabled>
                                                {" "}
                                                province{" "}
                                            </option>
                                            <option value="1" selected>
                                                {" "}
                                                Cairo{" "}
                                            </option>
                                            <option value="2"> Cairo </option>
                                            <option value="3"> Cairo </option>
                                            <option value="4"> Cairo </option>
                                            <option value="5"> Cairo </option>
                                            <option value="6"> Cairo </option>
                                            <option value="7"> Cairo </option>
                                            <option value="8"> Cairo </option>
                                            <option value="9"> Cairo </option>
                                            <option value="10"> Cairo </option>
                                            <option value="11"> Cairo </option>
                                            <option value="12"> Cairo </option>
                                            <option value="13"> Cairo </option>
                                            <option value="14"> Cairo </option>
                                            <option value="15"> Cairo </option>
                                            <option value="16"> Cairo </option>
                                            <option value="17"> Cairo </option>
                                            <option value="18"> Cairo </option>
                                            <option value="19"> Cairo </option>
                                            <option value="20"> Cairo </option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-4">
                                        <input
                                            type="text"
                                            placeholder="city"
                                            className="form-control"
                                            id="inputCity"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please enter a city.
                                        </div>
                                    </div>

                                    <div className="form-group col-md-4">
                                        <input
                                            type="text"
                                            placeholder="ZIP Code"
                                            className="form-control"
                                            id="inputZip"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please enter a zip code.
                                        </div>
                                    </div>
                                </div>

                                {/*---------------------radio button ----------------------------------------- */}

                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input "
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="male"
                                        checked
                                    ></input>
                                    <label
                                        className="form-check-label"
                                        for="male"
                                    >
                                        Male
                                    </label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="female"
                                    ></input>
                                    <label
                                        className="form-check-label"
                                        for="female"
                                    >
                                        Female
                                    </label>
                                </div>

                                {/*---------------------submit button ----------------------------------------- */}

                                <div className="form-group mt-4">
                                    <input
                                        className="btn btn-success btn-block form-control"
                                        type="submit"
                                        value="Submit"
                                    ></input>
                                </div>

                                {/*---------------------login text ----------------------------------------- */}

                                <div className="text-center">
                                    <p>
                                        {" "}
                                        already have an account ?{" "}
                                        <b>
                                            <u>
                                                <Link to="/signin">log in</Link>
                                            </u>
                                        </b>
                                    </p>
                                </div>

                                <div className="text-center">
                                    <p>
                                        {" "}
                                        By clicking Sign up you agree to our{" "}
                                        <Link to="/termsofservice">
                                            terms of service
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
