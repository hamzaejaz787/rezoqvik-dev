import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { register, reset } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";
import "./signup-buyer.css";

const SignupBuyer = () => {
  const [data, setData] = useState({
    proImg: "",
    role: "buyer",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const { proImg, role, firstName, lastName, email, password, cPassword } =
    data;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess || user) {
      navigate("/buyerdashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  //Toggle password display
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleImage = (e) => {
    setData((prevState) => ({
      ...prevState,
      proImg: e.target.files[0],
    }));
  };

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = new FormData();
      userData.append("proImg", proImg);
      userData.append("role", role);
      userData.append("firstName", firstName);
      userData.append("lastName", lastName);
      userData.append("email", email);
      userData.append("password", password);

      dispatch(register(userData));
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="signup">
        <div className="signup__container">
          <h3>Join Us to Hire Talent</h3>
          <form
            className="signup__container-form"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <input
              type="file"
              accept=".png, .jpeg, .jpg"
              name="proImg"
              onChange={handleImage}
            />
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={firstName}
              placeholder="First Name *"
              required
            />
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={lastName}
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="Business Email Address *"
              required
            />
            <fieldset className="password_show">
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                onChange={handleChange}
                value={password}
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
            <input
              type="password"
              name="cPassword"
              onChange={handleChange}
              value={cPassword}
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
    </>
  );
};

export default SignupBuyer;
