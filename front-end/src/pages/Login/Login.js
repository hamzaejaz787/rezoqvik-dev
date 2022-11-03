import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      navigate("/user");
      e.target.reset();
    } catch {
      setError("Failed to log in");
      console.log("Login unsuccessful");
    }

    setLoading(false);
  }

  return (
    <div className="login">
      <div className="login__container">
        <h3>Welcome Back</h3>
        {error && alert(error)}
        <form className="login__container-form" onSubmit={handleSubmit}>
          <input
            type="email"
            ref={emailRef}
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />

          <button className="btn" disabled={loading} type="submit">
            Log In
          </button>
        </form>

        <div className="login__container-forgot">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
