import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

// ─── Menu Data ───────────────────────────────────────────────
const menuSections = [
    {
        id: 'mains',
        label: 'Main S',
        icon: '🍽️',
        color: '#8B4513',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
        items: [
            { name: 'Grilled Chicken', desc: 'Herb-marinated, char-grilled to perfection', price: '₹320' },
            { name: 'Grilled Fish', desc: 'Lemon butter, fresh herbs, seasonal veggies', price: '₹360' },
            { name: 'Grilled Prawn', desc: 'Garlic chilli glaze, sautéed greens', price: '₹420' },
            { name: 'Chicken & Broccoli Stroganoff', desc: 'Creamy stroganoff sauce, served with bread', price: '₹340' },
            { name: 'Red Curry Jasmine Rice', desc: 'Thai red curry, coconut milk, jasmine rice', price: '₹280' },
            { name: 'Yellow Curry Jasmine Rice', desc: 'Mild yellow curry, turmeric rice', price: '₹280' },
        ],
    },
    {
        id: 'desserts',
        label: 'Desserts',
        icon: '🍰',
        color: '#C2185B',
        image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80',
        items: [
            { name: 'Sizzling Brownie', desc: 'Warm brownie, vanilla ice cream, chocolate sauce', price: '₹220' },
            { name: 'Walnut Brownie', desc: 'Rich dark chocolate, crunchy walnuts', price: '₹180' },
            { name: 'Strawberry Crimson', desc: 'Fresh strawberry parfait, cream layers', price: '₹200' },
            { name: 'Mango Crimson', desc: 'Alphonso mango, cream, caramel drizzle', price: '₹200' },
            { name: 'Classic Churros', desc: 'Cinnamon sugar churros, chocolate dip', price: '₹180' },
            { name: 'Exotic Fruit Bowl', desc: 'Seasonal exotic fruits, honey drizzle', price: '₹160' },
            { name: 'Tiramisu', desc: 'Authentic Italian, espresso-soaked', price: '₹250' },
            { name: 'Blueberry Cheesecake', desc: 'New York style, blueberry compote', price: '₹260' },
            { name: 'Biscoff Cheesecake', desc: 'Lotus biscoff base, velvety cream', price: '₹260' },
        ],
    },
    {
        id: 'mocktails',
        label: 'Mocktails',
        icon: '🍹',
        color: '#00897B',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80',
        items: [
            { name: 'Virgin Mojito', desc: 'Mint, lime, soda, sugar syrup', price: '₹160' },
            { name: 'Watermelon Mojito', desc: 'Fresh watermelon, mint, lime soda', price: '₹180' },
            { name: 'Strawberry Mojito', desc: 'Muddled strawberry, mint, lime', price: '₹180' },
            { name: 'Cucumber Basil Punch', desc: 'Refreshing cucumber, basil, lime', price: '₹160' },
            { name: 'Fresh Lime Soda', desc: 'Sweet or salted, chilled soda', price: '₹100' },
            { name: 'Orange Mojito', desc: 'Orange juice, mint, soda, zest', price: '₹160' },
            { name: 'Virgin Colorado', desc: 'Berry blend, citrus, sparkling water', price: '₹180' },
            { name: 'Fruit Punch', desc: 'Mixed tropical fruits, chilled', price: '₹160' },
        ],
    },
    {
        id: 'juice',
        label: 'Fresh Juice',
        icon: '🥤',
        color: '#F57C00',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80',
        items: [
            { name: 'Watermelon Juice', desc: 'Fresh cold-pressed, no added sugar', price: '₹120' },
            { name: 'Pineapple Juice', desc: 'Tropical fresh-squeezed', price: '₹130' },
            { name: 'Mango Juice', desc: 'Alphonso seasonal mango', price: '₹140' },
            { name: 'Orange Juice', desc: 'Fresh-squeezed, pulpy goodness', price: '₹120' },
        ],
    },
    {
        id: 'aerated',
        label: 'Aerated Drinks',
        icon: '🫧',
        color: '#1565C0',
        image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=800&q=80',
        items: [
            { name: 'Sprite', desc: 'Classic lemon-lime fizz, chilled', price: '₹80' },
            { name: 'Coke', desc: 'Refreshing cola, ice-cold', price: '₹80' },
            { name: 'Red Bull', desc: 'Energy drink, original flavour', price: '₹150' },
        ],
    },
    {
        id: 'coffee',
        label: 'Coffee & Signatures',
        icon: '☕',
        color: '#6F4E37',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
        items: [
            { name: 'Espresso Shot', desc: 'Pure single-origin ristretto shot', price: '₹120' },
            { name: 'Cappuccino', desc: 'Espresso, steamed milk, velvety foam', price: '₹200' },
            { name: 'Cafe Latte', desc: 'Double shot, creamy microfoam', price: '₹220' },
            { name: 'Americano', desc: 'Espresso & hot water, bold & clean', price: '₹180' },
            { name: 'Hot Mocha', desc: 'Espresso, chocolate, steamed milk', price: '₹240' },
            { name: 'Hot Chocolate', desc: 'Rich Belgian chocolate, steamed milk', price: '₹220' },
            { name: 'Mint Cappuccino', desc: 'Fresh mint syrup, foamy cappuccino', price: '₹240' },
            { name: 'Irish Cappuccino', desc: 'Hazelnut, espresso, silky milk foam', price: '₹260' },
            { name: 'Vanilla Hot Cappuccino', desc: 'Madagascar vanilla, espresso, foam', price: '₹250' },
        ],
    },
    {
        id: 'cold',
        label: 'Cold Blends',
        icon: '🧊',
        color: '#0288D1',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
        items: [
            { name: 'Iced Cappuccino', desc: 'Espresso over ice, cold milk', price: '₹220' },
            { name: 'Iced Cafe Latte', desc: 'Double shot, cold milk, ice', price: '₹240' },
            { name: 'Iced Americano', desc: 'Espresso, water, ice — bold', price: '₹200' },
            { name: 'Classic Cold Coffee', desc: 'Blended espresso, milk, ice', price: '₹200' },
            { name: 'Vietnamese Cold Coffee', desc: 'Condensed milk, strong drip, ice', price: '₹240' },
        ],
    },
    {
        id: 'frappe',
        label: 'Frappe',
        icon: '🥤',
        color: '#6A1B9A',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80',
        items: [
            { name: 'Chocolate Frappe', desc: 'Dark chocolate blend, whipped cream', price: '₹260' },
            { name: 'Hazelnut Frappe', desc: 'Ferrero rocher inspired frappe', price: '₹280' },
            { name: 'Caramel Frappe', desc: 'Caramel drizzle, espresso base', price: '₹260' },
            { name: 'Tiramisu Frappe', desc: 'Espresso, mascarpone, cocoa', price: '₹300' },
        ],
    },
    {
        id: 'shakes',
        label: 'Shakes',
        icon: '🧁',
        color: '#AD1457',
        image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80',
        items: [
            { name: 'Strawberry Shake', desc: 'Fresh strawberry, milk, ice cream', price: '₹220' },
            { name: 'Chocolate Shake', desc: 'Belgian chocolate, thick & creamy', price: '₹220' },
            { name: 'Oreo Shake', desc: 'Crushed Oreos, vanilla ice cream', price: '₹240' },
            { name: 'Caramel Popcorn', desc: 'Caramel shake, popcorn crunch topping', price: '₹260' },
            { name: 'Hazelnut Popcorn', desc: 'Hazelnut base, caramel popcorn', price: '₹260' },
            { name: 'Peanut Butter Chocolate', desc: 'Rich PB + dark chocolate fusion', price: '₹260' },
            { name: 'Chocolate Brownie', desc: 'Brownie chunks blended in shake', price: '₹280' },
            { name: 'Kit Kat Shake', desc: 'Kit Kat pieces, milk, vanilla', price: '₹260' },
            { name: 'Biscoff Shake', desc: 'Lotus biscoff, caramel, cream', price: '₹280' },
        ],
    },
    {
        id: 'bowls',
        label: 'Global Bowls',
        icon: '🌍',
        color: '#2E7D32',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
        items: [
            { name: 'Mexican Bowl', desc: 'Seasoned rice, beans, salsa, avocado, corn', price: '₹320' },
            { name: 'Korean Bowl', desc: 'Bibimbap-style, gochujang, sesame veggies', price: '₹340' },
            { name: 'Turkish Bowl', desc: 'Hummus, tabbouleh, grilled pita, olives', price: '₹320' },
            { name: 'Indonesian Bowl', desc: 'Nasi goreng style, satay sauce, egg', price: '₹340' },
            { name: 'Japanese Bowl', desc: 'Teriyaki, edamame, pickled ginger, rice', price: '₹360' },
        ],
    },
    {
        id: 'others',
        label: 'Others',
        icon: '🍵',
        color: '#4CAF50',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
        items: [
            { name: 'Strawberry Drink', desc: 'Fresh strawberry drink, chilled', price: '₹140' },
            { name: 'Hot Green Tea', desc: 'Premium green tea leaves, steamed', price: '₹100' },
            { name: 'Hot Lemon Tea', desc: 'Zesty lemon, honey, hot tea', price: '₹110' },
            { name: 'Hot Ginger Lemon Honey Tea', desc: 'Soothing blend of ginger, lemon & honey', price: '₹130' },
            { name: 'Lemon Ice Tea', desc: 'Cold-brewed, lemon infused', price: '₹140' },
            { name: 'Peach Ice Tea', desc: 'Peach syrup, cold-brewed black tea', price: '₹150' },
            { name: 'Watermelon Ice Tea', desc: 'Refreshing watermelon, iced tea', price: '₹150' },
        ],
    },
];

