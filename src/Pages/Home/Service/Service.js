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
    <div className='mb-5'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Price: {price}</small>
          </Card.Text>
        </Card.Body>
        <Link to='/checkout'>
          <button className="checkout-btn">Checkout</button>
        </Link>
      </Card>

    </div>
  );
};

export default Service;
