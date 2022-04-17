import React from 'react';
// import { Link } from 'react-router-dom';
import './SocialLogin.css'
import google from '../../../Images/social/google.png'
import github from '../../../Images/social/github.png'

const SocialLogin = () => {
    return (
        <div>
            <div className="hori-row d-flex justify-content-center">
                <hr className="w-50" />
                <p className="mx-3">or</p>
                <hr className="w-50" />
            </div> 
            <p className="text-center mt-0">Sign Up with...</p>          
            <div className="d-flex mt-0">
            <button className='social-btn'><img width="15px" src={google} alt="" /> Google</button>
            <button className='social-btn'><img width="15px" src={github} alt="" /> Github</button>
            </div>            
        </div>
    );
};

export default SocialLogin;