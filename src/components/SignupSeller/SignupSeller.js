import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./signup-seller.css";

const SignupSeller = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const picRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      navigate("/sellerdashboard");
    } catch {
      setError(`Failed to create an account. ${error}`);
    }

    setLoading(false);
  }

  return (
    <div className="signup">
      <div className="signup__container">
        <h3>Sign Up to Find Work</h3>

        {error && alert(error)}

        <form
          className="signup__container-form"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="file"
            accept="image/png, image/jpeg"
            ref={picRef}
            onChange={handleChange}
          />

          <input
            type="text"
            ref={fnameRef}
            placeholder="First Name *"
            required
          />
          <input type="text" ref={lnameRef} placeholder="Last Name" />
          <input
            type="email"
            ref={emailRef}
            placeholder="Email Address *"
            required
          />
          <fieldset className="password_show">
            <input
              type={passwordShown ? "text" : "password"}
              ref={passwordRef}
              placeholder="Password"
              required
            />
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
            <a onClick={togglePassword} className="password_show-icon">
              {passwordShown ? (
                <FaEyeSlash className="icon-active" />
              ) : (
                <FaEye />
              )}
            </a>{" "}
          </fieldset>
          <input
            type="password"
            ref={confirmPasswordRef}
            placeholder="Confirm Password *"
            required
          />

          <button disabled={loading} type="submit">
            Sign Up
          </button>
        </form>
        <div className="signup__container-login">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};
export default SignupSeller;
