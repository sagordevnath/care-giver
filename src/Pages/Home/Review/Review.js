import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import './Review.css';

const Review = ({ review }) => {
  const { name, image, description, ratings } = review;
  return (
    
    <CardGroup>
    <Card className='review'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className='text-center'>{name}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted text-center">Ratings: {ratings} </small>
      </Card.Footer>
    </Card>    
  </CardGroup>
    
  );
};

export default Review;
