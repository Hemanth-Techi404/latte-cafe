import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMessageCircle } from 'react-icons/fi';
import gsap from 'gsap';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navRef = useRef(null);
    const mobileLinksRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';

        if (menuOpen) {
            // Stagger animate mobile links
            gsap.fromTo(mobileLinksRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 0.3 }
            );
        }
    }, [menuOpen]);

    const links = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/menu', label: 'Menu' },
        { to: '/blog', label: 'Blog' },
        { to: '/contact', label: 'Contact' },
    ];

    const handleLocationClick = () => {
        window.open('https://www.google.com/maps/place/Latte+Global+Cafe/@17.7414699,83.3361308,16.79z/data=!4m6!3m5!1s0x3a3945885c239999:0x4beb73f6981b9c37!8m2!3d17.7396831!4d83.3418572!16s%2Fg%2F11vlw_ntkr?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D', '_blank');
    };

    return (
        <>
            <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`} id="main-navbar">
                {/* Logo */}
                <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
                    ☕ Latte <span>Global</span>
                </Link>

                {/* Desktop Links */}
                <ul className="nav-links">
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={location.pathname === link.to ? 'active' : ''}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right CTA */}
                <div className="nav-cta">
                    <button
                        className="btn-location"
                        onClick={handleLocationClick}
                        aria-label="View Location"
                    >
                        <FiMapPin size={18} />
                        <span>Our Location</span>
                    </button>

                    {/* Hamburger */}
                    <div
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        id="hamburger-menu"
                        role="button"
                        aria-label="Toggle mobile menu"
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
                <div className="mobile-menu-links">
                    {links.map((link, i) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={location.pathname === link.to ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                            ref={el => mobileLinksRef.current[i] = el}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="mobile-menu-actions">
                    <button className="btn-primary" onClick={handleLocationClick} style={{ width: '250px' }}>
                        <FiMapPin />
                        <span>Find Us</span>
                    </button>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'center' }}>
                        <a href="tel:+918912754444" className="social-icon" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                            <FiPhone />
                        </a>
                        <a href="https://wa.me/918912754444" className="social-icon" style={{ width: '50px', height: '50px', fontSize: '1.2rem', color: '#25D366' }}>
                            <FiMessageCircle />
                        </a>
                    </div>
                </div>
            </div>

            {/* Floating Action Button (FAB) for conversions */}
            <div className="fab-container">
                <a href="https://wa.me/918912754444" className="fab" aria-label="WhatsApp Us">
                    <FiMessageCircle />
                </a>
                <a href="tel:+918912754444" className="fab call" aria-label="Call Us">
                    <FiPhone />
                </a>
            </div>
        </>
    );
};

export default Navbar;
