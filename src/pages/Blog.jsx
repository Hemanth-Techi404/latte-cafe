import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
    {
        id: 1,
        tag: 'Coffee Guide',
        title: 'The Best Coffee Types You Must Try in 2026',
        excerpt: 'From pour-overs to nitro cold brews — explore the world\'s most loved coffee styles and why each one is unique.',
        date: 'Feb 28, 2026',
        readTime: '5 min read',
        emoji: '☕',
    },
    {
        id: 2,
        tag: 'Café Culture',
        title: 'How Cafés Create the Perfect Atmosphere',
        excerpt: 'Lighting, music, aroma — the science behind why some cafés just feel magical while others don\'t.',
        date: 'Feb 20, 2026',
        readTime: '4 min read',
        emoji: '🏛️',
    },
    {
        id: 3,
        tag: 'Coffee 101',
        title: 'Espresso vs Coffee: The Real Difference',
        excerpt: 'Many people think espresso is just strong coffee. The truth is fascinating — and will change how you order forever.',
        date: 'Feb 12, 2026',
        readTime: '3 min read',
        emoji: '🫗',
    },
    {
        id: 4,
        tag: 'Food Pairing',
        title: 'Top 5 Snacks That Go Perfectly with Coffee',
        excerpt: 'Not all snacks are created equal. These are the perfect pairings that elevate your coffee experience.',
        date: 'Feb 5, 2026',
        readTime: '4 min read',
        emoji: '🍰',
    },
    {
        id: 5,
        tag: 'Sustainability',
        title: 'How We Source Our Single-Origin Beans',
        excerpt: 'We travel to farms, build relationships, and pay fair prices. Our coffee journey starts at the origin.',
        date: 'Jan 28, 2026',
        readTime: '6 min read',
        emoji: '🌱',
    },
    {
        id: 6,
        tag: 'Lifestyle',
        title: 'Building the Ultimate Home Coffee Setup',
        excerpt: 'Expert tips from our baristas on replicating café-quality coffee in your own kitchen.',
        date: 'Jan 15, 2026',
        readTime: '7 min read',
        emoji: '🏠',
    },
];

const Blog = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.fromTo('.blog-card',
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '#blog-grid', start: 'top 80%' }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="blog-page page-transition" id="blog-page">
            {/* Hero */}
            <div className="page-hero">
                <div>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold-accent)', marginBottom: '1rem' }}>
                        Stories & Insights
                    </p>
                    <h1 className="page-hero-title">
                        Café Stories & <em>Food Blogs</em>
                    </h1>
                </div>
            </div>

            {/* Featured Post */}
            <div style={{ maxWidth: '1300px', margin: '4rem auto 0', padding: '0 3rem' }}>
                <div
                    id="featured-post"
                    style={{
                        background: 'linear-gradient(135deg, var(--card-bg), var(--dark-brown))',
                        border: '1px solid rgba(203,161,53,0.25)',
                        borderRadius: '24px',
                        padding: '3rem',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '3rem',
                        alignItems: 'center',
                        cursor: 'pointer',
                        transition: 'border-color 0.3s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(203,161,53,0.5)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(203,161,53,0.25)'}
                >
                    <div
                        style={{
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, var(--coffee-brown), var(--dark-brown))',
                            height: '280px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '6rem',
                        }}
                    >
                        ✨
                    </div>
                    <div>
                        <span style={{ display: 'inline-block', background: 'rgba(203,161,53,0.15)', color: 'var(--gold-accent)', borderRadius: '50px', padding: '0.25rem 1rem', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-inter)', marginBottom: '1rem' }}>
                            Featured
                        </span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--cream-white)', lineHeight: 1.3, marginBottom: '1rem' }}>
                            The Art of the <em style={{ color: 'var(--gold-accent)' }}>Perfect Cup</em>
                        </h2>
                        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            In this deep dive, our head barista reveals the secrets behind every Latte Global coffee —
                            from bean selection and grind size to the precise temperature that extracts the perfect shot.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                            <span>March 1, 2026</span>
                            <span>•</span>
                            <span>8 min read</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="blog-grid" id="blog-grid">
                {blogPosts.map((post, i) => (
                    <div
                        key={post.id}
                        className="blog-card"
                        id={`blog-post-${post.id}`}
                        ref={(el) => (cardsRef.current[i] = el)}
                    >
                        <div className="blog-card-image">
                            {post.emoji}
                        </div>
                        <div className="blog-card-body">
                            <span className="blog-card-tag">{post.tag}</span>
                            <h3 className="blog-card-title">{post.title}</h3>
                            <p className="blog-card-excerpt">{post.excerpt}</p>
                            <div className="blog-card-meta">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Newsletter */}
            <div style={{ padding: '0 3rem' }}>
                <div className="newsletter-section" id="newsletter-section">
                    <span className="section-tag" style={{ justifyContent: 'center' }}>Newsletter</span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--cream-white)', marginBottom: '0.5rem' }}>
                        Stay in the <em style={{ color: 'var(--gold-accent)' }}>Loop</em>
                    </h2>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                        Subscribe to get the latest blog posts, seasonal menu updates, and exclusive offers.
                    </p>
                    <div className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email address..."
                            className="newsletter-input"
                            id="newsletter-email"
                        />
                        <button className="btn-primary" id="newsletter-submit">
                            <span>Subscribe</span>
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;
