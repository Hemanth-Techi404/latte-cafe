import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

const philosophyData = [
    { icon: '🌱', title: 'Fresh Ingredients', desc: 'We partner with local farms to source the freshest seasonal produce for every dish we create.' },
    { icon: '🔥', title: 'Quality Preparation', desc: 'Our chefs follow precise, time-honored techniques to ensure every item is prepared to perfection.' },
    { icon: '❤️', title: 'Chef\'s Passion', desc: 'Every recipe is a personal story. Our team pours love into every cup and plate served.' },
    { icon: '☕', title: 'Specialized Coffee', desc: 'From single-origin beans to custom roast profiles — we take coffee seriously.' },
];

const About = () => {
    const storyRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.fromTo('.about-anim',
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-story', start: 'top 80%' }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="about-section page-transition" id="about-page">
            {/* Hero Banner */}
            <div className="page-hero">
                <div>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold-accent)', marginBottom: '1rem' }}>
                        Our Story
                    </p>
                    <h1 className="page-hero-title">
                        About <em>Latte Global</em>
                    </h1>
                </div>
            </div>

            {/* Story Section */}
            <div className="about-story" ref={storyRef}>
                <div className="story-img about-anim">
                    <img src="/about_cafe.png" alt="Latte Global interior" />
                </div>
                <div className="about-anim">
                    <span className="section-tag">Our Story</span>
                    <h2 className="section-title">
                        Born from a <em>Love of Coffee</em>
                    </h2>
                    <div className="gold-divider" />
                    <p className="section-desc" style={{ marginBottom: '1rem' }}>
                        Latte Global was founded in 2018 by two friends who believed that great coffee
                        could transform ordinary days into extraordinary experiences. What started as a
                        tiny corner shop on MVP Double Road has grown into one of Visakhapatnam's most beloved café destinations.
                    </p>
                    <p className="section-desc" style={{ marginBottom: '1rem' }}>
                        Our founder, Aravind Kumar, spent years travelling across Ethiopia, Colombia,
                        and Vietnam to understand coffee at its roots. He returned with a vision:
                        to bring world-class coffee culture to India without losing the warmth of home.
                    </p>
                    <p className="section-desc">
                        Today, Latte Global serves over 500 customers daily, hosts weekend jazz evenings,
                        and continues to innovate with seasonal menus, specialty brews, and community events.
                    </p>
                </div>
            </div>

            {/* Philosophy */}
            <div style={{ background: 'var(--warm-black)', padding: '5rem 3rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="section-tag" style={{ justifyContent: 'center' }}>Philosophy</span>
                        <h2 className="section-title" style={{ textAlign: 'center' }}>
                            Our Food <em>Philosophy</em>
                        </h2>
                    </div>
                    <div className="philosophy-grid">
                        {philosophyData.map((p, i) => (
                            <div key={i} className="philosophy-card" id={`philosophy-${i}`}>
                                <div className="icon">{p.icon}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Moments */}
            <div style={{ padding: '5rem 3rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <span className="section-tag" style={{ justifyContent: 'center' }}>Moments</span>
                <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    Life is Better with <em>Good Coffee</em>
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {[
                        { emoji: '🎵', text: 'Weekend jazz evenings with live music' },
                        { emoji: '📚', text: 'Quiet nooks for work and reading' },
                        { emoji: '🤝', text: 'Community meetups & coffee workshops' },
                        { emoji: '🌅', text: 'Sunrise breakfast specials daily' },
                    ].map((m, i) => (
                        <div
                            key={i}
                            className="philosophy-card"
                            style={{ textAlign: 'center', padding: '2rem 1.5rem' }}
                            id={`moment-card-${i}`}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{m.emoji}</div>
                            <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                                {m.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <Reviews />
            <Footer />
        </div>
    );
};

export default About;
