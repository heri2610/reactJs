import React from 'react';
import MyButton from '../UI/MyButton';
import { Container } from 'react-bootstrap';

const GettingStarted = () => {
  return (
    <div id="getting-started">
      <Container className="d-flex align-items-center flex-column justify-content-center">
        <p className="slogan fw-bold text-white text-center">Sewa Mobil di Surabaya Sekarang</p>
        <p className="text-white text-center desc fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod<br />tempor incididunt ut labore et dolore magna aliqua.</p>
        <a className="text-white fw-bold" href="/cars"><MyButton>Mulai Sewa Mobil</MyButton></a>
      </Container>
    </div>
  );
};

export default GettingStarted;