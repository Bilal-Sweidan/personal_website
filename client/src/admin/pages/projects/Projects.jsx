import './style.module.css';
import { Outlet } from 'react-router-dom';

const Projects = () => {


    return (
        <div className="admin-projects-page w-100">
            <Outlet />
        </div>
    );
};

export default Projects;
