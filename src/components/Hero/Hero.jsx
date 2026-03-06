import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const taglineRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const actionsRef = useRef(null);
    const scrollHintRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.1 });

            // Background slow zoom animation
            gsap.fromTo(bgRef.current,
                { scale: 1.2 },
                {
                    scale: 1,
                    duration: 10,
                    ease: 'power1.inOut',
                    repeat: -1,
                    yoyo: true
                }
            );

            // Initial appearance
            gsap.set([taglineRef.current, titleRef.current, subtitleRef.current, actionsRef.current], {
                opacity: 0,
                y: 40
            });

            tl.to(bgRef.current, { opacity: 1, duration: 1.5 })
                .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=1")
                .to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }, "-=0.6")
                .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
                .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=0.6")
                .fromTo(scrollHintRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");

            // Button pulse animation
            gsap.to(".btn-pulse", {
                scale: 1.05,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const handleViewLocation = () => {
        window.open('https://www.google.com/maps/place/Latte+Global+Cafe/@17.7414699,83.3361308,16.79z/data=!4m6!3m5!1s0x3a3945885c239999:0x4beb73f6981b9c37!8m2!3d17.7396831!4d83.3418572!16s%2Fg%2F11vlw_ntkr?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D', '_blank');
    };

    return (
        <section className="hero" ref={heroRef} id="hero">
            <div
                className="hero-bg"
                ref={bgRef}
                style={{
                    backgroundImage: 'url("/hero_section_bg.png")',
                    opacity: 0
                }}
            />
            <div className="hero-overlay" />

            <div className="hero-content">
                <div className="hero-tagline" ref={taglineRef}>
                    Premium Artisan Café
                </div>

                <h1 className="hero-title" ref={titleRef}>
                    Experience the <em>Taste of Perfect Moments</em>
                </h1>

                <p className="hero-subtitle" ref={subtitleRef}>
                    Where every cup tells a story and every bite creates a memory
                </p>

                <div className="hero-actions" ref={actionsRef}>
                    <Link to="/menu" className="btn-primary btn-pulse" id="hero-view-menu">
                        <span>View Menu</span>
                        <FiArrowRight />
                    </Link>
                    <button
                        className="btn-outline"
                        onClick={handleViewLocation}
                        id="hero-view-location"
                    >
                        <FiMapPin />
                        <span>Book Table</span>
                    </button>
                </div>
            </div>

            <div className="hero-scroll-hint" ref={scrollHintRef}>
                <span>Explore</span>
                <div className="scroll-line" />
            </div>
        </section>
    );
};

export default Hero;
