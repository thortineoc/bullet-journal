import React from 'react';
import './Navbar.css';
import Scrollchor from 'react-scrollchor';

function Navbar() {
    return (
        <nav className="navbar">
            <Scrollchor to="#top" animate={{duration:600}} className="navbar__link">
                <span>Main page</span>
            </Scrollchor>
            <Scrollchor to="#calendar" animate={{duration:600}} className="navbar__link">
                <span>Calendar</span>
            </Scrollchor>
            <Scrollchor to="#list" animate={{duration:600}} className="navbar__link">
                <span>To-do</span>
            </Scrollchor>
        </nav>
    )
}

export default Navbar

