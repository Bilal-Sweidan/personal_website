import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBell, 
    faSearch, 
    faUserCircle,
    faCaretDown,
    faMoon,
    faSun
} from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleProfileMenu = () => {
        setShowProfileMenu(!showProfileMenu);
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    return (
        <header className="admin-header">
            <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="search-input"
                />
            </div>

            <div className="header-right">
                <button 
                    className="theme-toggle"
                    onClick={toggleDarkMode}
                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                </button>

                <div className="notifications-container">
                    <button 
                        className="notifications-btn"
                        onClick={toggleNotifications}
                    >
                        <FontAwesomeIcon icon={faBell} />
                        <span className="notification-badge">3</span>
                    </button>
                    
                    {showNotifications && (
                        <div className="notifications-dropdown">
                            <div className="notification-item">
                                <div className="notification-content">
                                    <h4>New Project Added</h4>
                                    <p>Project "Portfolio Website" has been created</p>
                                    <span className="notification-time">2 hours ago</span>
                                </div>
                            </div>
                            <div className="notification-item">
                                <div className="notification-content">
                                    <h4>New Message</h4>
                                    <p>You have a new message from John Doe</p>
                                    <span className="notification-time">5 hours ago</span>
                                </div>
                            </div>
                            <div className="notification-item">
                                <div className="notification-content">
                                    <h4>System Update</h4>
                                    <p>System maintenance scheduled for tomorrow</p>
                                    <span className="notification-time">1 day ago</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="profile-container">
                    <button 
                        className="profile-btn"
                        onClick={toggleProfileMenu}
                    >
                        <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
                        <span className="profile-name">Admin</span>
                        <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
                    </button>

                    {showProfileMenu && (
                        <div className="profile-dropdown">
                            <div className="profile-info">
                                <FontAwesomeIcon icon={faUserCircle} className="large-profile-icon" />
                                <div className="profile-details">
                                    <h4>Admin User</h4>
                                    <p>admin@example.com</p>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item">Profile Settings</button>
                            <button className="dropdown-item">Account Settings</button>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item logout">Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;

