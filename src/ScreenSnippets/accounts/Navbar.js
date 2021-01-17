import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <div className="container">
                    <Navbar.Brand href="/">MY EASY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/#services">SERVICES</Nav.Link>
                            <Nav.Link href="/#about">ABOUT</Nav.Link>
                            <Nav.Link href="/#contact">CONTACT</Nav.Link>
                            <Nav.Link href="/#what">WHAT CLIENT SAY</Nav.Link>
                            <Nav.Link href="/signin">JOIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}

export default NavBar;