import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from '../../../firebase.init';
import { useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <div className="navbar">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">Care Giver</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/Blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
              {!user ? <Nav.Link as={Link} to="/Login">
                Login
              </Nav.Link> :<Nav.Link onClick={handleLogout} as={Link} to="/Login">
                Log out
              </Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
