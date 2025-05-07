import React from 'react'
import { Link } from 'react-router-dom'
// css file
import './style.module.css'

export default function ProjectsHeader() {
    return (
        <header className='d-flex justify-content-between align-items-center rounded'>
            <div>
                <h2>Projects</h2>
            </div>
            <div>
                <Link to='new-project' className='btn btn-primary'>Add Project</Link>
            </div>
        </header>
    )
}
