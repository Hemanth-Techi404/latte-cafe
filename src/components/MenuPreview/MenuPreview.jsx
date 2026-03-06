import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { FiArrowRight } from 'react-icons/fi';

const menuData = {
    coffee: [
        { name: 'Signature Cappuccino', desc: 'Velvety microfoam, rich espresso', price: '₹280' },
        { name: 'Single Origin Espresso', desc: 'Ethiopian Yirgacheffe, bold & fruity', price: '₹220' },
        { name: 'Classic Latte', desc: 'Creamy steamed milk, smooth espresso', price: '₹300' },
        { name: 'Cold Brew Delight', desc: '24-hour cold brew, chilled to perfection', price: '₹320' },
    ],
    snacks: [
        { name: 'Artisan Club Sandwich', desc: 'Triple-decker, fresh veggies, aioli', price: '₹380' },
        { name: 'Gourmet Burger', desc: 'Wagyu patty, onions, brioche', price: '₹480' },
        { name: 'Truffle Fries', desc: 'Hand-cut, parmesan, truffle oil', price: '₹280' },
        { name: 'Garlic Herb Bruschetta', desc: 'Toasted sourdough, fresh tomatoes', price: '₹220' },
    ],
    desserts: [
        { name: 'Belgian Choco Lava', desc: 'Warm gooey center, vanilla bean gelato', price: '₹350' },
        { name: 'New York Cheesecake', desc: 'Classic creamy cheese, berry compote', price: '₹320' },
        { name: 'Tiramisu Klasiko', desc: 'Espresso-soaked ladyfingers, mascarpone', price: '₹340' },
        { name: 'Hazelnut Brownie', desc: 'Double chocolate, roasted hazelnuts', price: '₹260' },
    ]
};

const MenuPreview = () => {
    const [activeTab, setActiveTab] = useState('coffee');
    const itemsRef = useRef([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        // Stagger entrance for current items
        gsap.fromTo(itemsRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', overwrite: true }
        );
    }, [activeTab]);

    return (
        <section className="menu-preview" ref={sectionRef} id="menu-preview">
            <div className="reviews-container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span className="section-tag">Menu Preview</span>
                    <h2 className="section-title">Explore Our <em>Delicacies</em></h2>
                </div>

                {/* Tabs */}
                <div className="category-tabs" style={{ marginBottom: '2.5rem' }}>
                    {Object.keys(menuData).map((tab) => (
                        <button
                            key={tab}
                            className={`category-tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="menu-items-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {menuData[activeTab].map((item, i) => (
                        <div
                            key={i}
                            className="menu-item"
                            ref={(el) => (itemsRef.current[i] = el)}
                        >
                            <div className="menu-item-info">
                                <span className="menu-item-name">{item.name}</span>
                                <span className="menu-item-desc">{item.desc}</span>
                            </div>
                            <span className="menu-item-price">{item.price}</span>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link to="/menu" className="btn-primary">
                        <span>View Full Menu</span>
                        <FiArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MenuPreview;
