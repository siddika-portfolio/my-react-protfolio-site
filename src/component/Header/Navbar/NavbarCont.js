import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/LOGO.png';
import './NavbarCont.css'

const NavbarCont = () => {
    return (
        <div className="nav-bg">
            <div className="container">
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <img className="navbar-logo" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/home" className="nav-item">Home</Nav.Link>
                            <Nav.Link href="/project" className="nav-item">Projects</Nav.Link>
                            <Nav.Link href="/Blog" className="nav-item">Blogs</Nav.Link>
                            <Nav.Link href="/about" className="nav-item">About</Nav.Link>
                            <Nav.Link href="/contact" className="nav-item">Contact</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default NavbarCont;