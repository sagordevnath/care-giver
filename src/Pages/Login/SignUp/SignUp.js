import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
               <div className="container">
                   
        <div className="screen">
            <div className="screen__content">
            <h1 className='text-center mt-5'>Login</h1>
                <form className="login">
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>                    
                        <input type="text" className="login__input" placeholder="Enter Your Name" />
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>                    
                        <input type="text" className="login__input" placeholder="Enter Your Email" />
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="password" className="login__input" placeholder="Password" />
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="password" className="login__input" placeholder="Confirm Password" />
                    </div>
                    <button className="button login__submit">
                        <span className="button__text">Log In Now</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>				
                    <div className='signUp-text'>
                    <hr className='w-50' />
                    <p>Need an account? <Link to='/signup'>Sign Up now!</Link></p>
                    </div>
                </form>
                <div className="social-login">
                    <h3>log in via</h3>
                    <div className="social-icons">
                        <Link to="" className="social-login__icon fab fa-instagram"></Link>
                        <Link to="" className="social-login__icon fab fa-facebook"></Link>
                        <Link to="" className="social-login__icon fab fa-twitter"></Link>
                    </div>                    
                </div>
                
                
                
            </div>
            <div className="screen__background">
                {/* <span className="screen__background__shape screen__background__shape4"></span> */}
                {/* <span className="screen__background__shape screen__background__shape3"></span>		 */}
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
                      
            </div>
            	
        </div>
        
    </div>
    
       
    );
};

export default SignUp;