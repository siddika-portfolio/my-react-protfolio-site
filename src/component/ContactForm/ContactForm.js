import React from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Header/Navbar/Navbar';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className="contact-bg">
            <div className="container">
                <Navbar></Navbar>
                <div className="form-section my-5 pt-5">
                    <form className="mt-5 pt-5">
                        <div className="row pt-5 mx-auto">
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
                                <input type="submit" className="btn btn-primary" value="Send Message"></input>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;