import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

import "./navbar.css";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState();
  //Get user role from localstorage and show navigation based on the role
  const data = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const { user, seller } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <h3>Rezoqvik</h3>
        </Link>

        {/* Desktop navbar */}
        <ul className="navbar-lists">
          {user || seller ? (
            <>
              {data.role === "buyer" ? (
                <>
                  <li className="nav-links line">
                    <Link to="/buyerdashboard">Dashboard</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-links line">
                    <Link to="/sellerdashboard">Dashboard</Link>
                  </li>
                </>
              )}

              <li className="nav-links line">
                <button className="sign-btn btn" onClick={onLogout}>
                  Log Out
                </button>
              </li>
            </>
          ) : (
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
          )}
        </ul>

        {/* Mobile Navbar */}
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
                <li className="nav-links line">
                  <Link to="/about">Learn More</Link>
                </li>
                <li className="nav-links line">
                  <Link to="/support">Support</Link>
                </li>
                {user || seller ? (
                  <>
                    {data.role === "buyer" ? (
                      <>
                        <li className="nav-links line">
                          <Link to="/buyerdashboard">Dashboard</Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-links line">
                          <Link to="/sellerdashboard">Dashboard</Link>
                        </li>
                      </>
                    )}
                    <li className="nav-links line">
                      <button className="sign-btn btn" onClick={onLogout}>
                        Log Out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-links line">
                      <Link to="/login">Log In</Link>
                    </li>
                    <li className="nav-links">
                      <Link to="/signup">
                        <button className="sign-btn btn">Sign Up</button>
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
