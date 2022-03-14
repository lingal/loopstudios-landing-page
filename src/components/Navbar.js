const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={require('../images/logo.svg')} alt="loopstudios logo" />
      </div>
      <button className="hamburger-btn">
        <img src={require('../images/icon-hamburger.svg')} alt="hamburger" />
      </button>
      <div className="desktop-nav">
        <a href="">About</a>
        <a href="">Careers</a>
        <a href="">Events</a>
        <a href="">Products</a>
        <a href="">Support</a>
      </div>
    </nav>
  );
};

export default Navbar;
