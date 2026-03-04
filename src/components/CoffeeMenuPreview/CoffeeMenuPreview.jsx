import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const coffeeItems = [
    { name: 'Signature Cappuccino', desc: 'Velvety microfoam, rich espresso', price: '₹280' },
    { name: 'Single Origin Espresso', desc: 'Ethiopian Yirgacheffe, bold & fruity', price: '₹220' },
    { name: 'Classic Latte', desc: 'Creamy steamed milk, smooth espresso', price: '₹300' },
    { name: 'Cold Brew Delight', desc: '24-hour cold brew, chilled to perfection', price: '₹320' },
];

const CoffeeMenuPreview = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(imageRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out',
                    scrollTrigger: { trigger: imageRef.current, start: 'top 80%' }
                }
            );

            gsap.fromTo(textRef.current,
                { x: -60, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: textRef.current, start: 'top 80%' }
                }
            );

            itemsRef.current.forEach((item, i) => {
                if (!item) return;
                gsap.fromTo(item,
                    { x: -40, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 0.5, delay: i * 0.1, ease: 'power3.out',
                        scrollTrigger: { trigger: item, start: 'top 90%' }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="menu-preview" ref={sectionRef} id="coffee-preview">
            <div className="menu-preview-inner">
                {/* Text Side */}
                <div ref={textRef}>
                    <span className="section-tag">Coffee Collection</span>
                    <h2 className="section-title">Our Finest <em>Coffee</em></h2>
                    <div className="gold-divider" />
                    <p className="section-desc">
                        From single-origin espressos to hand-crafted lattes — each cup is a journey.
                    </p>
                    <ul className="menu-items-list">
                        {coffeeItems.map((item, i) => (
                            <li
                                key={i}
                                className="menu-item"
                                ref={(el) => (itemsRef.current[i] = el)}
                                id={`coffee-item-${i}`}
                            >
                                <div className="menu-item-info">
                                    <span className="menu-item-name">{item.name}</span>
                                    <span className="menu-item-desc">{item.desc}</span>
                                </div>
                                <span className="menu-item-price">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <Link to="/menu" className="btn-primary" id="view-coffee-menu" style={{ marginTop: '1.5rem' }}>
                        <span>View Full Menu</span>
                        <FiArrowRight />
                    </Link>
                </div>

                {/* Image Side */}
                <div className="menu-image-wrapper" ref={imageRef}>
                    <img src="/coffee_hero.png" alt="Premium coffee at Latte Global" />
                </div>
            </div>
        </section>
    );
};

export default CoffeeMenuPreview;
