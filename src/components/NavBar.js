import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const NavBar = () => {
    return (
        <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark" fixed="top">
            <ReactBootStrap.Navbar.Brand href="/">Lynn & Yasmin</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/registry">Registry</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/schedule">Schedule</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/rsvp">RSVP</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/faqs">FAQs</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/watch">Watch Online</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )
}

export default NavBar;