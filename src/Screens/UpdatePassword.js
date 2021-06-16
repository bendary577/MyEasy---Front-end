import React, { Component } from "react";
import '../../public/css/authenticationpassword.css';

class UpdatePassword extends Component {
    render() {
        return (
            <div class="background">
                <div className=" container d-flex justify-content-center align-items-center h-100 w-100">
                    <div className="">
                        <div class="card">
                            <div class="card-body bg-light">
                                <div className="">
                                    <h1>Update Password</h1>
                                    <form>
                                        <div class="form-group">
                                            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Password" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Confirm Password" />
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary my-4">Submit</button>
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

export default UpdatePassword;
