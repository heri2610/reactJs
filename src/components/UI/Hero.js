import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
import MyButton from './MyButton';
import ErrorModal from './ErrorModal';
import car from '../../assets/general/img_car.png';

const Hero = () => {
  const location = useLocation();
  const tokenz = window.localStorage.getItem("accessToken");
  const [errorModal, setErrorModal] = useState(false);

  const responseGoogle = response => {
    window.localStorage.setItem("accessToken", response.accessToken);
    window.location.reload();
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  return (
    <>
      <div id="main" className="d-flex justify-content-center">
        <div className="position-relative">
          <Container>
            <Row>
              <Col lg={6} className="welcome d-flex align-items-center">
                <div className="welcome-text">
                  <p className="slogan fw-bold">Sewa & Rental Mobil Terbaik di kawasan Surabaya</p>
                  <p className="fw-light">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas dengan harga
                    terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                  {location.pathname === "/" && (
                    <div>
                      {tokenz ?
                        <Link to={"/cars"}><MyButton>Mulai Sewa Mobil</MyButton></Link>
                        : <MyButton onClick={() => setErrorModal(true)}>Mulai Sewa Mobil</MyButton>
                      }
                      <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                        className="ms-4"
                      />
                    </div>
                  )}
                </div>
              </Col>
              <Col lg={6}>
                <div className="img-car mt-lg-0 mt-4">
                  <img src={car} className="position-absolute" alt="car" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div >
      <ErrorModal
        show={errorModal}
        title='Unauthorized'
        message='Please login with your Google account.'
        onHide={() => setErrorModal(false)}
      />
    </>
  );
};

export default Hero;