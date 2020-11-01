import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import './About.css';
import protfolioImg from '../../images/Siddika.png'

const About = () => {
    return (
        <div className="about-bg">
            <div className="container-fluid">
                <Navbar></Navbar>
                <div className="row pt-5 text-center">
                    <div className="col-md-6">
                        <div className="banner-img pt-5 ">
                            <img className="img-fluid" src={protfolioImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 title-des d-flex align-items-center">
                        <div className="header_content mt-3 ">
                            {/* <h2>Hi, This is </h2> */}
                            <h1> about me</h1>
                            {/* <h3> Developer Sensible To FontAnd</h3>
                            */}
                            <div className="banner-des mt-3">
                                <p>I count myself as a hardworking person. To pursue a challenging career in a</p>

                                <p>competitive world where enthusiasm, honesty, hard work and passion will support me to</p>

                                <p>grow myself as well as utilize my knowledge and expertise for</p>

                                <p>professional development in the relevant field.</p>

                                <p className="email-line">Email: siddika.tas28@gmail.com</p>
                                <a className="nav-link mt-4" href="https://drive.google.com/file/d/1s7AGavyifV01JTImVaHGZQQlMh86rl6Y/view?usp=sharing">
                                    <div className="btn btn mb-3" id="navButton">Download CV</div>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default About;