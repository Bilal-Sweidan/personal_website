import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/layout';
import { Header } from '../components/layout/header';
import './style.css';
import { PathTrackHeader } from '../components/features/pathTrackHeader';

const Admin = () => {
    return (
        <div className="admin-dashboard">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="content-wrapper">
                    <PathTrackHeader />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;
