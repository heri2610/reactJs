import React from 'react';

import OurService from './OurService';
import WhyUs from './WhyUs';
import Testimonial from './Testimonial';
import GettingStarted from './GettingStarted';
import FAQ from './FAQ';

const LandingPage = () => {
  return (
    <>
      <OurService />
      <div id="why-us" />
      <WhyUs />
      <div id="testi"></div>
      <Testimonial />
      <GettingStarted />
      <div id="FAQ" />
      <FAQ />
    </>
  );
};

export default LandingPage;