import React from 'react';
import './Form.css'; // For the vanilla CSS approach

const ContactForm = () => {
    return (
        <div className="contact-form-container py-8 px-4 md:px-8">
            <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
            <form className="space-y-4 max-w-lg mx-auto" action="#" method="POST">
                <div>
                    <label htmlFor="name" className="block font-medium mb-1">Full Name</label>
                    <input type="text" id="name" name="name" className="input-style w-full" required />
                </div>
                <div>
                    <label htmlFor="email" className="block font-medium mb-1">Email Address</label>
                    <input type="email" id="email" name="email" className="input-style w-full" required />
                </div>
                <div>
                    <label htmlFor="message" className="block font-medium mb-1">Message</label>
                    <textarea id="message" name="message" rows="4" className="input-style w-full" required></textarea>
                </div>
                <button type="submit" className="submit-button w-full">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
