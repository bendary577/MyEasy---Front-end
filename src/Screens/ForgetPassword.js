import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ForgetPassword extends Component {
    render() {
        return (
            <div className="forget-password text-center">
                <div className="col-xs-12 col-lg-6 m-auto">
                    <h1 style={{
                        color: '#556a87', fontSize: '30px', fontWeight: 'bold', marginBottom: '25px'
                    }}>Recieve Password</h1>
                    <Form>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Button variant="primary" type="submit">Recieve</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default ForgetPassword;
