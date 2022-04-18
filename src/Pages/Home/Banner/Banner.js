import React from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://i.ibb.co/602MH3Y/caregiver-slider1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Emotional Support</h3>
            <p>It is a waste of energy when we try to conform to a pattern. To conserve energy we must be aware of how we dissipate energy.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/MB472sr/caregiver-slider2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Companionship and engaging in hobbies and activities</h3>
            <p>I’m a fan of art therapy. Just being creative helps. I think everyone is creative in their own way.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/DzQhKWw/caregiver-slider3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Medication reminders</h3>
            <p>
            MyTherapy is an ad-free, award-winning pill reminder and medication tracker.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
