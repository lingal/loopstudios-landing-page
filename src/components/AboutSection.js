import './AboutSection.css';


const AboutSection = () => {
  const img = require('../images/mobile/image-interactive.jpg');
  return (
    <section className="about grid-container">
      <div className="about-img">
        <img src={img} alt="A man wearing VR headset" />
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
