import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(leftRef.current,
                { x: -60, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: leftRef.current, start: 'top 75%' }
                }
            );
            gsap.fromTo(rightRef.current,
                { x: 60, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: rightRef.current, start: 'top 75%' }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="contact-section" ref={sectionRef} id="contact">
            <div className="contact-inner">
                {/* Left: Details */}
                <div ref={leftRef}>
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="section-title">Visit Us & <em>Say Hello</em></h2>
                    <div className="gold-divider" />
                    <p className="section-desc">
                        We'd love to have you at our café. Drop by, call us, or send an email.
                        We're always happy to welcome you into the Latte Global family.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item" id="contact-address">
                            <div className="contact-item-icon"><FiMapPin /></div>
                            <div>
                                <div className="contact-item-label">Address</div>
                                <div className="contact-item-value">
                                    MVP Double Rd, near Mango Hyundai Showroom,<br />Sector 10, MVP Colony, Visakhapatnam, AP 530017
                                </div>
                            </div>
                        </div>

                        <div className="contact-item" id="contact-phone">
                            <div className="contact-item-icon"><FiPhone /></div>
                            <div>
                                <div className="contact-item-label">Phone</div>
                                <div className="contact-item-value">+91 89127 01234</div>
                            </div>
                        </div>

                        <div className="contact-item" id="contact-email">
                            <div className="contact-item-icon"><FiMail /></div>
                            <div>
                                <div className="contact-item-label">Email</div>
                                <div className="contact-item-value">hello@latteglobal.in</div>
                            </div>
                        </div>
                    </div>

                    <div className="opening-hours" id="opening-hours">
                        <div className="hours-title">
                            <FiClock color="var(--gold-accent)" />
                            Opening Hours
                        </div>
                        <div className="hours-row">
                            <span className="hours-days">Monday – Friday</span>
                            <span className="hours-time">9:00 AM – 10:00 PM</span>
                        </div>
                        <div className="hours-row">
                            <span className="hours-days">Saturday</span>
                            <span className="hours-time">10:00 AM – 11:00 PM</span>
                        </div>
                        <div className="hours-row">
                            <span className="hours-days">Sunday</span>
                            <span className="hours-time">10:00 AM – 11:00 PM</span>
                        </div>
                    </div>
                </div>

                {/* Right: Map */}
                <div ref={rightRef}>
                    <div className="map-container" id="map-container">
                        <div className="map-placeholder">
                            <span className="map-icon">📍</span>
                            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--cream-white)', marginBottom: '0.5rem' }}>
                                Latte Global Café
                            </p>
                            <p style={{ fontSize: '0.85rem' }}>MVP Double Road, Visakhapatnam</p>
                            <a
                                href="https://www.google.com/maps/place/Latte+Global+Cafe/@17.7414699,83.3361308,16.79z/data=!4m6!3m5!1s0x3a3945885c239999:0x4beb73f6981b9c37!8m2!3d17.7396831!4d83.3418572!16s%2Fg%2F11vlw_ntkr?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary"
                                style={{ marginTop: '1.5rem' }}
                                id="open-maps-btn"
                            >
                                <span>Open in Google Maps</span>
                                <FiMapPin />
                            </a>
                        </div>
                    </div>

                    {/* Quick Contact Form */}
                    <div style={{
                        marginTop: '2rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(203, 161, 53, 0.15)',
                        borderRadius: '20px',
                        padding: '2rem',
                    }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--cream-white)', marginBottom: '1.25rem' }}>
                            Send a Message
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                id="contact-name"
                                className="newsletter-input"
                                style={{ borderRadius: '10px' }}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                id="contact-email-input"
                                className="newsletter-input"
                                style={{ borderRadius: '10px' }}
                            />
                            <textarea
                                placeholder="Your Message"
                                id="contact-message"
                                rows={4}
                                className="newsletter-input"
                                style={{ borderRadius: '10px', resize: 'vertical' }}
                            />
                            <button className="btn-primary" id="contact-submit" style={{ alignSelf: 'flex-start' }}>
                                <span>Send Message</span>
                                <FiMail />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
