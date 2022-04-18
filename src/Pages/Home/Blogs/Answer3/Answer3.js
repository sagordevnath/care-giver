import React from "react";
import { Card } from "react-bootstrap";

const Answer3 = () => {
  return (
    <div className='answer'>
      <Card>
        <Card.Header className='bg-info text-center' as="h5">What other services does firebase provide other than authentication?</Card.Header>
        <Card.Body className='answer-body'>          
          <Card.Text>
          Firebase is originally developed by Firebase inc and later acquired by Google. It provides different kinds of services that help you to develop high-quality mobile and web applications to grow your business. It is compatible with Web, iOS, Android, and OS X clients. For examples..
          <ul>
              <li>Cloud Firestore</li>
              <li>Cloud Functions</li>
              <li>Hosting</li>
              <li>Cloud Storage</li>
              <li>Google Analytics</li>
              <li>Predictions</li>
              <li>Cloud Messaging</li>
              <li>Dynamic Links</li>
              <li>Remote Config</li>              
          </ul>
          </Card.Text>          
        </Card.Body>
      </Card>
    </div>
  );
};

export default Answer3;
