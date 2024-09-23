import React, { useState } from 'react';
import aboutImage from '../assets/about.webp'; // Update the image path accordingly
import '../CSS/AboutSection.css';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

const AboutSection = () => {
  const [showFullText, setShowFullText] = useState(false);

  const paragraphText = 
    "Welcome to Ecoluxury, where tradition meets nature to create products that bring positivity and purity into your life. We specialize in manufacturing Sambrani Cups and Upla Cow Dung Cakes, made from the finest natural ingredients and indigenous cow dung, manufactured by Parag Kosurkar Industries.Our Upla cow dung cakes are carefully crafted using the waste of cows that roam freely in forests, grazing on fresh grass and leaves. These cakes are made with pure water and fresh cow dung, ensuring the highest quality. Traditionally used for performing Havan and fumigation, Upla has been praised for its ability to eliminate negative energies and purify the environment. The natural properties of these cow dung cakes also make them a powerful weapon against harmful bacteria and mosquitoes.In addition, Upla cow dung cakes can act as natural incense, eliminating foul odors, and even counter harmful rays from mobile phones. By using these cakes, you are not only embracing a healthier lifestyle but also supporting eco-friendly and sustainable practices.Our Sambrani Cups are another highlight of our product range, crafted with care to offer a rich, aromatic experience. Perfect for daily spiritual rituals, the burning of Sambrani Cups is known to purify the air, promote calmness, and create an atmosphere of tranquility in your home or workplace.At Ecoluxury, we take pride in using only natural and traditional processes to manufacture our products, ensuring they bring wellness, peace, and positive energy into your home. Thank you for choosing us to be part of your spiritual and environmental journey.";

  const truncatedText = truncateText(paragraphText, 300); // Adjust the maxLength as needed

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <img src={aboutImage} alt="About Us" className="about-main-img" />
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            {showFullText ? paragraphText : truncatedText}
            <span 
              onClick={() => setShowFullText(!showFullText)} 
              className="see-more-link"
            >
              {showFullText ? ' Show Less' : ' See More'}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
