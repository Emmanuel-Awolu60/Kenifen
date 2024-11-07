import React from 'react';
import './Form.css';
import { FaAddressCard } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
const Form = () => {
    return (
        <div>
            {/* Contact Us Section */}
            <section id="contact" className="container contact my-generic">
                <div className="my-generic text-center" id="portfolio">
                    <h2 className="mb-3 mt-5 aquatico-regular">Contact Us</h2>
                    <p className="roboto-regular text-center lead">
                        Got questions or need assistance? Our team is here to help. Contact us
                        now to begin your style journey with confidence.
                    </p>
                </div>

                {/* <div className="contact-card row">
                    <div className="col-lg-6 hvr-float">
                        <div className="info-box mb-4 border border-1 rounded-5">
                            <FaAddressCard className='bi bi-map' />
                            <h3 className="text-info aquatico-regular">Our Address</h3>
                            <p className="roboto-medium">Lagos, Nigeria</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 hvr-float">
                        <div className="info-box mb-4 border border-1 rounded-5">
                            <MdMarkEmailRead className='bi bi-map' />
                            <h3 className="text-info aquatico-regular">Email Us</h3>
                            <p className="roboto-medium">contact@dejiandkola.com</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 hvr-float">
                        <div className="info-box mb-4 border border-1 rounded-5">
                            <IoIosPhonePortrait className='bi bi-map' />
                            <h3 className="text-info aquatico-regular">Call Us</h3>
                            <p className="roboto-medium">+2348179435662</p>
                        </div>
                    </div>
                </div> */}

                {/* <div className=" contact-card row d-flex justify-content-between">
                    <div className="col-lg-6 hvr-float">
                        <div className="info-box mb-4 border border-1 rounded-5">
                            <FaAddressCard className="bi bi-map" />
                            <h3 className="text-info aquatico-regular">Our Address</h3>
                            <p className="roboto-medium">Lagos, Nigeria</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 hvr-float">
                        <div className="info-box mb-4 border border-1 rounded-5">
                            <MdMarkEmailRead className="bi bi-envelope" />
                            <h3 className="text-info aquatico-regular">Email Us</h3>
                            <p className="roboto-medium">contact@dejiandkola.com</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 hvr-float">
                        <div className="info-box mb-4 border border-1 rounded-5">
                            <IoIosPhonePortrait className="bi bi-phone" />
                            <h3 className="text-info aquatico-regular">Call Us</h3>
                            <p className="roboto-medium">+2348179435662</p>
                        </div>
                    </div>
                </div> */}

                <div className="cont row">
                    <div className="col-lg-6 hvr-float">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63419.12671569701!2d3.3748542490966615!3d6.5600781346925485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1694476230317!5m2!1sen!2sng"
                            className="mb-4 mb-lg-0"
                            frameBorder="0"
                            style={{ border: 0, width: '100%', height: '384px' }}
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="col-lg-6">
                        <form
                            action="forms/contact.php"
                            method="post"
                            role="form"
                            className="php-email-form border border-1 rounded-5"
                        >
                            <div className="row">
                                <div className="col form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control rounded-5 border border-1 outline-none roboto-regular"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="col form-group">
                                    <input
                                        type="email"
                                        className="form-control rounded-5 border border-1 outline-none roboto-regular"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control rounded-5 border border-1 outline-none roboto-regular"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control rounded-5 border border-1 outline-none roboto-regular"
                                    name="message"
                                    rows="5"
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">
                                    Your message has been sent. Thank you!
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-outline-info hvr-sweep-to-top btn-lg my-3 roboto-medium"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer bg-dark text-white py-4">
                <div className="container text-center">
                    <p className="mb-1 roboto-medium">&copy; 2024 Deji & Kola. All rights reserved.</p>
                    <p className="small">
                        Follow us on
                        <a href="#" className="text-info mx-2">Facebook</a> |
                        <a href="#" className="text-info mx-2">Twitter</a> |
                        <a href="#" className="text-info mx-2">Instagram</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Form;
