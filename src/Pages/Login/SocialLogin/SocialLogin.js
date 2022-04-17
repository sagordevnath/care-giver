import React from 'react';
// import { Link } from 'react-router-dom';
import './SocialLogin.css'
import google from '../../../Images/social/google.png'
import github from '../../../Images/social/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const SocialLogin = () => {
    const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);

    if (GoogleError) {
        return toast('Something went wrong. Please try again!!')
      }
      if (GoogleLoading) {
        return <p>Loading...</p>;
      }
      if (GoogleUser) {
        return (
          <div>
            <p>Signed In User: {GoogleUser.email}</p>
          </div>
        );
      }
    return (
        <div>
            <div className="hori-row d-flex justify-content-center">
                <hr className="w-50" />
                <p className="mx-3">or</p>
                <hr className="w-50" />
            </div> 
            <p className="text-center mt-0">Sign Up with...</p>          
            <div className="d-flex mt-0">
            <button onClick={()=>signInWithGoogle()} className='social-btn'><img width="15px" src={google} alt="" /> Google</button>
            <button className='social-btn'><img width="15px" src={github} alt="" /> Github</button>
            <ToastContainer />
            </div>            
        </div>
    );
};

export default SocialLogin;