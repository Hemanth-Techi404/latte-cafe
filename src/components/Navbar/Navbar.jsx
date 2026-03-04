import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import gsap from 'gsap';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
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
            <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar">
                {/* Logo */}
                <Link to="/" className="nav-logo">
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
                        id="nav-view-location"
                        className="btn-location"
                        onClick={handleLocationClick}
                        aria-label="View Location"
                    >
                        <FiMapPin size={14} />
                        <span>View Location</span>
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

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
                <button
                    style={{
                        position: 'absolute', top: '2rem', right: '2rem',
                        background: 'none', border: 'none', color: 'var(--cream-white)',
                        fontSize: '1.8rem', cursor: 'pointer'
                    }}
                    onClick={() => setMenuOpen(false)}
                >
                    <HiX />
                </button>
                {links.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMenuOpen(false)}
                        style={{ fontStyle: location.pathname === link.to ? 'italic' : 'normal' }}
                    >
                        {link.label}
                    </Link>
                ))}
                <button className="btn-primary" onClick={handleLocationClick}>
                    <FiMapPin />
                    <span>View Location</span>
                </button>
            </div>
        </>
    );
};

export default Navbar;
