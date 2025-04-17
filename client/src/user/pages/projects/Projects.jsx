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

const Projects = () => {
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

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce platform with advanced features like real-time inventory management, payment processing, and analytics dashboard.",
            image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            category: "web",
            link: "#"
        },
        {
            id: 2,
            title: "Mobile Fitness App",
            description: "A cross-platform mobile application for fitness tracking, workout planning, and nutrition management with social features.",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            tags: ["React Native", "Firebase", "Redux"],
            category: "mobile",
            link: "#"
        },
        {
            id: 3,
            title: "AI-Powered Analytics Dashboard",
            description: "A business intelligence platform with machine learning capabilities for predictive analytics and data visualization.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            tags: ["Python", "TensorFlow", "React", "D3.js"],
            category: "ai",
            link: "#2"
        },
        {
            id: 4,
            title: "Cloud Infrastructure Management",
            description: "A cloud management platform for automated deployment, scaling, and monitoring of cloud resources.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            tags: ["AWS", "Terraform", "Kubernetes", "Docker"],
            category: "cloud",
            link: "#"
        },
        {
            id: 5,
            title: "UI/UX Design System",
            description: "A comprehensive design system with reusable components, documentation, and accessibility guidelines.",
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            tags: ["Figma", "Storybook", "React", "Styled Components"],
            category: "design",
            link: "#"
        },
        {
            id: 6,
            title: "Blockchain Wallet",
            description: "A secure cryptocurrency wallet with multi-chain support and advanced security features.",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            tags: ["Solidity", "Web3.js", "React", "Ethereum"],
            category: "blockchain",
            link: "#"
        }
    ];

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

                <div className="filters">
                    <button className="filter-btn active">All</button>
                    <button className="filter-btn">Web</button>
                    <button className="filter-btn">Mobile</button>
                    <button className="filter-btn">AI</button>
                    <button className="filter-btn">Cloud</button>
                    <button className="filter-btn">Design</button>
                    <button className="filter-btn">Blockchain</button>
                </div>

                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card" data-category={project.category}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-tags">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-actions">
                                    <a href={project.link} className="view-project">
                                        View Project
                                        <FontAwesomeIcon icon="arrow-right" className="ms-2" />
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