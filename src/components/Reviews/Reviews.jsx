import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        name: 'Priya Sharma',
        role: 'Food Blogger',
        text: 'Latte Global redefines what a café experience should be. The ambiance is phenomenal, the coffee is world-class, and the staff is incredibly warm. My go-to place every weekend!',
        stars: 5,
        initial: 'P',
    },
    {
        name: 'Arjun Mehta',
        role: 'Software Engineer',
        text: 'Best cappuccino I\'ve ever had in Bangalore. The interior is stunning — it feels like stepping into a European café. The cold brew is absolutely divine. Highly recommend!',
        stars: 5,
        initial: 'A',
    },
    {
        name: 'Sneha Iyer',
        role: 'Marketing Lead',
        text: 'Every detail at Latte Global is thoughtfully curated. From the latte art to the playlist — pure excellence. The avocado toast + cold brew combo is unbeatable.',
        stars: 5,
        initial: 'S',
    },
];

const Reviews = () => {
    const sectionRef = useRef(null);
    const headRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: headRef.current, start: 'top 80%' }
                }
            );

            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.fromTo(card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: 'power3.out',
                        scrollTrigger: { trigger: card, start: 'top 88%' }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="reviews-section" ref={sectionRef} id="reviews">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }} ref={headRef}>
                <div style={{ textAlign: 'center' }}>
                    <span className="section-tag" style={{ justifyContent: 'center' }}>Testimonials</span>
                    <h2 className="section-title" style={{ textAlign: 'center' }}>
                        What Our Guests <em>Say</em>
                    </h2>
                </div>
            </div>
            <div className="reviews-grid">
                {reviews.map((r, i) => (
                    <div
                        key={i}
                        className="review-card"
                        ref={(el) => (cardsRef.current[i] = el)}
                        id={`review-card-${i}`}
                    >
                        <div className="review-stars">
                            {Array.from({ length: r.stars }).map((_, j) => (
                                <FaStar key={j} />
                            ))}
                        </div>
                        <p className="review-text">{r.text}</p>
                        <div className="review-author">
                            <div className="review-avatar">{r.initial}</div>
                            <div>
                                <div className="review-author-name">{r.name}</div>
                                <div className="review-author-role">{r.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
