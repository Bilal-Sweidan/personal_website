import React, { useState } from 'react';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Outlet, useNavigate } from 'react-router-dom';
import { ProjectsHeader } from '../../../components/layout/header';
import { ProjectCard } from '../../../components/common';

import useProject from '../../../../hooks/useProject';
export default function ProjectsHome() {
    const { projects } = useProject()
    console.log(projects)
    // const [projects, setProjects] = useState([
    //     {
    //         id: 1,
    //         title: 'E-commerce Platform',
    //         description: 'A full-stack e-commerce solution with payment integration and inventory management',
    //         technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    //         image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    //         liveDemo: 'https://example.com',
    //         github: 'https://github.com/example',
    //         status: 'Completed'
    //     },
    //     {
    //         id: 2,
    //         title: 'Portfolio Website',
    //         description: 'A modern portfolio website showcasing creative work and projects',
    //         technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    //         image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    //         liveDemo: 'https://example.com',
    //         github: 'https://github.com/example',
    //         status: 'In Progress'
    //     }
    // ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    const navigate = useNavigate()
    const handleAddProject = () => {
        setEditingProject(null);
        setIsModalOpen(true);
        navigate('new-project')
    };

    return (
        <main className='p-2'>
            <ProjectsHeader />
            <div className='container py-4 d-flex flex-wrap'>
                {
                    projects?.map((project) => (
                        <ProjectCard key={project.id} data={project} />
                    ))
                }
            </div>
        </main>
    )
}
