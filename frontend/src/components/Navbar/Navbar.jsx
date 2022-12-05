import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./navbar.css";

const Menu = () => (
  <>
    <li className="nav-links line">
      <Link to="/about">Learn More</Link>
    </li>
    <li className="nav-links line">
      <Link to="/support">Support</Link>
    </li>
    <li className="nav-links line">
      <Link to="/login">Log In</Link>
    </li>
    <li className="nav-links">
      <Link to="/signup">
        <button className="sign-btn btn">Sign Up</button>
      </Link>
    </li>
  </>
);

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState();

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <h3>Rezoqvik</h3>
        </Link>

        <ul className="navbar-lists">
          <Menu />
        </ul>

        <div className="navbar-lists-mobile">
          <li className="nav-links">
            {toggleNav ? (
              <RiCloseLine
                className="nav-toggle nav-toggle-close"
                onClick={() => setToggleNav(false)}
              />
            ) : (
              <RiMenu3Line
                className="nav-toggle "
                onClick={() => setToggleNav(true)}
              />
            )}
          </li>
          {toggleNav && (
            <div className="navbar__lists_container pop-up-left">
              <div className="navbar__lists_container-menu">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
