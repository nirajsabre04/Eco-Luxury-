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
    "Cow dung cakes, which are manufactured by Gau Mata Seva Aashram, are made from indigenous cow dung. They are best for performing Havan and Fumigation. The use of these cow-dung cakes can eliminate negative energies from your house and bring positive energies. These cow-dung cakes have also proved to be a powerful weapon for killing harmful bacteria. They are prepared using the waste of cows that roam around in forests and graze on fresh grass and leaves. Pure water and fresh cow dung are used to manufacture these cow-dung cakes. Using these cow-dung cakes in fumigation can repel bacteria and mosquitoes. It also acts as incense and can eliminate foul odor. It fights against harmful rays from mobile phones. The combustion of most fuels releases carbon dioxide, but fumigating with cow-dung cakes does not release carbon dioxide. Ethylene and Formalin are found in cow dung. When the cow-dung cakes are burnt, both these compounds turn into gas. This gas is sprayed in operation theaters by doctors to kill bacteria from the atmosphere. It also prevents organs from getting infected by fungi during operations. Burning shudh cow-dung gobar cakes does not cause eye irritation or teary eyes. Thus, we should use these cow dung cakes for performing Havan, puja, agnihotra, burning Holi, worshipping, and cooking food.";

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
