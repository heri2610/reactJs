import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';

import iconClock from '../../assets/general/icon_24hrs.svg';
import iconThumb from '../../assets/general/icon_complete.svg';
import iconPricetag from '../../assets/general/icon_price.svg';
import iconBadge from '../../assets/general/icon_professional.svg';

const WhyUs = () => {
  return (
    <div className="why-us">
      <Container className="container">
        <div className="heading p-0">
          <p className="title-section fw-bold">Why Us?</p>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="list-items">
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4">
            <Col className="d-flex justify-content-center">
              <Card>
                <Card.Img variant="top" src={iconThumb} alt="thumb" />
                <Card.Body>
                  <Card.Title className="fw-bold fs-6">Mobil Lengkap</Card.Title>
                  <Card.Text>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center">
              <Card>
                <Card.Img variant="top" src={iconPricetag} alt="icon_price" />
                <Card.Body>
                  <Card.Title className="fw-bold fs-6">Harga Murah</Card.Title>
                  <Card.Text>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                    mobil lain</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center">
              <Card>
                <Card.Img variant="top" src={iconClock} alt="icon clock" />
                <Card.Body>
                  <Card.Title className="fw-bold fs-6">Layanan 24 Jam</Card.Title>
                  <Card.Text>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center">
              <Card>
                <Card.Img variant="top" src={iconBadge} alt="badge" />
                <Card.Body>
                  <Card.Title className="fw-bold fs-6">Sopir Profesional</Card.Title>
                  <Card.Text>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;