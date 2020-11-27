import React from 'react';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaLinkedinIn, FaGithubAlt, FaInstagram } from "react-icons/fa";
import Navbar from '../Header/Navbar/Navbar';
import './ContactForm.css'
import Footer from '../Footer/Footer';

const ContactForm = () => {
    return (
        <div className="">
            <div className=" contact-bg py-5">
                <div className="container py-5">
                    <h2 className="text-center pt-4">Contact Me</h2>
                    <div className="form-section my-5 d-flex  pt-5 ">

                        <div className="col-md-5 mr-5">
                            <p>If you want to know more about anything. You can contact with me. You can also give me opinion about my page. My inbox is always open for you. I will try my best to reply all of your message</p>
                            <h6>Rangpur, Bangladesh</h6>
                            <h6>siddika.tas28@gmail.com</h6>
                            <h6>+8801717357028</h6>
                            <div className="header_icons mt-5">
                                <a href="https://www.facebook.com/siddika.akhter.3720/"><FaFacebookF /></a>
                                <a href="https://www.linkedin.com/in/siddiqa-akhter-portfolio/"><FaLinkedinIn /></a>
                                <a href="https://github.com/siddika-portfolio"><FaGithubAlt /></a>
                                <a href=""><FaInstagram /></a>
                            </div>

                        </div>
                        <form className=" col-md-7">
                            <div className="row ">
                                <div className="col-8 form-group">
                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                </div>
                                <div className="col-8 form-group">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                </div>
                                <div className="col-8 form-group">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                </div>
                                <div className="col-8 form-group">
                                    <textarea className="form-control" placeholder="Your Message" name="message"></textarea>
                                </div>
                                <div className="col-8 form-group">
                                    <input type="submit" className="btn" id="navButton" value="Send Message"></input>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default ContactForm;