import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <h3>Rezoqvik</h3>
        </Link>

        <ul className="navbar-lists">
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
        </ul>

        <ul className="navbar-lists-mobile">
          <li className="nav-links">
            <HiMenu className="nav-toggle" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
