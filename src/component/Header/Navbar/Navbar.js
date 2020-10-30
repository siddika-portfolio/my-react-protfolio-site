import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg fixed-top container">
                <img className="navbar-logo" src={logo} alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto my-3">
                        <Link className="p-4 text-decoration-none" to="/home">Home</Link>

                        <Link className="p-4 text-decoration-none" to="/Project">Projects</Link>

                        <Link className="p-4 text-decoration-none" to="/about">About</Link>

                        <Link className="p-4 text-decoration-none" to="/blog">Blog</Link>

                        <Link className="p-4 text-decoration-none" to="/contact">Contact</Link>

                        <a className="nav-link mt-2" href="https://drive.google.com/file/d/1s7AGavyifV01JTImVaHGZQQlMh86rl6Y/view?usp=sharing">
                            <div className="btn btn mb-3" id="navButton">Download CV</div>
                        </a>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;