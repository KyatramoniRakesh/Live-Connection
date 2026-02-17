import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../CSS/Navbar.css";
import Logo from "../images/Logo.svg";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    const closeMenu = () => setOpen(false);

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <div className="navbar-logo">
                            <Link to="/">
                                <img src={Logo} alt="Live Connections Logo" />
                            </Link>
                        </div>

                        <nav className="navbar-links">
                            
                            <NavLink to="/company">Company</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/diversity">Diversity & Inclusion</NavLink>
                            <NavLink to="/domains">Domain Specialities</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </nav>
                    </div>

                    <div className="navbar-actions">
                        <button className="btn-outline">Talk to Us</button>
                        <button className="btn-filled">Find a Job</button>
                    </div>

                    <div
                        className="mobile-menu-icon"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FiX size={26} /> : <FiMenu size={26} />}
                    </div>
                </div>
            </header>

            {open && (
                <div
                    className="menu-overlay"
                    onClick={closeMenu}
                />
            )}

            <div className={`mobile-menu ${open ? "open" : ""}`}>
                <div className="mobile-close">
                    <FiX size={24} onClick={closeMenu} />
                </div>

                <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
                <NavLink to="/company" onClick={closeMenu}>Company</NavLink>
                <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
                <NavLink to="/diversity" onClick={closeMenu}>Diversity & Inclusion</NavLink>
                <NavLink to="/domains" onClick={closeMenu}>Domain Specialities</NavLink>
                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

                <button className="mobile-btn">Find a Job</button>
            </div>
        </>
    );
};

export default Navbar;
