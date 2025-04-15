import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faCode, 
    faPalette, 
    faDatabase, 
    faServer, 
    faMobile, 
    faGlobe 
} from '@fortawesome/free-solid-svg-icons';
import './style.css';

const About = () => {
    return (
        <div className="about-page">
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
            
            <div className="about-content">
                <div className="profile-section">
                    <div className="profile-card">
                        <div className="profile-image">
                            <div className="image-container">
                                <img src="/path-to-your-image.jpg" alt="Profile" />
                                <div className="image-overlay"></div>
                            </div>
                        </div>
                        <div className="profile-info">
                            <h2>About Me</h2>
                            <p className="tagline">Full Stack Developer & Designer</p>
                            <p className="description">
                                I'm a passionate developer with expertise in creating modern web applications.
                                My focus is on building scalable, efficient, and user-friendly solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="skills-section">
                    <h3>Technical Skills</h3>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <div className="skill-icon">
                                <FontAwesomeIcon icon="code" />
                            </div>
                            <h4>Frontend</h4>
                            <ul>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <div className="skill-icon">
                                <FontAwesomeIcon icon="server" />
                            </div>
                            <h4>Backend</h4>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Python</li>
                                <li>Java</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <div className="skill-icon">
                                <FontAwesomeIcon icon="database" />
                            </div>
                            <h4>Database</h4>
                            <ul>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>Redis</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <div className="skill-icon">
                                <FontAwesomeIcon icon="palette" />
                            </div>
                            <h4>Design</h4>
                            <ul>
                                <li>UI/UX Design</li>
                                <li>Figma</li>
                                <li>Adobe XD</li>
                                <li>Responsive Design</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="experience-section">
                    <h3>Experience</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4>Senior Developer</h4>
                                <p className="company">Tech Company</p>
                                <p className="duration">2020 - Present</p>
                                <p className="description">
                                    Leading development teams and implementing modern web solutions.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4>Full Stack Developer</h4>
                                <p className="company">Startup Inc</p>
                                <p className="duration">2018 - 2020</p>
                                <p className="description">
                                    Developed and maintained web applications using modern technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;