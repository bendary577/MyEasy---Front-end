import React, { Component } from 'react';
import { Form, Container, Button, Col, Row } from 'react-bootstrap';

class UploadItem extends Component {
    render() {
        return (
            <div className="contact pt-4 pb-4" id="contact">
                <Container>
                    <Row>
                        <Col xs={12} style={{ textAlign: 'center' }}>
                            <h1>Upload New Item</h1>
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
                                    <Form.Control type="number" placeholder="Avilable Number" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" placeholder="Description" rows={3} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control as="select">
                                        <option>Large select</option>
                                    </Form.Control>
                                </Form.Group>

                                <Col xs={12} className="text-center">
                                    <Button variant="primary" type="submit">
                                        Upload
                                </Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default UploadItem;