import React from 'react';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaLinkedinIn, FaGithubAlt, FaInstagram,FaMapMarkerAlt, FaPhone, FaEnvelope, FaTwitter} from "react-icons/fa";

import './ContactForm.css'


const ContactForm = () => {
    return (
        <div className="">
            <div className=" contact-bg py-5">
                <div className="container py-5">
                    <h2 className="text-center pt-4">Contact Me</h2>
                    <div className="form-section my-5 d-flex  pt-5 ">

                        <div className="contact-text col-md-5 mr-5">
                            <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                            <h6><span><FaMapMarkerAlt/></span>Rangpur, Bangladesh</h6>
                            <h6><span><FaPhone/></span>siddika.tas28@gmail.com</h6>
                            <h6><span><FaEnvelope/></span>+8801717357028</h6>
                            <div className="header_icons mt-5">
                                <a href="https://www.facebook.com/siddika.akhter.3720/" target="_blank"><FaFacebookF /></a>
                                <a href="https://www.linkedin.com/in/siddiqa-akhter-portfolio/" target="_blank"><FaLinkedinIn /></a>
                                <a href="https://github.com/siddika-portfolio" target="_blank"><FaGithubAlt /></a>
                                <a href="https://www.instagram.com/siddika.ins/" target="_blank"><FaInstagram /></a>
                                <a href="https://twitter.com/SiddikaAkhter1" target="_blank"><FaTwitter/></a>
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