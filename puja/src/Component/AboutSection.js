import React, { useState } from 'react';
import aboutImage from '../assets/about.png'; // Ensure the image path is correct
import '../CSS/AboutSection.css';

const AboutSection = () => {
  const [showFullText, setShowFullText] = useState(false);

  const paragraphText = (
    <>
      <p>
        Welcome to Ecoluxury – Where Tradition Meets Nature. At Ecoluxury, we create products that enrich your spiritual journey and support a healthier, more sustainable lifestyle. Our mission is to bring positivity, purity, and eco-conscious luxury into your life through traditional, natural products. We specialize in Sambrani Cups and Upla Cow Dung Cakes, carefully handcrafted using the finest natural ingredients and indigenous cow dung, manufactured by Parag Kosurkar Industries.
      </p>
    </>
  );

  const whyChooseText = (
    <ul>
      <li><strong>Sustainability at Its Core:</strong> Our Upla cow dung cakes are made from freely grazing cows, supporting health and the environment.</li>
      <li><strong>Powerful Purification:</strong> Used in traditional rituals, Upla Cow Dung Cakes purify air and combat harmful bacteria and mosquitoes.</li>
      <li><strong>Natural Incense & Air Fresheners:</strong> Burning Upla cakes eliminates odors and blocks harmful rays from mobile phones.</li>
      <li><strong>A Healthier Lifestyle:</strong> Chemical-free and eco-friendly.</li>
      <li><strong>Rich Aromatic Experience with Sambrani Cups:</strong> Promotes peace and tranquility.</li>
      <li><strong>Handcrafted with Love and Tradition:</strong> Made with care for well-being and environmental wellness.</li>
      <li><strong>Supporting Eco-Friendly Practices:</strong> Supports sustainable practices for a healthier planet.</li>
    </ul>
  );

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <img src={aboutImage} alt="About Us" className="about-main-img" />
        <div className="about-text">
          <h1>About Us</h1>
          {paragraphText}
          <h2>Why Choose Ecoluxury?</h2>
          <div className="why-choose-text">
            {showFullText ? whyChooseText : <>{whyChooseText.props.children.slice(0, 4)}...</>}
            <span
              onClick={() => setShowFullText(!showFullText)}
              className="see-more-link"
            >
              {showFullText ? ' Show Less' : ' See More'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
