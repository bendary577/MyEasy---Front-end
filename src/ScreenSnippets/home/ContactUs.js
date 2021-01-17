import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class ContactUs extends Component {
    render() {
        return (
            <div className="contactus text-center my-5" id="contact">
                <div className="container">
                    <h2 style={{ marginBottom: '25px' }}>Contact Us</h2>
                    <div className="col-xs-12 col-lg-6 m-auto">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="E-mail" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Content" />
                            </Form.Group>

                            <input className="btn btn-dark" type="submit" value="send" style={{
                                width: '30%', borderRadius: '30px'
                            }} />
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;