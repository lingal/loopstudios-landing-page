import Hamburger from './Hamburger';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Hamburger />
      <div className="desktop-nav">
        <a href="none">About</a>
        <a href="none">Careers</a>
        <a href="none">Events</a>
        <a href="none">Products</a>
        <a href="none">Support</a>
      </div>
    </nav>
  );
};

export default Navbar;
