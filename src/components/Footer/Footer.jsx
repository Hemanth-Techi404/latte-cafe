import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';

const Footer = () => {
    const quickLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About Us' },
        { to: '/menu', label: 'Our Menu' },
        { to: '/blog', label: 'Blog' },
        { to: '/contact', label: 'Contact' },
    ];

    const menuLinks = [
        { to: '/menu', label: 'Hot Coffee' },
        { to: '/menu', label: 'Cold Brews' },
        { to: '/menu', label: 'Snacks & Bites' },
        { to: '/menu', label: 'Desserts' },
        { to: '/menu', label: 'Special Drinks' },
    ];

    return (
        <footer className="footer" id="footer">
            <div className="footer-inner">
                {/* Brand */}
                <div className="footer-brand">
                    <Link to="/" className="nav-logo" style={{ fontSize: '2rem' }}>
                        ☕ Latte <span>Global</span>
                    </Link>
                    <p>
                        Where every cup tells a story and every moment is crafted with passion.
                        Experience the art of fine coffee at Latte Global, Visakhapatnam.
                    </p>
                    <div className="footer-social">
                        <a href="#" className="social-icon" id="footer-instagram" aria-label="Instagram">
                            <FiInstagram />
                        </a>
                        <a href="#" className="social-icon" id="footer-twitter" aria-label="Twitter">
                            <FiTwitter />
                        </a>
                        <a href="#" className="social-icon" id="footer-facebook" aria-label="Facebook">
                            <FiFacebook />
                        </a>
                        <a href="#" className="social-icon" id="footer-youtube" aria-label="YouTube">
                            <FiYoutube />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <div className="footer-col-title">Quick Links</div>
                    <ul className="footer-links">
                        {quickLinks.map((link) => (
                            <li key={link.to + link.label}>
                                <Link to={link.to}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Menu */}
                <div>
                    <div className="footer-col-title">Our Menu</div>
                    <ul className="footer-links">
                        {menuLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={link.to}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hours */}
                <div>
                    <div className="footer-col-title">Opening Hours</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {[
                            { day: 'Mon – Fri', time: '9 AM – 10 PM' },
                            { day: 'Saturday', time: '10 AM – 11 PM' },
                            { day: 'Sunday', time: '10 AM – 11 PM' },
                        ].map((h) => (
                            <div key={h.day} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem' }}>
                                <div style={{ color: 'var(--text-muted)' }}>{h.day}</div>
                                <div style={{ color: 'var(--gold-accent)', fontWeight: 500 }}>{h.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <span>© 2026 Latte Global. All rights reserved.</span>
                <span>Made with ☕ & ❤️ in Visakhapatnam</span>
            </div>
        </footer>
    );
};

export default Footer;
