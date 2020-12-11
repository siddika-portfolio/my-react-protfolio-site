import React from 'react';
import './Header.css'
import { FaFacebookF, FaLinkedinIn, FaGithubAlt, FaInstagram, FaTwitter } from "react-icons/fa";
import Typed from 'react-typed';
import protfolioImg from '../../images/Siddika.png'
import Projects from '../Projects/Projects';


const Header = () => {
    return (
        <header className="">
            <div className="header-bg py-5">
             
                <div className="container">
                    <div className="row pt-5 text-center">
                        <div className="col-md-6">
                            <div className="banner-img pt-5 d-flex justify-content-center">
                                <img className="img-fluid" src={protfolioImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 title-des d-flex align-items-center justify-content-center">
                            <div className="header_content mt-3">
                                <h3>Hi, This is </h3>
                                <h1>SIDDIKA AKHTER</h1>
                                <h2>
                                    <Typed
                                        strings={['MERN Stack Developer', 'Programmer', 'Software Engineer']}
                                        typeSpeed={40}
                                        backSpeed={40}
                                        loop
                                    />
                                </h2>
                                <a className="nav-link mt-4" href="https://drive.google.com/file/d/1s7AGavyifV01JTImVaHGZQQlMh86rl6Y/view?usp=sharing" target="_blank">
                                    <div className="btn btn" id="navButton">Download CV</div>
                                </a>
                                <div className="header_icons mt-3">
                                    <a href="https://www.facebook.com/siddika.akhter.3720/" target="_blank"><FaFacebookF /></a>
                                    <a href="https://www.linkedin.com/in/siddiqa-akhter-portfolio/" target="_blank"><FaLinkedinIn /></a>
                                    <a href="https://github.com/siddika-portfolio" target="_blank"><FaGithubAlt /></a>
                                    <a href="https://www.instagram.com/siddika.ins/" target="_blank"><FaInstagram /></a>
                                    <a href="https://twitter.com/SiddikaAkhter1" target="_blank"><FaTwitter/></a>
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