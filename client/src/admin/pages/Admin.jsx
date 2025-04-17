import React, { useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './style.css';

export default function Admin() {
    const [activeSection, setActiveSection] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const sections = [
        { id: 'overview', name: 'Overview', icon: <FaHome /> },
        { id: 'profile', name: 'Profile', icon: <FaUser /> },
        { id: 'projects', name: 'Projects', icon: <FaBriefcase /> },
        { id: 'contact', name: 'Contact', icon: <FaEnvelope /> },
        { id: 'settings', name: 'Settings', icon: <FaCog /> },
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'overview':
                return <OverviewSection />;
            case 'profile':
                return <ProfileSection />;
            case 'projects':
                return <ProjectsSection />;
            case 'contact':
                return <ContactSection />;
            case 'settings':
                return <SettingsSection />;
            default:
                return <OverviewSection />;
        }
    };

    return (
        <div className="admin-dashboard">
            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <h2>Admin Panel</h2>
                    <button 
                        className="toggle-sidebar"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? '←' : '→'}
                    </button>
                </div>
                <nav className="sidebar-nav">
                    {sections.map(section => (
                        <button
                            key={section.id}
                            className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => setActiveSection(section.id)}
                        >
                            {section.icon}
                            {isSidebarOpen && <span>{section.name}</span>}
                        </button>
                    ))}
                </nav>
                <div className="sidebar-footer">
                    <button className="logout-button">
                        <FaSignOutAlt />
                        {isSidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </div>
            <main className="main-content">
                <header className="content-header">
                    <h1>{sections.find(s => s.id === activeSection)?.name}</h1>
                </header>
                <div className="content-body">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
}

// Section Components
const OverviewSection = () => (
    <div className="overview-section">
        <div className="stats-grid">
            <div className="stat-card">
                <h3>Total Projects</h3>
                <p>12</p>
            </div>
            <div className="stat-card">
                <h3>Profile Views</h3>
                <p>1,234</p>
            </div>
            <div className="stat-card">
                <h3>Messages</h3>
                <p>5</p>
            </div>
            <div className="stat-card">
                <h3>Last Updated</h3>
                <p>2 days ago</p>
            </div>
        </div>
        <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-list">
                {/* Activity items will go here */}
            </div>
        </div>
    </div>
);

const ProfileSection = () => (
    <div className="profile-section">
        <form className="profile-form">
            <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
                <label>Title</label>
                <input type="text" placeholder="Your professional title" />
            </div>
            <div className="form-group">
                <label>Bio</label>
                <textarea placeholder="Your bio" rows="4" />
            </div>
            <div className="form-group">
                <label>Skills</label>
                <input type="text" placeholder="Add skills (comma separated)" />
            </div>
            <button type="submit" className="save-button">Save Changes</button>
        </form>
    </div>
);

const ProjectsSection = () => (
    <div className="projects-section">
        <div className="projects-header">
            <h2>Manage Projects</h2>
            <button className="add-project-button">Add New Project</button>
        </div>
        <div className="projects-list">
            {/* Project items will go here */}
        </div>
    </div>
);

const ContactSection = () => (
    <div className="contact-section">
        <form className="contact-form">
            <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Contact email" />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Contact phone" />
            </div>
            <div className="form-group">
                <label>Social Links</label>
                <div className="social-links">
                    <input type="text" placeholder="LinkedIn URL" />
                    <input type="text" placeholder="GitHub URL" />
                    <input type="text" placeholder="Twitter URL" />
                </div>
            </div>
            <button type="submit" className="save-button">Save Changes</button>
        </form>
    </div>
);

const SettingsSection = () => (
    <div className="settings-section">
        <div className="settings-group">
            <h3>Account Settings</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="text" placeholder="Username" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Change password" />
            </div>
        </div>
        <div className="settings-group">
            <h3>Portfolio Settings</h3>
            <div className="form-group">
                <label>Theme</label>
                <select>
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System</option>
                </select>
            </div>
            <div className="form-group">
                <label>Language</label>
                <select>
                    <option>English</option>
                    <option>Arabic</option>
                </select>
            </div>
        </div>
        <button type="submit" className="save-button">Save Settings</button>
    </div>
);
