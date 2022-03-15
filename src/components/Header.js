import Navbar from './Navbar';
import Heading from './Heading';
import './Header.css';

const Header = () => {
  return (
    <header className="header grid-container">
      <Navbar></Navbar>
      <Heading></Heading>
    </header>
  );
};

export default Header;
