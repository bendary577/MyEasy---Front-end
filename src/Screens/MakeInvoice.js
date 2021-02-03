import React, { Component } from 'react';
import { Form, Container, Button, Col, Row } from 'react-bootstrap';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import Footer from '../ScreenSnippets/accounts/Footer';

class MakeInvoice extends Component {
    render() {
        return (
            <div className="contact pt-4 pb-4" id="contact">
                <AccNavbar />
                <Container className="my-5">
                    <Row>
                        <Col xs={12} style={{ textAlign: 'center' }}>
                            <h1>Make Invoice</h1>
                        </Col>
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
                <Footer />
            </div>
        )
    }
}

export default MakeInvoice;