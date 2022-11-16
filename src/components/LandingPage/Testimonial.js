import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import manImg from '../../assets/general/man.png';
import womanImg from '../../assets/general/woman.png';
import rate from '../../assets/general/Rate.svg';

const Testimonial = () => {
  const options = {
    loop: true,
    center: true,
    nav: true,
    navText: ["⬅", "➡"],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1200: {
        items: 2,
      },
    },
  };

  return (
    <div id="testimonial">
      <div className="containers">
        <div className="heading d-flex align-items-center flex-column">
          <p className="title-section fw-bold">Testimonial</p>
          <p className="m-0 px-3">Berbagai review positif dari para pelanggan kami</p>
        </div>
        <OwlCarousel className="owl-theme" {...options} id="owlCarousel">
          <div className="item d-flex">
            <img src={manImg} className="profile-pict" alt="testi 1" />
            <div className="testi">
              <div className="rate d-flex">
                <img src={rate} id="rate" alt="rate" />
              </div>
              <p className="my-2">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod”
              </p>
              <p className="fw-bold mb-0">John Dee 32, Bromo</p>
            </div>
          </div>
          <div className="item d-flex">
            <img src={womanImg} className="profile-pict" alt="testi 2" />
            <div className="testi">
              <div className="rate d-flex">
                <img src={rate} id="rate" alt="rate" />
              </div>
              <p className="my-2">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod”
              </p>
              <p className="fw-bold mb-0">Christie 32, Bromo</p>
            </div>
          </div>
          <div className="item d-flex">
            <img src={manImg} className="profile-pict" alt="testi 3" />
            <div className="testi">
              <div className="rate d-flex">
                <img src={rate} id="rate" alt="rate" />
              </div>
              <p className="my-2">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod”
              </p>
              <p className="fw-bold mb-0">Bahng 32, Bromo</p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;