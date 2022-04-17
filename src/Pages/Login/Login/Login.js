import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
// import SignUp from '../SignUp/SignUp';
// import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );

  const handleEmailInput = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setUserInfo({ ...userInfo, email: "" });
      setErrors({ ...errors, email: "Invalid Email" });
    }
  };

  const handlePasswordInput = (e) => {
    const passwordRegex =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setUserInfo({ ...userInfo, password: "" });
      setErrors({ ...errors, password: "Poor strength Password!" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(userInfo.email, userInfo.password);
    console.log(hookError?.message);
  };

  // useEffect(()=>{
  //     if (hookError) {
  //         switch(hookError?.code){
  //         case "auth/user-not-found":
  //             toast("Invalid Email Provided");
  //             break;
  //         case "auth/internal-error":
  //             toast("Wrong password provided");
  //             break;
  //         default:
  //             toast.warning('Something went wrong!!')
  //         }

  //     }
  //   }, [hookError]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
      toast.success("Successfully SignUp");
    }
  }, [user]);

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="inner-box">
          <div className="card-front">
            <h2>LOGIN</h2>
            <form onSubmit={handleLogin}>
              <input
                onChange={handleEmailInput}
                type="email"
                name="email"
                className="input-box"
                placeholder="Your Email Id"
                required
                id=""
              />
              <input
                onChange={handlePasswordInput}
                type="password"
                name="password"
                className="input-box"
                placeholder="Password"
                required
                id=""
              />
              <button type="submit" className="submit-btn">
                LOGIN
              </button>
              <Link
                to="/login"
                onClick={async () => {
                  await sendPasswordResetEmail(userInfo.email);
                  alert("Sent email");
                }}
              >
                Forgot Password?
              </Link>
            </form>
            <SocialLogin></SocialLogin>
            <Link to="/signup" className="btn">
              I'm New Here
            </Link>
          </div>
          <div className="card-back"></div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
