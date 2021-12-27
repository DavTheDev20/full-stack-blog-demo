const NavBar = () => {
  return (
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
      <button className="hamburger-icon" onClick={() => console.log('Clicked')}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <ul className="hamburger-menu">
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
    </nav>
  );
};

export default NavBar;
