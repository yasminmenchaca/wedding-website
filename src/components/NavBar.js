import React from 'react';
import {Link} from 'react-router-dom';
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
                    <Link to="/">
                        <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
                    </Link>

                    <Link to="/registry">
                        <ReactBootStrap.Nav.Link href="/registry">Registry</ReactBootStrap.Nav.Link>
                    </Link>

                    <Link to="/schedule">
                        <ReactBootStrap.Nav.Link href="/schedule">Schedule</ReactBootStrap.Nav.Link>
                    </Link>

                    <Link to="/rsvp">
                        <ReactBootStrap.Nav.Link href="/rsvp">RSVP</ReactBootStrap.Nav.Link>
                    </Link>

                    <Link to="/faqs">
                        <ReactBootStrap.Nav.Link href="/faqs">FAQs</ReactBootStrap.Nav.Link>
                    </Link>

                    <Link to="/watch">
                        <ReactBootStrap.Nav.Link href="/watch">Watch Online</ReactBootStrap.Nav.Link>
                    </Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )
}

export default NavBar;