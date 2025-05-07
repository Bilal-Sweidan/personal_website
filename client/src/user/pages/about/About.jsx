import React, { useEffect } from 'react';
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

// Add icons to library
library.add(faCode, faPalette, faDatabase, faServer, faMobile, faGlobe);

// css file
import './style.css';

const About = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.profile-card, .skill-category, .timeline-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => observer.observe(element));
    }, []);

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
                        <div className="profile-info d-block">
                            <h2 className='text-primary'>About Me</h2>
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
                                <FontAwesomeIcon icon={faCode} />
                            </div>
                            <h4>Frontend</h4>
                            <ul>
                                <li>CSS3</li>
                                <li>sass</li>
                                <li>bootstrap</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <div className="skill-icon">
                                <FontAwesomeIcon icon={faServer} />
                            </div>
                            <h4>Backend</h4>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <div className="skill-icon">
                                <FontAwesomeIcon icon={faDatabase} />
                            </div>
                            <h4>Database</h4>
                            <ul>
                                <li>MongoDB</li>
                                <li>SQLite</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <div className="skill-icon">
                                <FontAwesomeIcon icon={faPalette} />
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
                                <h4>Front-End Developer</h4>
                                <p className="company">Freelancer</p>
                                <p className="duration">2021 - Present</p>
                                <p className="description">
                                    Leading development teams and implementing modern web solutions.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4>Back-End Developer</h4>
                                <p className="company">Freelancer</p>
                                <p className="duration">2022 - Present</p>
                                <p className="description">
                                    Leading development teams and implementing modern web solutions.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4>Full Stack Developer</h4>
                                <p className="company">Startup Inc</p>
                                <p className="duration">2022 - present</p>
                                <p className="description">
                                    Developed and maintained web applications using modern technologies.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4>Team Leader</h4>
                                <p className="company">AP Team</p>
                                <p className="duration">2024 - present</p>
                                <p className="description">
                                    Developer and leader in technical Team.
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