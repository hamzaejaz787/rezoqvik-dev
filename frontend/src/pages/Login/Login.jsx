import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "./login.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  //Toggle password display
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  //Handle onchange events
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  //Send data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const URL = "http://localhost:8080/api/users/login";
      const res = await axios.post(URL, data);
      localStorage.setItem("user", res.data);
      navigate("/buyerdashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h3>Welcome Back</h3>
        <form className="login__container-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            placeholder="Email Address"
            required
          />

          <fieldset className="password_show">
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              onChange={handleChange}
              value={data.password}
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
            </a>
          </fieldset>

          <button className="btn" type="submit">
            Login
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
