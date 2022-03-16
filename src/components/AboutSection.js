import { useState, useEffect } from 'react';
import './AboutSection.css';
import mobile from '../images/mobile/image-interactive.jpg';
import desktop from '../images/desktop/image-interactive.jpg';

const AboutSection = () => {
  const [windowWdith, setWindowWidth] = useState(window.innerWidth);
  const image = windowWdith >= 850 ? desktop : mobile;

  useEffect(() => {
    const handlerWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handlerWindowWidth);

    return () => {
      window.addEventListener('resize', handlerWindowWidth);
    }
  });

  return (
    <section className="about grid-container">
      <div className="about-img">
        <img src={image} alt="A man wearing VR headset" />
      </div>
      <div className="about-text">
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
