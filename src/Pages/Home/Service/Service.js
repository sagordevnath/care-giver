import React from "react";
import { Button, Card,  } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './Service.css'

const Service = ({ service }) => {
  const { name, price, image, description } = service;

  // const navigate = useNavigate();

  // const handleCheckout = () => {
    
  //   navigate("/checkout");
  // }
  return (
    
      <div class="card-group">
  <div class="service card">
    <img src={image} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <p class="card-text">{description}</p>
    </div>
    <div class="card-footer">
    <Link to='/checkout'>
          <button className="checkout-btn">Checkout</button>
        </Link>
    </div>
  </div>
  
  
</div>
        
      
  );
};

export default Service;
