import { Link } from "react-router-dom";
import { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [currentValue, setCurrentValue] = useState("");

  function handleOnChange(e) {
    setCurrentValue(e.target.value);
  }

  return (
    <div className="signup">
      <div className="signup__container">
        <h3>
          Sign Up as a client or
          <br />a worker
        </h3>

        <div className="signup__container_options">
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
              //Route to the appropriate page based on current checked button
              currentValue === "Seller"
                ? "/signupseller"
                : currentValue === "Buyer"
                ? "/signupbuyer"
                : ""
            }
            className="btn"
          >
            {
              //Change button based on selected option
              currentValue === "Buyer"
                ? "Create Account As Buyer"
                : currentValue === "Seller"
                ? "Sign Up As Seller"
                : "Sign Up"
            }
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;
