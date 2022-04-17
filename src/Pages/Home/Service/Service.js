import React from "react";
import { Button, Card,  } from "react-bootstrap";
import './Service.css'

const Service = ({ service }) => {
  const { name, price, image, description } = service;
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
        <Button className="checkout-btn">Checkout</Button>
      </Card>

    </div>
  );
};

export default Service;
