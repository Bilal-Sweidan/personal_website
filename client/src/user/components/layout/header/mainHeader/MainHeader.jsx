// react
import { useState } from "react"
import { Link } from "react-router-dom"
// import images
import logo from "../../../../../assets/user_images/logo.png"
// CSS
import "./style.css"

const MainHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="main-header z-3 text-light py-3 position-fixed w-100 d-flex justify-content-between align-items-center px-3">
            <div className="d-flex align-items-center">
                <img
                    src={logo}
                    alt="logo"
                    className="logo-img"
                    style={{
                        width: '30px',
                        height: '30px',
                        objectFit: 'contain'
                    }}
                />
                <p className="ms-2 mb-0 logo-text">Bilal Sweidan</p>
            </div>
            
            <button className="mobile-menu-btn" onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <ul className="d-flex align-items-center gap-5 list-unstyled mb-0 text-capitalize">
                    <li>
                        <Link to="" className="text-decoration-none text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" className="text-decoration-none text-white" onClick={() => setIsMenuOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="contact" className="text-decoration-none text-white" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </li>
                    <li>
                        <Link to="services" className="text-decoration-none text-white" onClick={() => setIsMenuOpen(false)}>Services</Link>
                    </li>
                    <li>
                        <Link to="projects" className="text-decoration-none text-white" onClick={() => setIsMenuOpen(false)}>projects</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default MainHeader;