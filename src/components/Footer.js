// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2024 My Pet Shop. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#333',
        color: 'white'
    }
};

export default Footer;
