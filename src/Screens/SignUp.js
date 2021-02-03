import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../../public/css/signup.css";


class Signup extends Component {

    state = {
        firstname:'',
        secondname: '',
        email: '',
        password:'',
        confirmpassword:'',
        phonenumber: '',
        birthday: '',
        specialization: '',
        address: '',
        province: '',
        city:'',
        zipcode:'',
        gender:''
      };

      handleChange = event => {
        this.setState({ firstname : event.target.value,
                        secondname : event.target.value,
                        email : event.target.value,
                        password : event.target.value,
                        confirmpassword : event.target.value,
                        phonenumber : event.target.value,
                        birthday : event.target.value,
                        specialization : event.target.value,
                        address : event.target.value,
                        province: event.target.value,
                        city: event.target.value,
                        zipcode: event.target.value,
                        gender: event.target.value,  
                     });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const user = {
            firstname : this.state.firstname,
            secondname : this.state.secondname,
            email : this.state.email,
            password : this.state.password,
            confirmpassword : this.state.confirmpassword,
            phonenumber : this.state.phonenumber,
            birthday : this.state.birthday,
            specialization: this.state.specialization,
            address: this.state.address,
            province: this.state.province,
            city: this.state.city,
            zipcode: this.state.zipcode,
            gender: this.state.gender
        };
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
              .then(res => {
                    console.log(res);
                    console.log(res.data);
      })
    }

    render() {
        return (
            <div className="signupDiv">
                <div className="signup d-flex justify-content-center align-items-center my-5">
                    <div className="card signupCard w-50 mt-5">

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
                                        <label for="validationfirstname">First name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationfirstname"
                                            name="firstname"
                                            maxLength="25"
                                            autofocus
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please enter a valid name.
                                        </div>
                                        <div class="valid-feedback">
                                            that's a valid name!
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="validationsecondname">Second name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationsecondname"
                                            name="secondname"
                                            maxLength="25"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please enter a valid name.
                                        </div>
                                        <div class="valid-feedback">
                                            that's a valid name!
                                        </div>
                                    </div>
                                </div>

                                {/*--------------------email, password, phone ----------------------------------------- */}

                                <div className="form-group">
                                    <label for="validationemail">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="validationemail"
                                        name="email"
                                        maxLength="100"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid email.
                                    </div>
                                    <div class="valid-feedback">
                                            that's a valid email!
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="validationpassword">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="validationpassword"
                                        name="password"
                                        maxLength="30"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid password.
                                    </div>
                                    <div class="valid-feedback">
                                        that's a valid password!
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="validationconfirmpassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="validationconfirmpassword"
                                        name="password"
                                        maxLength="30"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        passwords don't match!.
                                    </div>
                                    <div class="valid-feedback">
                                        passwords match!
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="validationphonenumber">Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationphonenumber"
                                        name="phone"
                                        maxLength="11"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid phone number.
                                    </div>
                                    <div class="valid-feedback">
                                            that's a valid number!
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="validationbirthdate">Birthdate</label>
                                    <input type="date"  className="form-control" id="validationbirthdate" name="birthday" />
                                    <div className="invalid-feedback">
                                        Please enter a valid bithdate.
                                    </div>
                                    <div class="valid-feedback">
                                        good!
                                    </div>
                                </div>  

                                {/*--------------------- specialization ----------------------------------------------- */}
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label for="validationspecialization">Specialization</label>
                                        <select
                                            name="specialization"
                                            className="form-control browser-default custom-select"
                                            id="validationspecialization"
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
                                    <label for="validationaddress">Address</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="validationaddress"
                                        required
                                    ></input>
                                    <div className="invalid-feedback">
                                        Please enter a valid address.
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label for="validationprovince">Province</label>
                                        <select
                                            name="province"
                                            className="form-control browser-default custom-select"
                                            id="validationprovince"
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
                                        <label for="validationcity">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationcity"
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Please enter a city.
                                        </div>
                                        <div className="valid-feedback">
                                            good!
                                        </div>
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label for="validationzipcode">Zip Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationzipcode"
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
                                    <a href="/profile" className="btn btn-dark btn-block">submit</a>
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
                                        By clicking Register I agree to our{" "}
                                        <Link to="/termsofservice">
                                            terms of service 
                                        </Link>
                                        {" "} and {" "} 
                                        <Link to="/privacypolicy">
                                            privacy policy
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
