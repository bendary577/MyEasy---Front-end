import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class ContactUs extends Component {
    render() {
        return (
            <div className="contactus text-center" id="contact">
                <div className="container">
                    <h1 style={{
                        color: '#556a87', fontSize: '30px', fontWeight: 'bold', marginBottom: '25px'
                    }}>Contact Us</h1>
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

                            <input className="btn" type="submit" value="Sent" style={{
                                width: '30%', borderRadius: '30px', backgroundColor: '#00AAFE',
                                color: '#fff'
                            }} />
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;