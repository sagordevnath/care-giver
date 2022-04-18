import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./Checkout.css";

const Checkout = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleNameInput = e => {
        setUserInfo({...userInfo, name: "e.target.value"})
    }

    const handleEmailInput = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({...userInfo, email: e.target.value});            
        }
        else {
            setUserInfo({...userInfo, email: ""});            
        }
    };

    const handlePasswordInput = e => {
      const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
      const validPassword = passwordRegex.test(e.target.value);

      if(validPassword) {
          setUserInfo({...userInfo, password: e.target.value});          
      }
      else {
          setUserInfo({...userInfo, password: ""});          
      }
    };

    const handleConfirmPasswordInput = e => {
        if(e.target.value === userInfo.password) {
            setUserInfo({...userInfo, confirmPassword: e.target.value});
            
        }
        else {
          setUserInfo({...userInfo, confirmPassword: ""})            

        }
    };

    const handleSignUp = e => {
        e.preventDefault();
        
        if(userInfo.email && userInfo.password) {
            toast.success("Checkout Successful");
        }
        else {
            toast.error("Checkout Failed");
        }
       
    }
  return (
    <div>
      <div className="form-container">
              <div className="form-card mt-5">
                  <div className="inner-box">
                      <div className="card-front">
                          <h2>Checkout</h2>
                          <form onSubmit={handleSignUp}>
                              <input type="text" name="name" onChange={handleNameInput} className="input-box" placeholder='Your Name' required id="" />
                              <input type="email" name="email" onChange={handleEmailInput} className="input-box" placeholder='Your Email Id' required id="" />
                              
                              <input type="password" name="password" onChange={handlePasswordInput} className="input-box" placeholder='Password' required id="" />
                              
                              <input type="password" name="confirm-password" onChange={handleConfirmPasswordInput} className="input-box" placeholder='Confirm-Password' required id="" />
                              <button type="submit" className='submit-btn'>Checkout</button>
                                                                                          
                          </form>
                          
                          <ToastContainer
                          
                          />
                      </div>                      
                  </div>
              </div>
          </div>
    </div>
  );
};

export default Checkout;

