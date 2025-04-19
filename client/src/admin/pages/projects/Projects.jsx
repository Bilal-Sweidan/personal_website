import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './style.css';

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'E-commerce Platform',
            description: 'A full-stack e-commerce solution with payment integration and inventory management',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            image: 'https://via.placeholder.com/400x250',
            liveDemo: 'https://example.com',
            github: 'https://github.com/example',
            status: 'Completed'
        },
        {
            id: 2,
            title: 'Portfolio Website',
            description: 'A modern portfolio website showcasing creative work and projects',
            technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
            image: 'https://via.placeholder.com/400x250',
            liveDemo: 'https://example.com',
            github: 'https://github.com/example',
            status: 'In Progress'
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    const handleAddProject = () => {
        setEditingProject(null);
        setIsModalOpen(true);
    };

    return (
        <div className="projects-page w-100 d-block">
            <div className="projects-header w-100">
                <div className="header-content">
                    <h1>Projects</h1>
                    <p>Manage your portfolio projects</p>
                </div>
                <div className="header-actions">
                    <div className="search-container">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="add-project-btn" onClick={handleAddProject}>
                        <FaPlus /> New Project
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
