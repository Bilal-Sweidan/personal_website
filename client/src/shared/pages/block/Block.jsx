import { useNavigate } from 'react-router-dom';
import './style.module.css';

const Block = () => {
    const navigate = useNavigate();

    return (
        <div className="block-page">
            <div className="block-container">
                <div className="block-card">
                    <div className="block-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h2>Access Denied</h2>
                    <p>You don't have permission to access this page.</p>
                    <button 
                        onClick={() => navigate('/')}
                        className="block-button"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Block;
