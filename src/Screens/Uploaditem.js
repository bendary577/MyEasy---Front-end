import React, { Component } from 'react';
import { Form, Container, Button, Col, Row } from 'react-bootstrap';
import AccNavbar from '../ScreenSnippets/accounts/AccNavbar';
import Upload from "../../public/icons/stores/uploaditem.png";

class UploadItem extends Component {
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
                            }}>Upload Your Item Now!</h1>
                        </div>

                    <Row>

                    {/**----------------------------image ------------------------------------ */}

                        <Col xs={12} lg={6}>
                                <img className="" src={Upload} style={imageStyle} alt="create store" />
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
        </div>
        )
    }
}

export default UploadItem;