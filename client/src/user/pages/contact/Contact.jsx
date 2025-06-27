import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query"
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

// Add icons to library
library.add(faEnvelope, faPhone, faLocationDot, faPaperPlane, faGithub, faLinkedin, faTwitter, faInstagram);

// css file
import './style.css';
// api 
// const message = require('../../../api/message')
import message from '../../../api/message'
import contactInfo from '../../../api/contactInfo'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [focusedField, setFocusedField] = useState(null);


    /* get contact info */
    const { data: contact } = useQuery({
        queryKey: ['contact-info'],
        queryFn: async () => await contactInfo.getData()
    })


    useEffect(() => {
        const elements = document.querySelectorAll('.info-card, .contact-form-container');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => observer.observe(element));
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('submited')
        const res = await message.post(formData)
        if (res.status == 200) {
            alert(res.data.msg)
        }
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
                        <div className="info-card d-flex gap-3 align-items-center">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon="envelope" />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>{contact?.email}</p>
                            </div>
                        </div>
                        <div className="info-card d-flex gap-3 align-items-center">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon="phone" />
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>{contact?.phone}</p>
                            </div>
                        </div>
                        <div className="info-card d-flex gap-3 align-items-center ">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon="location-dot" />
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>{contact?.location}</p>
                            </div>
                        </div>

                        <div className="social-links center">
                            <a href={contact?.links[0].link} target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                            <a href={contact?.links[1].link} target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container" >
                        {/* style={{ height: "fit-content" }} */}
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
                                    placeholder=" "
                                    className={focusedField === 'name' ? 'focused' : ''}
                                />
                                <label>Name</label>
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
                                    placeholder=" "
                                    className={focusedField === 'email' ? 'focused' : ''}
                                />
                                <label>Email</label>
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
                                    placeholder=" "
                                    className={focusedField === 'subject' ? 'focused' : ''}
                                />
                                <label>Subject</label>
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    placeholder=" "
                                    className={focusedField === 'message' ? 'focused' : ''}
                                ></textarea>
                                <label>Message</label>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message
                                <FontAwesomeIcon icon="paper-plane" className="ms-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

