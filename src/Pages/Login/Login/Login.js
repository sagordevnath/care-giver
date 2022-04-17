import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
// import SignUp from '../SignUp/SignUp';
// import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
          <div className="form-container">
              <div className="form-card">
                  <div className="inner-box">
                      <div className="card-front">
                          <h2>LOGIN</h2>
                          <form>
                              <input type="email" name="email" className="input-box" placeholder='Your Email Id' required id="" />
                              <input type="password" name="password" className="input-box" placeholder='Password' required id="" />
                              <button type="submit" className='submit-btn'>LOGIN</button>                              
                              <Link to="/signup">Forgot Password?</Link>
                          </form>
                          <SocialLogin></SocialLogin>
                          <Link to="/signup"  className="btn">I'm New Here</Link>
                          
                      </div> 
                      <div className="card-back"></div>                     
                  </div>
              </div>
          </div>     
    
       
    );
};

export default Login;