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
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: leftRef.current, start: 'top 85%' }
                }
            );
            gsap.fromTo(rightRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: rightRef.current, start: 'top 85%' }
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
                    <p className="section-desc">
                        We'd love to have you at our café. Drop by, call us, or send an email.
                        We're always happy to welcome you into the Latte Global family.
                    </p>

                    <div className="contact-details">
                        <a href="https://maps.app.goo.gl/VisakhapatnamLocation" target="_blank" rel="noreferrer" className="contact-item" id="contact-address">
                            <div className="contact-item-icon"><FiMapPin /></div>
                            <div>
                                <div className="contact-item-label">Address (Vizag)</div>
                                <div className="contact-item-value">
                                    MVP Double Rd, MVP Colony, Visakhapatnam, AP 530017
                                </div>
                            </div>
                        </a>

                        <a href="tel:+918912754444" className="contact-item" id="contact-phone">
                            <div className="contact-item-icon"><FiPhone /></div>
                            <div>
                                <div className="contact-item-label">Phone</div>
                                <div className="contact-item-value">+91 89127 54444</div>
                            </div>
                        </a>

                        <a href="mailto:hello@latteglobal.in" className="contact-item" id="contact-email">
                            <div className="contact-item-icon"><FiMail /></div>
                            <div>
                                <div className="contact-item-label">Email</div>
                                <div className="contact-item-value">hello@latteglobal.in</div>
                            </div>
                        </a>
                    </div>

                    <div className="opening-hours" id="opening-hours" style={{ marginTop: '2rem' }}>
                        <div className="hours-title">
                            <FiClock color="var(--gold-accent)" />
                            Opening Hours
                        </div>
                        <div className="hours-row">
                            <span className="hours-days">Mon – Fri</span>
                            <span className="hours-time">9:00 AM – 10:00 PM</span>
                        </div>
                        <div className="hours-row">
                            <span className="hours-days">Sat – Sun</span>
                            <span className="hours-time">10:00 AM – 11:00 PM</span>
                        </div>
                    </div>
                </div>

                {/* Right: Map & Message */}
                <div ref={rightRef}>
                    <div className="map-container" id="map-container">
                        <div className="map-preview-card" style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(rgba(28, 14, 8, 0.6), rgba(28, 14, 8, 0.6)), url("/map_static.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            textAlign: 'center',
                            padding: '2rem'
                        }}>
                            <div className="map-icon-pulse" style={{
                                width: '60px',
                                height: '60px',
                                background: 'var(--gold-accent)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--dark-brown)',
                                fontSize: '1.5rem',
                                marginBottom: '1.5rem',
                                boxShadow: '0 0 30px rgba(203, 161, 53, 0.4)'
                            }}>
                                <FiMapPin />
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--cream-white)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                                Find Us in Vizag
                            </h3>
                            <p style={{ fontSize: '0.85rem', color: 'rgba(245, 243, 239, 0.8)', marginBottom: '1.5rem', maxWidth: '250px' }}>
                                MVP Double Road, Sector 10, MVP Colony, Visakhapatnam
                            </p>
                            <a
                                href="https://www.google.com/maps/place/Latte+Global+Cafe/@17.7414699,83.3361308,16.79z/data=!4m6!3m5!1s0x3a3945885c239999:0x4beb73f6981b9c37!8m2!3d17.7396831!4d83.3418572!16s%2Fg%2F11vlw_ntkr?entry=ttu"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary"
                                style={{ minHeight: '44px', padding: '0.5rem 1.5rem' }}
                            >
                                <span>Get Directions</span>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-card" style={{
                        marginTop: '2rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(203, 161, 53, 0.1)',
                        borderRadius: '24px',
                        padding: '1.5rem',
                    }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--cream-white)', marginBottom: '1.25rem' }}>
                            Send a Message
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" placeholder="Name" className="newsletter-input" style={{ borderRadius: '12px' }} />
                            <input type="email" placeholder="Email" className="newsletter-input" style={{ borderRadius: '12px' }} />
                            <textarea placeholder="Message" rows={3} className="newsletter-input" style={{ borderRadius: '12px', resize: 'none' }} />
                            <button className="btn-primary" style={{ width: '100%', minHeight: '48px' }}>
                                <span>Send Message</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
