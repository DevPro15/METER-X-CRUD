import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

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
