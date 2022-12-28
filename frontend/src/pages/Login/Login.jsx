import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner/Spinner";
import "./login.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, seller, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);

    if ((isSuccess && user) || (isSuccess && seller)) {
      navigate("/");
    }

    dispatch(reset());
  }, [seller, user, isError, isSuccess, message, navigate, dispatch]);

  //Toggle password display
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //POST Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  if (isLoading) return <Spinner />;

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
              autoComplete="none"
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
