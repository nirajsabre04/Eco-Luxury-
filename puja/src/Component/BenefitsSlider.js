import React from 'react'
import img1 from '../assets/8.webp'; // Update the image path accordingly
import img2 from '../assets/9.webp'; // Update the image path accordingly
import img3 from '../assets/13.webp'; // Update the image path accordingly
import img4 from '../assets/11.webp'; // Update the image path accordingly
import img5 from '../assets/12.webp'; // Update the image path accordingly
import img6 from '../assets/10.webp'; // Update the image path 
import '../CSS/AboutSection.css';

const BenefitsSlider = () => {
    return (
        <div>
            <div className="about-gallery">
                <div className="gallery-slider">
                    <div className="gallery-slide">
                        <div className="gallery-item"><img src={img1} alt="Gallery 1" /></div>
                        <div className="gallery-item"><img src={img2} alt="Gallery 2" /></div>
                        <div className="gallery-item"><img src={img3} alt="Gallery 3" /></div>
                    </div>
                    <div className="gallery-slide">
                        <div className="gallery-item image1"><img src={img4} alt="Gallery 4" /></div>
                        <div className="gallery-item"><img src={img5} alt="Gallery 5" /></div>
                        <div className="gallery-item"><img src={img6} alt="Gallery 6" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitsSlider
