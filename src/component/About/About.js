import React from 'react';
import './About.css';
import protfolioImg from '../../images/Portfolio.png'


const About = () => {
    return (
        <section className="about-bg py-5">
            <div className="container-fluid">
                <div className="row pt-5 text-center">
                    <div className="col-md-6">
                        <div className="banner-img pt-5 ">
                            <img className="img-fluid" src={protfolioImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 title-des d-flex align-items-center">
                        <div className="header_content mt-3 ">
                            <h1> about me</h1>
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
           

        </section>
    );
};

export default About;


