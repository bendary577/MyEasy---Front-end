import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact mt-4" id="contact">
                <div className="container text-center">
                    <h1>Contact</h1>
                    <div className="col-xs-12 col-lg-6 m-auto">
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div class="input-group">
                                <textarea class="form-control" rows="3">Content</textarea>
                            </div>
                            <button className="btn btn-primary mt-2 mb-4" type="submit">Sent</button>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

export default Contact;