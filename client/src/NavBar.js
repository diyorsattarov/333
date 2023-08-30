import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>My Express App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* No navigation links or dropdown items */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
