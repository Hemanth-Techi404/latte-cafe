import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        name: 'Priya Sharma',
        role: 'Food Blogger',
        text: 'Latte Global redefines what a café experience should be. The ambiance is phenomenal, the coffee is world-class, and the staff is incredibly warm. My go-to place in Vizag!',
        stars: 5,
        initial: 'P',
    },
    {
        name: 'Arjun Mehta',
        role: 'Tech Lead',
        text: 'Best cappuccino I\'ve ever had in Visakhapatnam. The interior is stunning — it feels like stepping into a European café. The cold brew is absolutely divine. Highly recommend!',
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
    {
        name: 'Vikram Rao',
        role: 'Business Owner',
        text: 'A perfect spot for morning meetings or a peaceful afternoon. The aromatic taste of their house blend is truly special. The best premium cafe in the city.',
        stars: 5,
        initial: 'V',
    }
];

const Reviews = () => {
    const sectionRef = useRef(null);
    const headRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: headRef.current, start: 'top 85%' }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="reviews-section" ref={sectionRef} id="reviews">
            <div className="reviews-container" ref={headRef}>
                <div style={{ textAlign: 'center' }}>
                    <span className="section-tag" style={{ justifyContent: 'center' }}>Testimonials</span>
                    <h2 className="section-title" style={{ textAlign: 'center' }}>
                        What Our Guests <em>Say</em>
                    </h2>
                    <div className="swipe-hint" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        color: 'var(--gold-accent)',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        marginTop: '1.25rem',
                        opacity: 0.5
                    }}>
                        <FiArrowLeft />
                        <span>Swipe to explore</span>
                        <FiArrowRight />
                    </div>
                </div>
            </div>

            <div className="reviews-slider-wrap">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="reviews-slider"
                >
                    {reviews.map((r, i) => (
                        <SwiperSlide key={i}>
                            <div className="review-card">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;
