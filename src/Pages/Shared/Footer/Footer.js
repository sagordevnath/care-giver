import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <div className="footer">
      <h2>Care Giver</h2>
      <div className="icon">
        <Link to="">
          <i className="fab fa-facebook-square"></i>
        </Link>
        <Link to="">
          <i className="fab fa-twitter-square"></i>
        </Link>
        <Link to="">
          <i className="fab fa-instagram"></i>
        </Link>
      </div>
      
        <hr className="my-4" />
      
      <div className="terms">
        <p>Copyright &copy; {year} Care Giver. All rights reserved.</p>
        <div className="policy">
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/termsofuse">Terms of Use</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
