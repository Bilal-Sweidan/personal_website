import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaEdit, FaTrash } from 'react-icons/fa';
import styles from './style.module.css';

import useProject from '../../../../hooks/useProject';
const ProjectCard = ({ data }) => {
    const { deleteProject } = useProject()
    const { _id , title, description, technologies, github, liveDemo, image } = data;
    return (
        <div className={styles.adminProjectCard}>
            <div className={styles.projectImage}>
                <img src={'http://localhost:3000/uploads/images/' + image} alt={title} />
                <div className={styles.projectActions}>
                    <button
                        className={`${styles.actionBtn} ${styles.live}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            window.open(liveLink, '_blank');
                        }}
                        data-tooltip="View Live"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </button>
                    <button
                        className={`${styles.actionBtn} ${styles.edit}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit(project);
                        }}
                        data-tooltip="Edit Project"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    <button
                        className={`${styles.actionBtn} ${styles.delete}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            // onDelete(deleteProject);
                            deleteProject.mutateAsync(_id)
                        }}
                        data-tooltip="Delete Project"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{title}</h3>
                <p className={styles.projectDescription}>{description}</p>

                <div className={styles.techStack}>
                    {technologies.map((tech, index) => (
                        <span key={index} className={styles.techTag}>{tech}</span>
                    ))}
                </div>

                <div className={styles.projectLinks}>
                    <a href={github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        GitHub
                    </a>
                    <a href={liveDemo} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;