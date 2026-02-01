import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const MyNavbar = () => {
  const location = useLocation() // React Router hook to get current path

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container fluid> 
        <Navbar.Brand as={Link} to="/">
          DYUTHI 2.0
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-links" />

        <Navbar.Collapse id="navbar-links">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              active={location.pathname === '/'}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link}
              to="/addticket"
              active={location.pathname === '/addticket'}
            >
              Add Ticket
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
