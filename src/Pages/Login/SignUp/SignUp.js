import React, { useEffect, useState } from 'react';

import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
// import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignUp.css';
import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        common: "",
    });
    // const [showPassword, setShowPassword] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const handleNameInput = e => {
          setUserInfo({...userInfo, name: "e.target.value"})
      }

      const handleEmailInput = e => {
          const emailRegex = /\S+@\S+\.\S+/;
          const validEmail = emailRegex.test(e.target.value);

          if (validEmail) {
              setUserInfo({...userInfo, email: e.target.value});
              setErrors({...errors, email: ""})
          }
          else {
              setUserInfo({...userInfo, email: ""});
              setErrors({...errors, email:"Invalid Email"})
          }
      };

      const handlePasswordInput = e => {
        const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        const validPassword = passwordRegex.test(e.target.value);

        if(validPassword) {
            setUserInfo({...userInfo, password: e.target.value});
            setErrors({...errors, password: ""});
        }
        else {
            setUserInfo({...userInfo, password: ""});
            setErrors({...errors, password:"Poor strength Password!"})
        }
      };

      const handleConfirmPasswordInput = e => {
          if(e.target.value === userInfo.password) {
              setUserInfo({...userInfo, confirmPassword: e.target.value});
              setErrors({...errors, password: ""})
          }
          else {
            setUserInfo({...userInfo, confirmPassword: ""})  
            setErrors({...errors, password: "Password don't Match"});

          }
      };

      const handleSignUp = e => {
          e.preventDefault();
          console.log(user);
          createUserWithEmailAndPassword(userInfo.email, userInfo.password);
          

          if (loading) {
            return <Loading></Loading>;
          }
      }

      useEffect(()=>{
        if (hookError) {
            switch(hookError?.code){
            case "auth/invalid-email":
                toast("Invalid Email Provided");
                break;
            case "auth/invalid-password":
                toast("Wrong password provided");
                break;
            default:
                // toast('Something went wrong!!')
                break;
            }

        }
        else if(user) {
            toast.success('Successfully SignUp');            
        }
      }, [hookError]);

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

      useEffect(()=> {
          if (user) {
              navigate(from)              
          }
      },[user]);

    return (
        <div className="form-container">
              <div className="form-card">
                  <div className="inner-box">
                      <div className="card-front">
                          <h2>Sign Up</h2>
                          <form onSubmit={handleSignUp}>
                              <input type="text" name="name" onChange={handleNameInput} className="input-box" placeholder='Your Name' required id="" />
                              <input type="email" name="email" onChange={handleEmailInput} className="input-box" placeholder='Your Email Id' required id="" />
                              {errors?.email && <p className='text-danger'>{errors.email}</p>}
                              <input type="password" name="password" onChange={handlePasswordInput} className="input-box" placeholder='Password' required id="" />
                              {errors?.password && <p className='text-danger'>{errors.password}</p>}
                              <input type="password" name="confirm-password" onChange={handleConfirmPasswordInput} className="input-box" placeholder='Confirm-Password' required id="" />
                              <button type="submit" className='submit-btn'>Sign Up</button>
                              <SocialLogin></SocialLogin>                                                            
                          </form>
                          <Link to="/login" className="btn">I'he an account</Link>
                          <ToastContainer
                          position="top-center"
                          autoClose={4000}
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
          </div>
      );
    };
    
    export default SignUp;
