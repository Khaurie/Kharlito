// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeadersSection from './components/HeaderSection';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <HeadersSection />
            <Footer />
        </div>
    );
}

export default App;
