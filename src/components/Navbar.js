// src/components/Navbar.js
import React from 'react';

// SVG icons for the Navbar
const icons = {
    user: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM12 10C10.346 10 9 8.654 9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7C15 8.654 13.654 10 12 10Z" fill="#000" />
            <path d="M12 14C8.691 14 4 15.692 4 19C4 19.553 4.447 20 5 20H19C19.553 20 20 19.553 20 19C20 15.692 15.309 14 12 14ZM6.128 18C6.999 16.811 9.748 16 12 16C14.252 16 17.001 16.811 17.872 18H6.128Z" fill="#000" />
        </svg>
    ),
    contacts: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 4C16.411 4 20 7.589 20 12C20 12.34 19.96 12.673 19.888 13H17.535L15.535 9H8.465L6.465 13H4.112C4.04 12.673 4 12.34 4 12C4 7.589 7.589 4 12 4ZM12 20C9.944 20 8.067 19.264 6.648 18H17.352C15.933 19.264 14.056 20 12 20Z" fill="#000" />
        </svg>
    ),
    booking: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H18V2H16V4H8V2H6V4H4C2.897 4 2 4.897 2 6V20C2 21.103 2.897 22 4 22H20C21.103 22 22 21.103 22 20V6C22 4.897 21.103 4 20 4ZM4 20V10H20L20.002 20H4ZM20 8H4V6H20.002L20 8Z" fill="#000" />
        </svg>
    ),
    addToCart: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.28 16H8.72L7.16 12H19L16.28 16ZM17.84 14H9.88L11.28 10H17.16L17.84 14ZM19 4H5V6H4V8H2V10H3.6L5 16H6.52L7.6 19H16.4L17.48 16H19L20.4 10H22V8H20V6H19V4Z" fill="#000" />
        </svg>
    )
};

// Navbar Component
const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo}>My Pet Shop</h1>
            <ul style={styles.navList}>
                <li style={styles.navItem}><a style={styles.navLink} href="#home">Home</a></li>
                <li style={styles.navItem}><a style={styles.navLink} href="#about">About</a></li>
                <li style={styles.navItem}><a style={styles.navLink} href="#services">Services</a></li>
                <li style={styles.navItem}><a style={styles.navLink} href="#contact">Contact</a></li>
            </ul>
            <ul style={styles.iconList}>
                <li style={styles.iconItem}>{icons.user}</li>
                <li style={styles.iconItem}>{icons.contacts}</li>
                <li style={styles.iconItem}>{icons.booking}</li>
                <li style={styles.iconItem}>{icons.addToCart}</li>
            </ul>
        </nav>
    );
};

// Glassmorphism styles for the Navbar
const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 10px',
        background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
        backdropFilter: 'blur(10px)', // Blur effect for glassmorphism
        borderRadius: '15px', // Rounded corners
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
        position: 'fixed',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        zIndex: 1000,
        color: 'white',
    },
    logo: {
        margin: 0,
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: 'black'
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    navItem: {
        margin: '0 15px',
        fontSize: '1.1rem',
        color: 'black',
    },
    navLink: {
        color: 'black',
        textDecoration: 'none',
    },
    iconList: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    iconItem: {
        margin: '0 15px',
        cursor: 'pointer',
    }
};

export default Navbar;
