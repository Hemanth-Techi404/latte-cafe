import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const taglineRef = useRef(null);
    const titleLine1Ref = useRef(null);
    const titleLine2Ref = useRef(null);
    const subtitleRef = useRef(null);
    const actionsRef = useRef(null);
    const scrollHintRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.1 });

        // Background fade-in
        tl.fromTo(bgRef.current,
            { opacity: 0, scale: 1.1 },
            { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
        );

        // Parallax on scroll
        const handleScroll = () => {
            if (bgRef.current) {
                const scroll = window.scrollY;
                bgRef.current.style.transform = `translateY(${scroll * 0.4}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Hero entrance animations
        tl.fromTo(taglineRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
            '-=1.2'
        )
            .fromTo(titleLine1Ref.current,
                { opacity: 0, y: 80, skewY: 4 },
                { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power4.out' },
                '-=0.8'
            )
            .fromTo(titleLine2Ref.current,
                { opacity: 0, y: 80, skewY: 4 },
                { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power4.out' },
                '-=0.75'
            )
            .fromTo(subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
                '-=0.5'
            )
            .fromTo(actionsRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
                '-=0.4'
            )
            .fromTo(scrollHintRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.6, ease: 'power2.out' },
                '-=0.2'
            );

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleViewLocation = () => {
        window.open('https://www.google.com/maps/place/Latte+Global+Cafe/@17.7423334,83.3323055,17z/data=!3m1!4b1!4m6!3m5!1s0x3a394348618b17b5:0x875a6c6e7d8d8d8d!8m2!3d17.7423334!4d83.3348804!16s%2Fg%2F11sbxz9qhf', '_blank');
    };

    return (
        <section className="hero" ref={heroRef} id="hero">
            {/* Parallax Background */}
            <div
                className="hero-bg"
                ref={bgRef}
                style={{
                    backgroundImage: 'url("/hero sectio bg image.png")',
                    opacity: 0
                }}
            />
            <div className="hero-overlay" />

            {/* Content */}
            <div className="hero-content">
                <div className="hero-tagline" ref={taglineRef}>
                    Premium Artisan Café
                </div>

                <h1 className="hero-title">
                    <div
                        ref={titleLine1Ref}
                        style={{ opacity: 0, display: 'block', overflow: 'hidden' }}
                    >
                        Experience the
                    </div>
                    <div
                        ref={titleLine2Ref}
                        style={{ opacity: 0, display: 'block', overflow: 'hidden' }}
                    >
                        Taste of <em>Perfect Moments</em>
                    </div>
                </h1>

                <p className="hero-subtitle" ref={subtitleRef} style={{ opacity: 0 }}>
                    Where every cup tells a story and every bite creates a memory
                </p>

                <div className="hero-actions" ref={actionsRef} style={{ opacity: 0 }}>
                    <Link to="/menu" className="btn-primary" id="hero-view-menu">
                        <span>View Menu</span>
                        <FiArrowRight />
                    </Link>
                    <button
                        className="btn-location"
                        onClick={handleViewLocation}
                        id="hero-view-location"
                    >
                        <FiMapPin size={14} />
                        <span>View Location</span>
                    </button>
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="hero-scroll-hint" ref={scrollHintRef}>
                <span>Scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    );
};

export default Hero;
