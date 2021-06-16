import React, { Component } from "react";
import '../../public/css/authenticationpassword.css';

class ForgotPasswordConfirmation extends Component {
    render() {
        return (
            <div class="background-2">
                <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="">
                        <div class="card">
                            <div class="card-body bg-light">
                                <div className="">
                                    <h1>Confirm Code</h1>
                                    <h5 class="my-3">please write the code we sent to your email</h5>
                                    <form>
                                        <div class="form-group">
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter code" />
                                            <div class="text-center">
                                                <button type="submit" class="btn btn-primary my-4">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPasswordConfirmation;
