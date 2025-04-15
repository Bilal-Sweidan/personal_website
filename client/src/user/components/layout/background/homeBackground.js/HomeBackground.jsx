import React from 'react'
// react icons
import { GiTriangleTarget } from "react-icons/gi";

// css file
import "./style.css"
export default function HomeBackground() {
    return (
        <div className='home-page-background position-absolute w-100 h-100 d-flex z-0'>
            <div className='home-page-background-1 w-75 h-100' style={{ backgroundColor: "#1E2022" }} />
            <div className='home-page-background-2 w-25 h-100' style={{ backgroundColor: "#5DCD5D" }} />
        </div>
    )
}
