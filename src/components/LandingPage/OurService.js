import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import imgService from '../../assets/general/img_service.png';
import checklist from '../../assets/general/checklist.svg';

const OurService = () => {
  return (
    <div id="our-service">
      <Container>
        <Row className="row-cols-auto justify-content-center">
          <Col className="col-lg-6">
            <div className="img-service">
              <img src={imgService} alt="service" />
            </div>
          </Col>
          <Col className="col-lg-6">
            <div className="mt-sm-4 mt-0 ms-lg-3">
              <p className="fs-2 fw-bold">Best Car Rental for any kind of trip in Surabaya!</p>
              <p className="fw-light">
                Sewa mobil di Surabaya bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi
                mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
              </p>
              <div>
                <div className="d-flex">
                  <div className="checklist">
                    <img src={checklist} alt="checklist" />
                  </div>
                  <p className="ms-3">Sewa Mobil Dengan Supir di Surabaya 12 Jam</p>
                </div>
                <div className="d-flex">
                  <div className="checklist">
                    <img src={checklist} alt="checklist" />
                  </div>
                  <p className="ms-3">Sewa Mobil Lepas Kunci di Surabaya 24 Jam</p>
                </div>
                <div className="d-flex">
                  <div className="checklist">
                    <img src={checklist} alt="checklist" />
                  </div>
                  <p className="ms-3">Sewa Mobil Jangka Panjang Bulanan</p>
                </div>
                <div className="d-flex">
                  <div className="checklist">
                    <img src={checklist} alt="checklist" />
                  </div>
                  <p className="ms-3">Gratis Antar - Jemput Mobil di Bandara</p>
                </div>
                <div className="d-flex">
                  <div className="checklist">
                    <img src={checklist} alt="checklist" />
                  </div>
                  <p className="ms-3">Layanan Airport Transfer / Drop In Out</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurService;