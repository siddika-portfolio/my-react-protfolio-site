import React from 'react';
import './Header.css'
import { FaFacebookF, FaLinkedinIn, FaGithubAlt, FaInstagram } from "react-icons/fa";
import Navbar from './Navbar/Navbar';
import protfolioImg from '../../images/Siddika.png'
import Footer from '../Footer/Footer';

const Header = () => {
    return (
        <header className="">
            <div className="header-bg py-5">
                {/* <Navbar></Navbar> */}
                <div className="container">
                    <div className="row pt-5 text-center">
                        <div className="col-md-6">
                            <div className="banner-img pt-5 d-flex justify-content-center">
                                <img className="img-fluid" src={protfolioImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 title-des d-flex align-items-center justify-content-center">
                            <div className="header_content mt-3">
                                <h2>Hi, This is </h2>
                                <h2 className="amimated">
                                    <span className="back">
                                        <span>S</span>
                                        <span>I</span>
                                        <span>D</span>
                                        <span>D</span>
                                        <span>I</span>
                                        <span>K</span>
                                        <span>A</span>
                                    </span>
                                </h2>
                                <h3> Developer Sensible To FontAnd</h3>
                                <a className="nav-link mt-4" href="https://drive.google.com/file/d/1s7AGavyifV01JTImVaHGZQQlMh86rl6Y/view?usp=sharing">
                                    <div className="btn btn" id="navButton">Download CV</div>
                                </a>
                                <div className="header_icons mt-3">
                                    <a href="https://www.facebook.com/siddika.akhter.3720/"><FaFacebookF /></a>
                                    <a href="https://www.linkedin.com/in/siddiqa-akhter-portfolio/"><FaLinkedinIn /></a>
                                    <a href="https://github.com/siddika-portfolio"><FaGithubAlt /></a>
                                    <a href=""><FaInstagram /></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;