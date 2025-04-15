import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faEnvelope, 
    faPhone, 
    faLocationDot,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

import {
    faGithub,
    faLinkedin,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';


// css file
import './style.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="contact-page">
            <div className="background-container">
                <div className="gradient-overlay"></div>
                <div className="particles-container">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            '--delay': `${i * 0.2}s`,
                            '--size': `${Math.random() * 3 + 1}px`,
                            '--x': `${Math.random() * 100}%`,
                            '--y': `${Math.random() * 100}%`,
                        }}></div>
                    ))}
                </div>
            </div>

            <div className="contact-content">
                <div className="contact-header">
                    <h1>Get in Touch</h1>
                    <p>Let's work together to bring your ideas to life</p>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon="envelope" />
                            </div>
                            <h3>Email</h3>
                            <p>your.email@example.com</p>
                        </div>
                        <div className="info-card">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon="phone" />
                            </div>
                            <h3>Phone</h3>
                            <p>+1 234 567 890</p>
                        </div>
                        <div className="info-card">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon="location-dot" />
                            </div>
                            <h3>Location</h3>
                            <p>City, Country</p>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    className={focusedField === 'name' ? 'focused' : ''}
                                />
                                <label className={formData.name ? 'active' : ''}>Name</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    className={focusedField === 'email' ? 'focused' : ''}
                                />
                                <label className={formData.email ? 'active' : ''}>Email</label>
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('subject')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    className={focusedField === 'subject' ? 'focused' : ''}
                                />
                                <label className={formData.subject ? 'active' : ''}>Subject</label>
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    className={focusedField === 'message' ? 'focused' : ''}
                                ></textarea>
                                <label className={formData.message ? 'active' : ''}>Message</label>
                            </div>

                            <button type="submit" className="submit-btn">
                                <span>Send Message</span>
                                <FontAwesomeIcon icon="paper-plane" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

