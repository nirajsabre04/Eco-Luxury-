import React from 'react';
import flipkart from '../assets/flipkart.png';
import amazon from '../assets/amazon.png';
import meesho from '../assets/meesho.png';
import shopify from '../assets/shopify.png';

const AlsoAvailable = () => {
  const styles = {
    container: {
      textAlign: 'center',
      padding: '20px 0',
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      position: 'relative',
    },
    underline: {
      display: 'block',
      width: '100px',
      height: '4px',
      backgroundColor: '#ff6600',
      margin: '8px auto 20px',
    },
    logosContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
    },
    logoItem: {
      maxWidth: '120px',
      height: 'auto',
      transition: 'transform 0.3s ease',
    },
    logoHover: {
      transform: 'scale(1.1)',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Also Available In
        <span style={styles.underline}></span>
      </h2>
      <div style={styles.logosContainer}>
        <div className="logo-item">
          <img
            src={flipkart}
            alt="Flipkart"
            style={styles.logoItem}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </div>
        <div className="logo-item">
          <img
            src={amazon}
            alt="Zepto"
            style={styles.logoItem}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </div>
        <div className="logo-item">
          <img
            src={meesho}
            alt="Swiggy"
            style={styles.logoItem}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </div>
        <div className="logo-item">
          <img
            src={shopify}
            alt="Amazon"
            style={styles.logoItem}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </div>
    
      </div>
    </div>
  );
};

export default AlsoAvailable;
