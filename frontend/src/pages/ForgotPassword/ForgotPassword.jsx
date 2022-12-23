import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./forgotpassword.css";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
  });

  const { email } = data;

  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess) toast.success(message);

    if (user) navigate("/");
  }, [user, navigate, isError, message, isSuccess]);

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="forgot__password">
      <div className="forgot__password_container">
        <h3>Reset Password</h3>

        <form
          className="forgot__password_container-form"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
            required
          />

          <button type="submit">Recover Password</button>
        </form>

        <div className="forgot__password_container-signup">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
