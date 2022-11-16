import React from 'react';

import { Container, Row, Col, Nav } from 'react-bootstrap';

import iconIG from '../../assets/general/icon_instagram.svg';
import iconTwitter from '../../assets/general/icon_twitter.svg';
import iconFB from '../../assets/general/icon_facebook.svg';
import iconMail from '../../assets/general/icon_mail.svg';
import iconTwitch from '../../assets/general/icon_twitch.svg';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
          <Col className="address">
            <p>Jalan Suroyo No. 161 Mayangan Kota<br />Probolinggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>
          <Col className="navigation mb-3">
            <Nav.Link href="#our-service">
              <p className="fw-semibold">Our Service</p>
            </Nav.Link>
            <Nav.Link href="#why-us">
              <p className="fw-semibold">Why Us</p>
            </Nav.Link>
            <Nav.Link href="#testi">
              <p className="fw-semibold">Testimonial</p>
            </Nav.Link>
            <Nav.Link href="#FAQ">
              <p className="fw-semibold mb-0">FAQ</p>
            </Nav.Link>
          </Col>
          <Col className="sosmed">
            <p>Connect with us</p>
            <div className="icon-group mb-3">
              <img src={iconFB} className="me-3" alt="facebook icon" />
              <img src={iconIG} className="me-3" alt="instagram icon" />
              <img src={iconTwitter} className="me-3" alt="twitter icon" />
              <img src={iconMail} className="me-3" alt="mail icon" />
              <img src={iconTwitch} alt="twitch icon" />
            </div>
          </Col>
          <Col className="copyright">
            <p>Copyright Binar 2022</p>
            <div className="logo-brand"></div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;