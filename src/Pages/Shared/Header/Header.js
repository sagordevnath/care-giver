import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from '../../../firebase.init';
import { useAuthState} from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from '../../../Images/logo/logo.png'; 
import "./Header.css";
import CustomLink from "../CustomActiveLink/CustomLink";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <div className="navbar">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="text-uppercase fs-3 text-primary" href="#home"> <img width='60px' src={logo} alt="" /> Care Giver</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className='nav-link'>
              <CustomLink as={Link} to="/">
                Home
              </CustomLink>
              <CustomLink as={Link} to="/Services">
                Services
              </CustomLink>
              <CustomLink as={Link} to="/Blogs">
                Blogs
              </CustomLink>
              <CustomLink as={Link} to="/About">
                About
              </CustomLink>
              {!user ? <CustomLink as={Link} to="/Login">
                Login
              </CustomLink> :<CustomLink onClick={handleLogout} as={Link} to="/Login">
                Log out
              </CustomLink>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
