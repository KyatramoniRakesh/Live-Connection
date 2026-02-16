import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../CSS/Navbar.css";
import Logo from "../images/Logo.svg";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Prevent background scroll when sidebar is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <div className="navbar-logo">
                            <a href="/">
                                <img src={Logo} alt="Live Connections Logo" />
                            </a>
                        </div>

                        <nav className="navbar-links">
                            <a href="#">Company</a>
                            <a href="#">Services</a>
                            <a href="#">Diversity & Inclusion</a>
                            <a href="#">Domain Specialities</a>
                            <a href="#">Contact</a>
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
                    onClick={() => setOpen(false)}
                />
            )}

            <div className={`mobile-menu ${open ? "open" : ""}`}>
                {/* Close X inside sidebar */}
                <div className="mobile-close">
                    <FiX size={24} onClick={() => setOpen(false)} />
                </div>

                <a href="#" className="active">Home</a>
                <a href="#">Company</a>
                <a href="#">Services</a>
                <a href="#">Diversity & Inclusion</a>
                <a href="#">Domain Specialities</a>
                <a href="#">Contact</a>

                <button className="mobile-btn">Find a Job</button>
            </div>
        </>
    );
};

export default Navbar;
