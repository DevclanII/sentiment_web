import React from 'react';
import Footer from '../LandingPage/Footer';
import SideBar from './SideBar';
import Nav from './Nav';
import QnA from './QnA'

const Faq = () => (
  <div className="container-fluid" style={{zIndex: '999', height: '100vh', overflowY: 'scroll',}}>
    <div className="row">
      <Nav />
      <SideBar />
      <div className="col-sm-9" style={{ paddingTop: "130px", minHeight: '96vh', wordWrap: 'break-word' }}>
        <h1>
          FAQ
        </h1>
        <QnA
          Q="dfdjfgjhdbjhfbjdhbfdjhdskdgh"
          A="sdfdvjfhfjhfdhsgjdsvdjfccjhjfbvjsdcvjcvcdjshvcsjvcvcjhvcvcdsvchvds"
        />
      </div>
      <Footer />
    </div>
  </div>
);

export default Faq;
