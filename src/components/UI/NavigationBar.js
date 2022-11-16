import React from 'react';
import MyButton from './MyButton';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

const NavigationBar = () => {
  const tokenz = window.localStorage.getItem("accessToken");

  return (
    <Navbar expand="lg" className="fixed-top justify-content-center">
      <Container fluid className="navbar-content">
        <Link to={"/"}><div className="logo-brand"></div></Link>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold" id="offcanvasNavbarLabel-expand-lg">
              BCR
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              <div className="navbar-nav ms-0">
                <Nav.Link className="me-4 text-black" href="#our-service">Our Service</Nav.Link>
                <Nav.Link className="me-4 text-black" href="#why-us">Why Us</Nav.Link>
                <Nav.Link className="me-4 text-black" href="#testi">Testimonial</Nav.Link>
                <Nav.Link className="me-4 text-black" href="#FAQ">FAQ</Nav.Link>
                {tokenz ?
                  <MyButton onClick={() => {
                    window.localStorage.removeItem("accessToken");
                    window.location.reload();
                  }} className="bg-danger">Log Out</MyButton>
                  : <Link to={"/"}><MyButton>Register</MyButton></Link>}
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;