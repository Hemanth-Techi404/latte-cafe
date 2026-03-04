import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurMotive = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const statsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image parallax
            gsap.fromTo(imageRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 80%',
                    }
                }
            );

            // Subtle inner parallax on scroll
            ScrollTrigger.create({
                trigger: imageRef.current,
                start: 'top bottom',
                end: 'bottom top',
                onUpdate: (self) => {
                    if (imageRef.current) {
                        gsap.set(imageRef.current.querySelector('img'), {
                            y: self.progress * 30,
                        });
                    }
                }
            });

            // Text fade in
            gsap.fromTo(textRef.current,
                { x: 60, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 1, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 75%',
                    }
                }
            );

            // Stats count up
            statsRef.current.forEach((stat, i) => {
                if (!stat) return;
                gsap.fromTo(stat,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0, duration: 0.6,
                        delay: i * 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: stat,
                            start: 'top 90%',
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const stats = [
        { num: '6+', label: 'Years of Passion' },
        { num: '50k+', label: 'Happy Customers' },
        { num: '120+', label: 'Menu Items' },
        { num: '4.9★', label: 'Average Rating' },
    ];

    return (
        <section className="motive-section" ref={sectionRef} id="our-motive">
            <div className="motive-inner">
                {/* Image */}
                <div className="motive-image-wrap" ref={imageRef}>
                    <img src="/motive_image.png" alt="People enjoying coffee at Latte Global" />
                    <div className="motive-image-badge">
                        Est. 2018
                        <small>Bangalore, India</small>
                    </div>
                </div>

                {/* Text Content */}
                <div ref={textRef}>
                    <span className="section-tag">Our Motive</span>
                    <h2 className="section-title">
                        Crafted With <em>Passion,</em><br />Served With Love
                    </h2>
                    <div className="gold-divider" />
                    <p className="section-desc">
                        At Latte Global, we believe coffee is more than a beverage — it's an art form.
                        We source premium single-origin beans, roast them to perfection, and serve them
                        in an environment that feels like home.
                    </p>
                    <p className="section-desc" style={{ marginTop: '1rem' }}>
                        Our chefs curate seasonal menus using fresh local ingredients.
                        Whether it's a quiet morning cup or a lively brunch with friends,
                        we create spaces for life's beautiful moments.
                    </p>

                    <div className="motive-stats">
                        {stats.map((s, i) => (
                            <div
                                key={i}
                                className="motive-stat"
                                ref={(el) => (statsRef.current[i] = el)}
                                id={`stat-${i}`}
                            >
                                <div className="motive-stat-num">{s.num}</div>
                                <div className="motive-stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMotive;
