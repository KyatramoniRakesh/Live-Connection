import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import Logo from "../images/Logo.svg";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [device, setDevice] = useState("desktop");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setDevice("mobile");
            } else if (window.innerWidth <= 1024) {
                setDevice("tablet");
            } else {
                setDevice("desktop");
                setOpen(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <header className="live-navbar">
                <div className="live-navbar-left">
                    <Link to="/">
                        <img src={Logo} alt="Live Connections" className="live-logo" />
                    </Link>
                </div>

                {device === "desktop" && (
                    <>
                        <nav className="live-navbar-center">
                            <Link to="/company">Company</Link>
                            <Link to="services">Services</Link>
                            <Link to="/diversity">Diversity & Inclusion</Link>
                            <Link to="/domains">Domain Specialities</Link>
                            <Link to="/contact">Contact</Link>
                        </nav>

                        <div className="live-navbar-right">
                            <button className="live-talk-btn">Talk to Us</button>
                            <Link to="/jobs">
                                <button className="live-find-btn">Find a Job</button>
                            </Link>
                        </div>
                    </>
                )}

                {device !== "desktop" && (
                    <div
                        className="live-menu-icon"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FiX size={28} /> : <FiMenu size={28} />}
                    </div>
                )}
            </header>

            {/* Overlay */}
            {open && (
                <div
                    className="live-overlay"
                    onClick={handleClose}
                ></div>
            )}

            {/* Sidebar / Dropdown */}
            {device !== "desktop" && (
                <div
                    className={`live-menu ${open ? "open" : ""} ${device}`}
                >
                    <Link to="/" onClick={handleClose}>Home</Link>
                    <Link to="/company" onClick={handleClose}>Company</Link>
                    <Link to="services" onClick={handleClose}>Services</Link>
                    <Link to="/diversity" onClick={handleClose}>
                        Diversity & Inclusion
                    </Link>
                    <Link to="/domains" onClick={handleClose}>
                        Domain Specialities
                    </Link>
                    <Link to="/contact" onClick={handleClose}>Contact</Link>

                    <Link to="/jobs" onClick={handleClose}>
                        <button className="live-find-btn mobile-btn">
                            Find a Job
                        </button>
                    </Link>
                </div>
            )}
        </>
    );
};

export default Navbar;
