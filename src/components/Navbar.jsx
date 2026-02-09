import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../CSS/Navbar.css";
import Logo from "../images/Logo.svg";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    {/* LEFT SECTION */}
                    <div className="navbar-left">
                        <div className="navbar-logo">
                            <a href="/">
                                <img src={Logo} alt="Live Connections Logo" />
                            </a>
                        </div>


                        {/* DESKTOP LINKS */}
                        <nav className="navbar-links">
                            <a href="#">Company</a>
                            <a href="#">Services</a>
                            <a href="#">Diversity & Inclusion</a>
                            <a href="#">Domain Specialities</a>
                            <a href="#">Contact</a>
                        </nav>
                    </div>

                    {/* RIGHT BUTTONS */}
                    <div className="navbar-actions">
                        <button className="btn-outline">Talk to Us</button>
                        <button className="btn-filled">Find a Job</button>
                    </div>

                    {/* MOBILE / TABLET ICON */}
                    <div className="mobile-menu-icon" onClick={() => setOpen(!open)}>
                        {open ? <FiX size={26} /> : <FiMenu size={26} />}
                    </div>
                </div>
            </header>

            {/* OVERLAY */}
            {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}

            {/* MOBILE / TABLET MENU */}
            <div className={`mobile-menu ${open ? "open" : ""}`}>
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
