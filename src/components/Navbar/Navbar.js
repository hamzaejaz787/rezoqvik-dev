import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <h3>Logo</h3>
        </Link>

        <ul className="navbar-lists">
          <li className="nav-links line">
            <Link to="/about">About</Link>
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
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
