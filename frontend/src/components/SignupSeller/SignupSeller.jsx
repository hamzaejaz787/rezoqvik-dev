import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import "./signup-seller.css";

const SignupSeller = () => {
  // code for user registration
  const [data, setData] = useState({
    proImg: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
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

  //Send data to the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.cPassword) {
      toast.error("Passwords do not match!");
    } else {
      try {
        const URL = "http://localhost:8080/api/sellers";
        const res = await axios.post(URL, data);

        if (res.data) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }

        navigate("/sellerdashboard");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <h3>Sign Up to Find Work</h3>

        <form
          className="signup__container-form"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <input
            type="file"
            name="proImg"
            accept="image/png, image/jpeg"
            onChange={handleChange}
            value={data.proImg}
          />

          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
            placeholder="First Name *"
            required
          />
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
            placeholder="Last Name"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            placeholder="Email Address *"
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
            </a>{" "}
          </fieldset>
          <input
            type="password"
            name="cPassword"
            onChange={handleChange}
            value={data.cPassword}
            placeholder="Confirm Password *"
            required
          />

          <button type="submit">Sign Up</button>
        </form>
        <div className="signup__container-login">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};
export default SignupSeller;
