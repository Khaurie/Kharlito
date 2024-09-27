// src/components/HeroSection.js
import React from 'react';
import heroImage from '../assets/images/hero-background.png';

const HeroSection = () => {
    return (
        <section style={styles.hero}>
            <h1 style={styles.title}>Welcome to Sasa Pet Shop</h1>
            <p style={styles.subtitle}>Your one-stop shop for all your pet needs.</p>
            <button style={styles.button}>Explore Now</button>
        </section>
    );
};

const styles = {
    hero: { 
        backgroundImage: `url(${heroImage})`, // Replace with your image URL
        backgroundSize: 'cover', // Ensures the image covers the entire section
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
        textAlign: 'center',
        padding: '200px 20px',
        marginTop: '80px', 
        borderRadius: '10px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
        color: 'white', // Make text white for better visibility on background image
    },
    title: {
        fontSize: '2.5rem',
        margin: '0 0 20px 0',
    },
    subtitle: {
        fontSize: '1.2rem',
        marginBottom: '30px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
    }
};

export default HeroSection;
