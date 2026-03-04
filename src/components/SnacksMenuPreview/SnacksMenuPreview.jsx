import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const snacksItems = [
    { name: 'Artisan Club Sandwich', desc: 'Triple-decker, fresh veggies, aioli', price: '₹380' },
    { name: 'Gourmet Burger', desc: 'Wagyu patty, caramelized onions, brioche', price: '₹480' },
    { name: 'Truffle Fries', desc: 'Hand-cut, parmesan, truffle oil', price: '₹280' },
    { name: 'Garlic Herb Bruschetta', desc: 'Toasted sourdough, fresh tomatoes, basil', price: '₹220' },
];

const SnacksMenuPreview = () => {
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
                { x: 60, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: textRef.current, start: 'top 80%' }
                }
            );

            itemsRef.current.forEach((item, i) => {
                if (!item) return;
                gsap.fromTo(item,
                    { x: 40, opacity: 0 },
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
        <section className="menu-preview alt" ref={sectionRef} id="snacks-preview">
            <div className="menu-preview-inner reverse">
                {/* Image Side */}
                <div className="menu-image-wrapper" ref={imageRef}>
                    <img src="/snacks_preview.png" alt="Gourmet snacks at Latte Global" />
                </div>

                {/* Text Side */}
                <div ref={textRef}>
                    <span className="section-tag">Gourmet Snacks</span>
                    <h2 className="section-title">Crafted <em>Bites</em> & Snacks</h2>
                    <div className="gold-divider" />
                    <p className="section-desc">
                        Each snack is carefully crafted using fresh, locally sourced ingredients to
                        complement your perfect cup.
                    </p>
                    <ul className="menu-items-list">
                        {snacksItems.map((item, i) => (
                            <li
                                key={i}
                                className="menu-item"
                                ref={(el) => (itemsRef.current[i] = el)}
                                id={`snack-item-${i}`}
                            >
                                <div className="menu-item-info">
                                    <span className="menu-item-name">{item.name}</span>
                                    <span className="menu-item-desc">{item.desc}</span>
                                </div>
                                <span className="menu-item-price">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <Link to="/menu" className="btn-primary" id="view-snacks-menu" style={{ marginTop: '1.5rem' }}>
                        <span>Explore Snacks</span>
                        <FiArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SnacksMenuPreview;
