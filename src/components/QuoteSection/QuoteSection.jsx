import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QuoteSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    const cards = [
        {
            icon: '✨',
            title: 'Make Your Moment',
            desc: 'Every visit to Latte Global is crafted to be a uniquely memorable experience, perfectly tailored for you.',
        },
        {
            icon: '🍽️',
            title: 'Delicious Food',
            desc: 'From artisan sandwiches to freshly baked pastries — our kitchen brings gourmet quality to every bite.',
        },
        {
            icon: '☕',
            title: 'Aromatic Taste',
            desc: 'Sourced from the world\'s finest estates, our coffee beans deliver an aroma and depth you\'ll crave.',
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading reveal
            gsap.fromTo(headingRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 85%',
                    }
                }
            );

            // Cards stagger
            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.fromTo(card,
                    { opacity: 0, scale: 0.95, y: 30 },
                    {
                        opacity: 1, scale: 1, y: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="quote-section" ref={sectionRef} id="quote-section">
            <div className="reviews-container">
                <h2 className="quote-heading" ref={headingRef}>
                    Be Ready for the <em>Best Moments</em>
                </h2>

                <div className="feature-cards">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="feature-card"
                            ref={(el) => (cardsRef.current[i] = el)}
                        >
                            <div className="feature-card-icon">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
