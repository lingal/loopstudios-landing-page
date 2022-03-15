import logoSvg from '../images/logo.svg';
import './Logo.css';


const Logo = () => {
  return (
    <div className="nav-logo">
      <img src={logoSvg} alt="" />
    </div>
  );
};


export default Logo;
