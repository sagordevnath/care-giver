import React, { useEffect, useState } from 'react';
import {auth} from '../../../firebase.init';
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
// import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignUp.css';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        common: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

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

      const handlePasswordMatch = e => {
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
          createUserWithEmailAndPassword(userInfo.email, userInfo.password);
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
                toast('Something went wrong!!')
            }

        }
      }, [hookError])

    return (
        <div className="form-container">
              <div className="form-card">
                  <div className="inner-box">
                      <div className="card-front">
                          <h2>Sign Up</h2>
                          <form>
                              <input type="text" name="name" className="input-box" placeholder='Your Name' required id="" />
                              <input type="email" name="email" className="input-box" placeholder='Your Email Id' required id="" />
                              <input type="password" name="password" className="input-box" placeholder='Password' required id="" />
                              <input type="password" name="confirm-password" className="input-box" placeholder='Confirm-Password' required id="" />
                              <button type="submit" className='submit-btn'>Sign Up</button>
                              <SocialLogin></SocialLogin>                                                            
                          </form>
                          <Link to="/login" className="btn">I'he an account</Link>
                          
                      </div>                      
                  </div>
              </div>
          </div>
      );
    };
    
    export default SignUp;
