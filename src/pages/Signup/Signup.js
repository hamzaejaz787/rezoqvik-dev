import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./signup.css";

const Signup = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const picRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const { signup } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleImage() {
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        fnameRef.current.value
      );

      navigate("/user");
    } catch {
      setError("Failed to create account");
    }

    setLoading(false);
  }

  return (
    <div className="signup">
      <div className="signup__container">
        <h3>Join Us!!!</h3>

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

          <button onClick={handleImage}>Upload</button>

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
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password *"
            required
          />
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
export default Signup;
