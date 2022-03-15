import './Hamburger.css';

const Hamburger = () => {
  return (
    <button className="hamburger-btn">
      <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
        </g>
      </svg>
    </button>
  );
}

export default Hamburger;