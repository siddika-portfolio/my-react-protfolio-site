import React from 'react';
import './Header.css'
import { FaFacebookF, FaLinkedinIn, FaGithubAlt, FaInstagram } from "react-icons/fa";
import Navbar from './Navbar/Navbar';
import protfolioImg from '../../images/Siddika.png'

const Header = () => {
    return (
        <header className="header-bg">
            <div className="container">
                <Navbar></Navbar>
                <div className="row pt-5 text-center">
                    <div className="col-md-6">
                        <div className="banner-img pt-5 ">
                            <img className="img-fluid" src={protfolioImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 title-des d-flex align-items-center">
                        <div className="header_content mt-3 align-items-center">
                            <h2>Hi, This is </h2>
                            <h1> Siddika Akhter</h1>
                            <h3> Developer Sensible To FontAnd</h3>
                            <a className="nav-link mt-4" href="https://drive.google.com/file/d/1s7AGavyifV01JTImVaHGZQQlMh86rl6Y/view?usp=sharing">
                                <div className="btn btn mb-3" id="navButton">Download CV</div>
                            </a>
                            <div className="header_icons mt-3">
                                <a href=""><FaFacebookF /></a>
                                <a href=""><FaLinkedinIn /></a>
                                <a href=""><FaGithubAlt /></a>
                                <a href=""><FaInstagram /></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </header>
    );
};

export default Header;