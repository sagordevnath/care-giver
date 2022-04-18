import React from "react";
import { Card } from "react-bootstrap";
import './Answer2.css'

const Answer2 = () => {
  return (
    <div className='answer'>      
      <Card>
        <Card.Header className='bg-info text-center' as="h5">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </Card.Header>
        <Card.Body className='answer-body'>
          <Card.Title className='text-center bg-primary'>Why are you using firebase?</Card.Title>
          <Card.Text>
          Firebase manages all data real-time in the database. So, the exchange of data to and from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase. For example, you can use Firebase to develop a live streaming app. You can also use Firebase to develop a chat messaging app. 
          </Card.Text>
        </Card.Body>
        <Card.Body className='answer-body'>
          <Card.Title className='text-center bg-primary'>
            What other options do you have to implement authentication?
          </Card.Title>
          <Card.Text>
          <ul>
                <li>STYTCH</li>
                <li>Ory</li>
                <li>Supabase</li>
                <li>Okta</li>
                <li>PingIdentity</li>
                <li>Keycloak</li>
                <li>Frontegg</li>
                <li>Authress</li>
                <li>Auth0</li>
                <li>Amazon Cognito</li>
                <li>OneLogin</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>      
    </div>
  );
};

export default Answer2;
