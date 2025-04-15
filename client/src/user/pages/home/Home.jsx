import React from 'react'
// components
import { HomeBackground } from "../../components/layout/background"
// IMAGE
import polygonBg from '../../../assets/page-turner-3.png'
// import polygonBg from '../../../assets/endless-constellation-2.png'
// CSS
import './style.css'

export default function Home() {
    return (
        <main className='home-page text-light w-100 position-relative d-flex flex-column flex-lg-row align-items-center justify-content-center'
            style={{
                backgroundColor: "#1E2022",
                backgroundImage: `url(${polygonBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                backgroundSize: 'cover',
                position: 'relative',
                zIndex: 1
            }}
        >
            <div className='home-page-content position-relative col-12 col-lg-5'>
                <div className='content-wrapper'>
                    <h1>Bilal Sweidan</h1>
                    <h4>Creative Developer</h4>
                    <p>Welcome to my digital space! I'm passionate about creating 
                        innovative solutions that blend technology and creativity. 
                        With years of experience in digital development, I help 
                        bring ideas to life through code and design.
                    </p>
                    <div className='mt-4 d-flex flex-wrap justify-content-center gap-3'>
                        <button className='btn btn-outline-success'>Explore My Work</button>
                        <button className='btn btn-success'>Let's Connect</button>
                    </div>
                </div>
            </div>

            <div className='home-page-content position-relative col-12 col-lg-5 d-flex justify-content-center align-items-center'>
                <div className='right-content'>
                    <div className='skill-cards-container'>
                        <div className='skill-card'>
                            <div className='card-content'>
                                <i className="fas fa-paint-brush"></i>
                                <h5>Design</h5>
                                <p>Creating beautiful and intuitive user experiences with modern design principles</p>
                            </div>
                        </div>
                        <div className='skill-card'>
                            <div className='card-content'>
                                <i className="fas fa-code"></i>
                                <h5>Development</h5>
                                <p>Building robust and scalable applications using cutting-edge technologies</p>
                            </div>
                        </div>
                        <div className='skill-card'>
                            <div className='card-content'>
                                <i className="fas fa-lightbulb"></i>
                                <h5>Innovation</h5>
                                <p>Pushing boundaries with creative solutions and forward-thinking approaches</p>
                            </div>
                        </div>
                        <div className='skill-card'>
                            <div className='card-content'>
                                <i className="fas fa-rocket"></i>
                                <h5>Performance</h5>
                                <p>Optimizing applications for speed, efficiency, and seamless user experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