// ─── Single Section Component ────────────────────────────────
const MenuSection = ({ section, index }) => {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const listRef = useRef(null);

    const isEven = index % 2 === 0;

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section slide in
            gsap.fromTo(sectionRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
                }
            );

            // Image zoom in
            gsap.fromTo(imgRef.current,
                { scale: 1.08, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 1.1, ease: 'power3.out',
                    scrollTrigger: { trigger: imgRef.current, start: 'top 85%' },
                }
            );

            // List items stagger
            const items = listRef.current?.querySelectorAll('.mi-row');
            if (items) {
                gsap.fromTo(items,
                    { opacity: 0, x: isEven ? -30 : 30 },
                    {
                        opacity: 1, x: 0, duration: 0.5, stagger: 0.07, ease: 'power3.out',
                        scrollTrigger: { trigger: listRef.current, start: 'top 85%' },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, [isEven]);

    return (
        <section
            ref={sectionRef}
            id={`section-${section.id}`}
            className="ms-section"
            style={{ '--accent': section.color }}
        >
            <div className={`ms-inner ${isEven ? '' : 'ms-reverse'}`}>

                {/* ── Left: sticky image ── */}
                <div className="ms-img-col">
                    <div className="ms-img-wrap" ref={imgRef}>
                        <img
                            src={section.image}
                            alt={section.label}
                            loading="lazy"
                        />
                        <div className="ms-img-badge">
                            <span className="ms-badge-icon">{section.icon}</span>
                            <span className="ms-badge-label">{section.label}</span>
                        </div>
                    </div>
                </div>

                {/* ── Right: item list ── */}
                <div className="ms-list-col" ref={listRef}>
                    <div className="ms-list-head">
                        <span className="ms-cat-tag">{section.icon} {section.label}</span>
                        <h2 className="ms-title">{section.label}</h2>
                        <div className="ms-divider" style={{ background: section.color }} />
                    </div>

                    <ul className="ms-list">
                        {section.items.map((item, i) => (
                            <li key={i} className="mi-row" id={`item-${section.id}-${i}`}>
                                <div className="mi-info">
                                    <span className="mi-name">{item.name}</span>
                                    <span className="mi-desc">{item.desc}</span>
                                </div>
                                <div className="mi-right">
                                    <span className="mi-dots" />
                                    <span className="mi-price">{item.price}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
};


// ─── Tab Sidebar Nav ─────────────────────────────────────────
const TabNav = ({ active, onChange }) => (
    <nav className="ms-tabnav" id="menu-tabnav">
        {menuSections.map((s) => (
            <button
                key={s.id}
                id={`tabnav-${s.id}`}
                className={`ms-tabitem ${active === s.id ? 'ms-tabitem--active' : ''}`}
                style={{ '--accent': s.color }}
                onClick={() => {
                    onChange(s.id);
                    const el = document.getElementById(`section-${s.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
            >
                <span className="ms-tab-icon">{s.icon}</span>
                <span className="ms-tab-label">{s.label}</span>
            </button>
        ))}
    </nav>
);


// ─── Page ────────────────────────────────────────────────────
const Menu = () => {
    const [activeTab, setActiveTab] = useState('mains');

    useEffect(() => {
        window.scrollTo(0, 0);

        // Update active tab on scroll
        const observers = menuSections.map((s) => {
            const el = document.getElementById(`section-${s.id}`);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveTab(s.id); },
                { threshold: 0.35 }
            );
            obs.observe(el);
            return obs;
        });

        return () => observers.forEach((o) => o && o.disconnect());
    }, []);

    return (
        <div className="ms-page page-transition" id="menu-page">

            {/* ── Hero ── */}
            <div
                className="ms-hero"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80)' }}
            >
                <div className="ms-hero-overlay" />
                <div className="ms-hero-content">
                    <p className="ms-hero-tag">Latte Global</p>
                    <h1 className="ms-hero-title">Our <em>Full Menu</em></h1>
                    <p className="ms-hero-sub">Crafted with passion · Served with love</p>
                </div>
            </div>

            {/* ── Body: tab nav + sections ── */}
            <div className="ms-body">
                <TabNav active={activeTab} onChange={setActiveTab} />

                <div className="ms-sections">
                    {menuSections.map((s, i) => (
                        <MenuSection key={s.id} section={s} index={i} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Menu;
