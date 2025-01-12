import React from "react";
import {Link} from "react-router-dom"
import './Navbar.css';

function Navbar() {
    return (
        <nav className = "navbar">
            <ul className = "nav-list">
                <li> <Link to = "/"> Home </Link></li>
                <li> <Link to = "/about"> About Me </Link></li>
                <li> <Link to = "/coursework"> Coursework </Link></li>
                <li> <Link to = "/projects"> Projects </Link></li>
                <li> <Link to = "/research"> Research </Link></li>
                <li> <Link to = "/contact"> Contact </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;