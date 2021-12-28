import { useState } from 'react';

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <nav>
        <h3>Blog App</h3>
        <ul className="standard-menu">
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
        <button
          className="hamburger-icon"
          onClick={() =>
            setShowMobileMenu((prevValue) =>
              prevValue === true ? false : true
            )
          }
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </nav>
      <div
        className="mobile-menu"
        style={showMobileMenu ? { display: 'block' } : { display: 'none' }}
      >
        <ul>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
