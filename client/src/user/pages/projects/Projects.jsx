import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCode,
    faGlobe,
    faMobile,
    faDatabase,
    faServer,
    faPalette
} from '@fortawesome/free-solid-svg-icons';

// Add icons to library
library.add(faCode, faGlobe, faMobile, faDatabase, faServer, faPalette);

// css file
import './style.css'
// hooks
import useProject from '../../../hooks/useProject';

const Projects = () => {
    const { projects , isLoading } = useProject()
    console.log(projects)
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    console.log(BACKEND_URL)

    useEffect(() => {
        const elements = document.querySelectorAll('.project-card, .filter-btn, .section-title');
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
        <div className="projects-page">
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

            <div className="projects-content">
                <div className="section-title">
                    <h1>My Projects</h1>
                    <p>Explore my latest work and contributions</p>
                </div>

                {/* <div className="filters">
                    <button className="filter-btn active">All</button>
                    <button className="filter-btn">Web</button>
                    <button className="filter-btn">Mobile</button>
                    <button className="filter-btn">AI</button>
                    <button className="filter-btn">Cloud</button>
                    <button className="filter-btn">Design</button>
                    <button className="filter-btn">Blockchain</button>
                </div> */}

                <div className="projects-grid">
                    {
                    isLoading ? "loading" : projects?.map(project => (
                        <div key={project._id} className="project-card" data-category='All'>
                            <div className="project-image">
                                <img src={BACKEND_URL + "/uploads/images/" + project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-tags">
                                        {project?.technologies?.map((tag, index) => (
                                            <span key={index} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project?.title}</h3>
                                <p>{project?.description}</p>
                                <div className="project-actions">
                                    <a href={project?.liveDemo} className="view-project">
                                        View Project
                                        {/* <FontAwesomeIcon icon="arrow-right" className="ms-2" /> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects