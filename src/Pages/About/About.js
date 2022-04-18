import React from "react";
import image from '../../Images/me/sagor.jpg'
import './About.css'

const About = () => {
  return (
    <div className="about container">
      <div className="card mb-3 p-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img height="50px " src={image} className="img-fluid rounded-start" alt="..." />
            <div className="about-me">
                <h4>About Me</h4>
                <h6>Name : Sagor Devnath</h6>
                <h6>Address : Keshabpur, Jashore, Bangladesh</h6>
                <h6>Phone : +8801710786364</h6>
                <h6>Email : ssagor64@gmail.com</h6>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Goal in Life</h5>
              <p className="card-text">
              Goal setup will help us to be preparing properly for the future. My aim in life has always been to become a successful software developer. Software developing is highly respected in the field of information technology as almost every field is associated with computers these days. Checking out the latest software upgrades has to be considered as well. Software developing will help me in realizing my dream of making it big in the severe competition involved in the corporate market. So I will try my best to become a Software developer.
              </p>              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
