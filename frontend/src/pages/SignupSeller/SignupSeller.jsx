import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerSeller, reset } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";
import "./signup-seller.css";

const SignupSeller = () => {
  const [data, setData] = useState({
    proImg: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const { proImg, firstName, lastName, email, password, cPassword } = data;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { seller, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess || seller) navigate("/sellerdashboard");

    dispatch(reset());
  }, [seller, isError, isSuccess, message, navigate, dispatch]);

  //Toggle password display
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match");
    } else {
      const sellerData = { proImg, firstName, lastName, email, password };

      dispatch(registerSeller(sellerData));
    }
  };

  if (isLoading) return <Spinner />;

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
