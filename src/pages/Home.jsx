import React from 'react';
import Hero from '../components/Hero/Hero';
import QuoteSection from '../components/QuoteSection/QuoteSection';
import OurMotive from '../components/OurMotive/OurMotive';
import MenuPreview from '../components/MenuPreview/MenuPreview';
import Reviews from '../components/Reviews/Reviews';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <main className="page-transition">
            <Hero />
            <QuoteSection />
            <OurMotive />
            <MenuPreview />
            <Reviews />
            <ContactSection />
            <Footer />
        </main>
    );
};

export default Home;
