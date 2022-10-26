import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./navbar.css";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    minWidth: "450px",
    minHeight: "350px",
    padding: "2em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    transform: "translate(-50%, -50%)",
    border: "none",
    boxShadow: "0 0px 18px rgba(0, 0, 0, 0.2)",
  },
};

const Navbar = () => {
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");

  const openModal = () => {
    setIsOpen((state) => !state);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function handleOnChange(e) {
    setCurrentValue(e.target.value);
  }

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
          <li className="nav-links">
            <Link>
              <button className="sign-btn btn" onClick={openModal}>
                Sign Up
              </button>
            </Link>
          </li>
        </ul>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={openModal}
          aria-labelledby="source-type-dialog-label"
          style={customStyles}
        >
          <div className="modal__container-header">
            <h2>Sign Up</h2>
            <button onClick={closeModal} className="btn">
              Close
            </button>
          </div>

          <div className="modal__container_options">
            <h3>Sign Up as a client or a worker</h3>

            <div className="modal__container_options-wrapper">
              <ul>
                <li className="sign-up-input">
                  <input
                    type="radio"
                    id="seller"
                    value="Seller"
                    name="sign-up-user"
                    onChange={handleOnChange}
                  />
                  <label htmlFor="seller">Sign Up As Seller</label>
                </li>

                <li className="sign-up-input">
                  <input
                    type="radio"
                    id="buyer"
                    value="Buyer"
                    name="sign-up-user"
                    onChange={handleOnChange}
                  />
                  <label htmlFor="buyer">Sign Up As Buyer</label>
                </li>
              </ul>

              <Link
                to={
                  currentValue === "Buyer"
                    ? "signupseller"
                    : currentValue === "Seller"
                    ? "signup"
                    : ""
                }
                className="btn"
              >
                Create Account
                {currentValue === "Buyer"
                  ? " As Buyer"
                  : currentValue === "Seller"
                  ? " As Seller"
                  : ""}
              </Link>
            </div>
          </div>
        </Modal>
      </nav>
    </>
  );
};

export default Navbar;
