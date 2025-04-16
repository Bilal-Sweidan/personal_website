import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faServer, 
    faCode, 
    faMobile, 
    faDatabase, 
    faCloud, 
    faShieldAlt,
    faRocket,
    faCogs
} from '@fortawesome/free-solid-svg-icons';
import './style.css';

// Add icons to library
library.add(faServer, faCode, faMobile, faDatabase, faCloud, faShieldAlt, faRocket, faCogs);

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <div className="services-page">
      <div className="services-header">
        <h1 className="title">Our Services</h1>
        <p className="subtitle">Comprehensive solutions for your digital needs</p>
      </div>
      
      <div className="services-container">
        <div className="service-card">
          <div className="card-icon">
            <FontAwesomeIcon icon="server" />
          </div>
          <h3>Backend Development</h3>
          <p>Robust server-side solutions with Node.js, Python, and Java</p>
          <ul className="service-features">
            <li>API Development</li>
            <li>Microservices Architecture</li>
            <li>Server Optimization</li>
            <li>Database Management</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="card-icon">
            <FontAwesomeIcon icon="code" />
          </div>
          <h3>Frontend Development</h3>
          <p>Modern, responsive user interfaces with React and Vue.js</p>
          <ul className="service-features">
            <li>Single Page Applications</li>
            <li>Progressive Web Apps</li>
            <li>UI/UX Implementation</li>
            <li>Cross-browser Compatibility</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="card-icon">
            <FontAwesomeIcon icon="database" />
          </div>
          <h3>Database Solutions</h3>
          <p>Efficient data management and optimization</p>
          <ul className="service-features">
            <li>Database Design</li>
            <li>Query Optimization</li>
            <li>Data Migration</li>
            <li>Backup Solutions</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="card-icon">
            <FontAwesomeIcon icon="cloud" />
          </div>
          <h3>Cloud Services</h3>
          <p>Scalable cloud infrastructure and deployment</p>
          <ul className="service-features">
            <li>AWS Solutions</li>
            <li>Azure Integration</li>
            <li>Cloud Migration</li>
            <li>DevOps Implementation</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="card-icon">
            <FontAwesomeIcon icon="shield-alt" />
          </div>
          <h3>Security Solutions</h3>
          <p>Comprehensive security implementation</p>
          <ul className="service-features">
            <li>Authentication Systems</li>
            <li>Data Encryption</li>
            <li>Security Audits</li>
            <li>Compliance Implementation</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="card-icon">
            <FontAwesomeIcon icon="rocket" />
          </div>
          <h3>Performance Optimization</h3>
          <p>Enhanced application performance</p>
          <ul className="service-features">
            <li>Load Time Optimization</li>
            <li>Code Optimization</li>
            <li>Caching Solutions</li>
            <li>Performance Monitoring</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;