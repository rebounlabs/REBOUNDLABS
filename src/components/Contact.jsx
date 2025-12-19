import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    // REPLACE 'YOUR_FORM_ID' WITH YOUR ACTUAL FORMSPREE ID FROM https://formspree.io/
    const [state, handleSubmit] = useForm("mwveezgk");

    if (state.succeeded) {
        return (
            <section id="contact" className="section-padding contact-section">
                <div className="container contact-container">
                    <div className="contact-info">
                        <h2 className="section-title">Contact Us</h2>
                        <h3 className="section-main-heading">Let's Build Something Great.</h3>
                        <p className="contact-desc">
                            Ready to start your next project? Get in touch with us today for a free consultation.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail className="contact-icon" />
                                <a href="mailto:labs.rebound@gmail.com">labs.rebound@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <Phone className="contact-icon" />
                                <a href="tel:+918129829294">+91 8129829294</a>
                            </div>
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <span>Maradu, Kochi, Kerala</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form success-message animate-fade-in" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h3>Message Sent!</h3>
                        <p>Thank you for reaching out. We'll get back to you shortly.</p>
                        <button
                            className="btn btn-outline"
                            style={{ marginTop: '2rem' }}
                            onClick={() => window.location.reload()}
                        >
                            Send Another Message
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="section-padding contact-section">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Contact Us</h2>
                    <h3 className="section-main-heading">Let's Build Something Great.</h3>
                    <p className="contact-desc">
                        Ready to start your next project? Get in touch with us today for a free consultation.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <Mail className="contact-icon" />
                            <a href="mailto:labs.rebound@gmail.com">labs.rebound@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <Phone className="contact-icon" />
                            <a href="tel:+918129829294">+91 8129829294</a>
                        </div>
                        <div className="contact-item">
                            <MapPin className="contact-icon" />
                            <span>Maradu, Kochi, Kerala</span>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            required
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Tell us about your project..."
                            required
                        ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary full-width" disabled={state.submitting}>
                        {state.submitting ? 'Sending...' : 'Send Message'} <Send size={18} style={{ marginLeft: '8px' }} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
