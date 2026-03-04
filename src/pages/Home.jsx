import React from 'react';
import Hero from '../components/Hero/Hero';
import QuoteSection from '../components/QuoteSection/QuoteSection';
import OurMotive from '../components/OurMotive/OurMotive';
import Reviews from '../components/Reviews/Reviews';
import CoffeeMenuPreview from '../components/CoffeeMenuPreview/CoffeeMenuPreview';
import SnacksMenuPreview from '../components/SnacksMenuPreview/SnacksMenuPreview';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <main className="page-transition">
            <Hero />
            <QuoteSection />
            <OurMotive />
            <Reviews />
            <CoffeeMenuPreview />
            <SnacksMenuPreview />
            <ContactSection />
            <Footer />
        </main>
    );
};

export default Home;
