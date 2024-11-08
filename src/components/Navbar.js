import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';  
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar" ref={navbarRef}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                    <h1 className="navbar-title">Seminar Info</h1>
                </div>
                <div
                    className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/event" onClick={() => setMenuOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link> 
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
