import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

import { useMutation } from '@tanstack/react-query'

// api 
import admin from '../../../../api/admin';

// useProject hook 
import useProject from '../../../../hooks/useProject';

const AddingProject = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        technologies: '',
        image: '',
        liveDemo: '',
        github: '',
        status: 'In Progress'
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeTab, setActiveTab] = useState('details');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                image: file
            }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const mutation = useMutation({
        mutationKey: "new-project",
        mutationFn: (formData) => admin.newProject(formData),
        onSuccess: () => {
            navigate('/admin/projects');
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const formDataToSend = new FormData(e.target);
            console.log(formDataToSend)
            const response = await mutation.mutateAsync(formDataToSend)

            if (response.status !== 200) {
                throw new Error('Failed to create project');
            }
        } catch (error) {
            console.log('Error creating project:', error);
            alert('Failed to create project. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.addProjectPage}>
            <div className={styles.pageHeader}>
                <button
                    className={styles.backButton}
                    onClick={() => navigate('/admin/projects')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </button>
                <h1>Add New Project</h1>
            </div>

            <div className={styles.formContainer}>
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'details' ? styles.active : ''}`}
                        onClick={() => setActiveTab('details')}
                    >
                        Project Details
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'links' ? styles.active : ''}`}
                        onClick={() => setActiveTab('links')}
                    >
                        Links & Media
                    </button>
                </div>

                <form onSubmit={handleSubmit} className={styles.projectForm}>
                    <div className={`${styles.formSection} ${activeTab === 'details' ? styles.active : ''}`}>
                        <div className={styles.formGroup}>
                            <label htmlFor="title">Project Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                placeholder="Enter project title"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                placeholder="Enter project description"
                                rows="4"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="technologies">Technologies</label>
                            <input
                                type="text"
                                id="technologies"
                                name="technologies"
                                value={formData.technologies}
                                onChange={handleChange}
                                required
                                placeholder="React, Node.js, MongoDB (comma separated)"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="status">Project Status</label>
                            <select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                required
                            >
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="On Hold">On Hold</option>
                            </select>
                        </div>
                    </div>

                    <div className={`${styles.formSection} ${activeTab === 'links' ? styles.active : ''}`}>
                        <div className={styles.formGroup}>
                            <label htmlFor="image">Project Image</label>
                            <div className={styles.imageUpload}>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={handleImageChange}
                                    accept="image/*"
                                    required
                                />
                                <label htmlFor="image" className={styles.uploadButton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="17 8 12 3 7 8" />
                                        <line x1="12" y1="3" x2="12" y2="15" />
                                    </svg>
                                    Choose Image
                                </label>
                                {imagePreview && (
                                    <div className={styles.imagePreview}>
                                        <img src={imagePreview} alt="Preview" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="liveDemo">Live Demo URL</label>
                            <input
                                type="url"
                                id="liveDemo"
                                name="liveDemo"
                                value={formData.liveDemo}
                                onChange={handleChange}
                                placeholder="https://example.com"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="github">GitHub Repository URL</label>
                            <input
                                type="url"
                                id="github"
                                name="github"
                                value={formData.github}
                                onChange={handleChange}
                                placeholder="https://github.com/username/repo"
                            />
                        </div>
                    </div>

                    <div className={styles.formActions}>
                        <button
                            type="submit"
                            className={styles.saveButton}
                            disabled={isSubmitting}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                                <polyline points="17 21 17 13 7 13 7 21" />
                                <polyline points="7 3 7 8 15 8" />
                            </svg>
                            {isSubmitting ? 'Saving...' : 'Save Project'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddingProject; 