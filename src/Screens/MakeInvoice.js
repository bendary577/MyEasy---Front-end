import React, { Component } from 'react';
import { Form, Container, Button, Col, Row } from 'react-bootstrap';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import createStore from "../../public/images/Store/create-invoice.png";

class MakeInvoice extends Component {

    render() {
        const imageStyle = {
            width:400,
            height:400
        };

        return (
            <div className="">
                <AccNavbar />
                <div className="contact pt-4 pb-4 my-5" id="contact">
                    <Container>
                        {/**----------------------------header ------------------------------------ */}
                        <div className="header">
                            <h1 className="text-center" style={{
                                color: '#556a87', fontSize: '30px', fontWeight: 'bold', marginBottom: '25px'
                            }}>Create Your Invoice now!</h1>
                        </div>

                        {/**---------------------------- image ------------------------------------ */}
                        <Row>
                            <Col xs={12} lg={6}>
                                <img className="" src={createStore} style={imageStyle} alt="create store" />
                            </Col>

                        {/**----------------------------form ------------------------------------ */}
                            <Col xs={12} lg={6} className="m-auto">
                                <Form>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="text" placeholder="Name" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="number" placeholder="Price" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Date From:</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Date End:</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>

                                    <Col xs={12} className="text-center">
                                        <Button variant="primary" type="submit">
                                            Sent By
                                    </Button>
                                    </Col>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default MakeInvoice;