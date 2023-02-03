// React
import React from "react";
// Bootstrap
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
// React-Router-Dom
import { Link } from "react-router-dom";

// Header function: used as Navbar
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-white">
              Bill Manager
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Stack
                direction="horizontal"
                gap={5}
                className="justify-content-center"
              >
                <Link to="/" className="text-decoration-none text-white">
                  Home
                </Link>
                <Link
                  to="/add_bill"
                  className="text-decoration-none text-white"
                >
                  Add Bill
                </Link>
                <Link to="/stats" className="text-decoration-none text-white">
                  Stats
                </Link>
              </Stack>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
