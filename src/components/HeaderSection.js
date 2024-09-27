// src/components/HeadersSection.js
import React from 'react';

const HeadersSection = () => {
    return (
        <div style={styles.headers}>
            <h2 style={styles.header}>Our Services</h2>
             <p>Welcome to Sasa Pet Shop! We are your one-stop destination for all your pet’s needs, offering a wide range of products and services to keep your furry, feathered, or scaly friends happy and healthy. From high-quality pet food and accessories to grooming and veterinary services, we are dedicated to providing the best for your pets. Our knowledgeable staff is always here to offer personalized advice and recommendations, ensuring you find exactly what you’re looking for. At Sasa Pet Shop, we treat your pets like family and strive to create a welcoming environment for pet lovers of all kinds. Visit us today and experience the difference!</p>
        </div>
    );
};

const styles = {
    headers: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#e0e0e0'
    },
    header: {
        fontSize: '2rem',
        marginBottom: '20px'
    },
    icons: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    icon: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '150px'
    }
};

export default HeadersSection;
