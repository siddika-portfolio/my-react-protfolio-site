import React from 'react';
import './Header.css'
import { FaFacebookF, FaLinkedinIn, FaGithubAlt, FaInstagram } from "react-icons/fa";
import Navbar from './Navbar/Navbar';
import protfolioImg from '../../images/Portfolio.png'

const Header = () => {
    return (
        <header className="header-bg">
            <div className="container">
                <Navbar></Navbar>
                <div className=" text-center my-5 pt-5">
                    <div className="banner-img pt-5 ">
                        <img className="img-fluid" src={protfolioImg} alt="" />
                    </div>
                    <div className="header_content mt-3">
                        <h1>I am Siddika Akhter</h1>
                        <h3 className="">Programer | Developer</h3>
                        <div className="banner-des mt-3">
                            <p>I count myself as a hardworking person. To pursue a challenging career in a</p>

                            <p>competitive world where enthusiasm, honesty, hard work and passion will support me to</p>

                            <p>grow myself as well as utilize my knowledge and expertise for</p>

                            <p>professional development in the relevant field.</p>

                            <p>Email: siddika.tas28@gmail.com</p>
                        </div>
                        <div className="header_icons mt-3">
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaLinkedinIn /></a>
                            <a href=""><FaGithubAlt /></a>
                            <a href=""><FaInstagram /></a>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;