import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/LOGO.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-bg">
            <div className="container">
                <nav className="navbar navbar-expand-lg pt-4">
                    <img className="navbar-logo" src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto my-3">
                            <li class="nav-item active">
                                <a class="nav-link" href="#"><Link className="p-4 text-decoration-none" to="/home">Home</Link> <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><Link className="p-4 text-decoration-none" to="/Project">Projects</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><Link className="p-4 text-decoration-none" to="/about">About</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><Link className="p-4 text-decoration-none" to="/blog">Blog</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><Link className="p-4 text-decoration-none" to="/contact">Contact</Link></a>
                            </li>


                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;