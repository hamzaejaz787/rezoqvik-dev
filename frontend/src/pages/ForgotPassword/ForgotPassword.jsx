import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./forgotpassword.css";

const ForgotPassword = () => {
  const emailRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className="forgot__password">
      <div className="forgot__password_container">
        <h3>Reset Password</h3>

        {error && alert(error)}
        {message && alert(message)}
        <form
          className="forgot__password_container-form"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            ref={emailRef}
            placeholder="Email Address"
            required
          />

          <button disabled={loading} type="submit">
            Recover Password
          </button>
        </form>

        <div className="forgot__password_container-signup">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
