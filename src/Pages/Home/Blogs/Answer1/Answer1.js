import React from "react";
import { Card, Table } from "react-bootstrap";
import "./Answer1.css";

const Answer1 = () => {
  return (
    <div className="answer">
      <Card>
        <Card.Header className='bg-info text-center' as="h5">
          Difference between authorization and authentication
        </Card.Header>
        <Card.Body>
          <Table  className='answer-body' striped bordered hover size="sm">
            <thead>
              <tr className='text-center bg-primary'>
                <th>Number</th>
                <th>AUTHENTICATION</th>
                <th>AUTHORIZATION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Authentication verifies who the user is.</td>
                <td>
                  Authorization determines what resources a user can access.
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Authentication is visible to and partially changeable by the
                  user.
                </td>
                <td>
                  Authorization isn’t visible to or changeable by the user.
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Authentication is the first step of a good identity and access
                  management process.
                </td>
                <td>Authorization always takes place after authentication.</td>
              </tr>
              <tr>
                <td>4</td>
                <td>User and user server is verified</td>
                <td>
                  Here it is validated if the user is allowed to access via some
                  defined rules
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Data is available via Token IDs</td>
                <td>Data provided via Access token</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Answer1;
