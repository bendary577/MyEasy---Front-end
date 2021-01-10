import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateStore extends Component {
    render() {
        return (
            <div className="create-store">
                <h1 className="text-center" style={{
                    color: '#556a87', fontSize: '30px', fontWeight: 'bold', marginBottom: '25px'
                }}>Create Your Store</h1>
                <div className="col-sm-12 col-lg-6 m-auto">
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Store Name" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Specialization</Form.Label>
                            <Form.Control as="select" defaultValue="">
                                <option>--Select--</option>
                                <option>Electric</option>
                                <option>Laptop</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">Create</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default CreateStore;