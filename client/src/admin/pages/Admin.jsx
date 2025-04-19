import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '../components';
import './style.css';

const Admin = () => {
    return (
        <div className="admin-dashboard">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="content-wrapper">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;
