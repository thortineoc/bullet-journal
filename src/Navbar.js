import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to='/' className="navbar__link">
                <span>Main page</span>
            </Link>
            <Link to='/calendar' className="navbar__link">
                <span>Calendar</span>
            </Link>
            <Link to='/list' className="navbar__link">
                <span>To-do</span>
            </Link>
        </nav>
    )
}
 
export default Navbar
