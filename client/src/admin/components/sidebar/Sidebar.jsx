import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome, 
    faUser, 
    faBriefcase, 
    faEnvelope, 
    faCog, 
    faChartLine,
    faSignOutAlt,
    faBars,
    faTimes
} from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

    const menuItems = [
        { path: '/admin', icon: faHome, label: 'Overview' },
        { path: '/admin/profile', icon: faUser, label: 'Profile' },
        { path: '/admin/projects', icon: faBriefcase, label: 'Projects' },
        { path: '/admin/messages', icon: faEnvelope, label: 'Messages' },
        { path: '/admin/analytics', icon: faChartLine, label: 'Analytics' },
        { path: '/admin/settings', icon: faCog, label: 'Settings' }
    ];

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <div className="logo-container">
                    <span className="logo-text">Admin Panel</span>
                </div>
                <button className="toggle-btn" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        <div className="nav-icon">
                            <FontAwesomeIcon icon={item.icon} />
                        </div>
                        {isOpen && <span className="nav-label">{item.label}</span>}
                    </Link>
                ))}
            </nav>

            <div className="sidebar-footer">
                <button className="logout-btn">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    {isOpen && <span>Logout</span>}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
