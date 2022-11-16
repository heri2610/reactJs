import React from 'react';

import { Accordion, Container, Row, Col } from 'react-bootstrap';

const FAQ = () => {
  return (
    <div id="FAQ" className="faq">
      <Container className="p-0">
        <Row className="row-cols-1 row-cols-lg-2 d-flex justify-content-between mx-0">
          <Col className="col-lg-4 heading px-0">
            <p className="title-section fw-bold">Frequently Asked Question</p>
            <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </Col>
          <Accordion className="col px-0">
            <Accordion.Item eventKey="0" className="mb-3">
              <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
              <Accordion.Body>This is the first item's accordion body.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-3">
              <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
              <Accordion.Body>This is the second item's accordion body.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-3">
              <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
              <Accordion.Body>This is the third item's accordion body.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mb-3">
              <Accordion.Header>Apakah ada biaya antar-jemput?</Accordion.Header>
              <Accordion.Body>This is the fourth item's accordion body.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
              <Accordion.Body>This is the fifth item's accordion body.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;