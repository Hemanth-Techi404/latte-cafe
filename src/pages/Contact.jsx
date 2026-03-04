import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-transition" id="contact-page">
            <div className="page-hero">
                <div>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold-accent)', marginBottom: '1rem' }}>
                        Reach Us
                    </p>
                    <h1 className="page-hero-title">
                        Get in <em>Touch</em>
                    </h1>
                </div>
            </div>
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Contact;
