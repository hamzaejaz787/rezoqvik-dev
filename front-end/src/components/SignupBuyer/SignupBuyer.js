import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./signup-buyer.css";

const SignupBuyer = () => {
  // const fnameRef = useRef();
  // const lnameRef = useRef();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const confirmPasswordRef = useRef();
  // const picRef = useRef();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const [file, setFile] = useState("");
  // const [passwordShown, setPasswordShown] = useState(false);
  // const navigate = useNavigate();

  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };

  // function handleChange(e) {
  //   setFile(e.target.files[0]);
  // }

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   if (passwordRef.current.value !== confirmPasswordRef.current.value) {
  //     return setError("Passwords do not match");
  //   }

  //   try {
  //     setError("");
  //     setLoading(true);

  //     navigate("/buyerdashboard");
  //   } catch {
  //     setError(`Failed to create an account. ${error}`);
  //   }

  //   setLoading(false);
  // }

  const [data,setData]= useState({
    proImg:"",
    firstName:"",
    lastName: "",
    email: "",
    password: "",
    cPassword:"",
  
  });
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
      setPasswordShown(!passwordShown);
     };
  const [error,setError]=useState("");
  const navigate= useNavigate();
  const handleChange = ({currentTarget:input}) =>{
    setData({...data, [input.name]: input.value});
  };
  const handleSubmit= async(e)=>{           
    e.preventDefault();
    if (data.password!== data.cPassword) {
      alert('Password does not match');
    }
    else{
      try {
        const url ="http://localhost:8080/api/buy_users";
       
        const {data: res}= await axios.post(url,data);  
        setError("");
       setLoading(true); 
        navigate("/buyerdashboard");          
        console.log(res.message);
        
      } catch (error) {
        console.log(error);
      }
    }      
   
  }

  return (
    <>
      <div className="signup">
        <div className="signup__container">
          <h3>Join Us to Hire Talent</h3>

          {error && alert(error)}

          <form
            className="signup__container-form"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleChange}
              value={data.proImg}
              name="proImg"
            />

            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              placeholder="First Name *"
              required
            />
            <input type="text"
             name="lastName"
             onChange={handleChange}
             value={data.lastName} 
             placeholder="Last Name" />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
              placeholder="Business Email Address *"
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
            <input
              type="password"
              name="cPassword"
              onChange={handleChange}
              value={data.cPassword}
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
    </>
  );
};

export default SignupBuyer;
