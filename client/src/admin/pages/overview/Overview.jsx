import React from 'react';
import { FaEye, FaCode, FaProjectDiagram, FaComments } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
// css file
import './style.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// hooks
import useOverview from '../../../hooks/useOverview';

const Overview = () => {
    // Sample data for the chart
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Website Views',
                data: [1200, 1900, 3000, 5000, 2000, 3000],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };


    // get data 
    const {data : overviewData , isLoading , error} = useOverview()


    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <div className="overview-page">
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon">
                        <FaEye />
                    </div>
                    <div className="stat-content">
                        <h3>Total Views</h3>
                        <p>15,231</p>
                        <span className="stat-change positive">+25.5%</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <FaCode />
                    </div>
                    <div className="stat-content">
                        <h3>Projects</h3>
                        <p>{overviewData?.data?.totalProjects}</p>
                        <span className="stat-change positive">+3 New</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <FaProjectDiagram />
                    </div>
                    <div className="stat-content">
                        <h3>Skills</h3>
                        <p>12</p>
                        <span className="stat-change positive">Updated</span>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <FaComments />
                    </div>
                    <div className="stat-content">
                        <h3>Messages</h3>
                        <p>{overviewData?.data?.totalContactMessages}</p>
                        <span className="stat-change positive">+12 New</span>
                    </div>
                </div>
            </div>

            <div className="charts-container">
                <div className="chart-card">
                    <h3>Website Traffic</h3>
                    <div className="chart-wrapper">
                        <Line data={chartData} options={chartOptions} />
                    </div>
                </div>

                <div className="chart-card">
                    <h3>Recent Activity</h3>
                    <div className="activity-list">
                        <div className="activity-item">
                            <div className="activity-icon">
                                <FaEye />
                            </div>
                            <div className="activity-content">
                                <p>New project view from LinkedIn</p>
                                <span>2 minutes ago</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon">
                                <FaComments />
                            </div>
                            <div className="activity-content">
                                <p>New message from potential client</p>
                                <span>15 minutes ago</span>
                            </div>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon">
                                <FaProjectDiagram />
                            </div>
                            <div className="activity-content">
                                <p>Project "E-commerce" updated</p>
                                <span>1 hour ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview; 