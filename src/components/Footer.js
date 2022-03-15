import Logo from './Logo';
import SocialLinks from './SocialLinks';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer grid-container">

      <nav className="footer-nav grid-container">
          <Logo></Logo>
        
        <div className="nav-items">
          <a href="home">About</a>
          <a href="home">Careers</a>
          <a href="home">Events</a>
          <a href="home">Products</a>
          <a href="home">Support</a>
        </div>
      </nav>

      
      <div className="links">
        <SocialLinks></SocialLinks>
        <p> &copy; {year} Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
