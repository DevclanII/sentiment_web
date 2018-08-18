import React from 'react';
import Footer from '../LandingPage/Footer';
import Nav from './Nav';
import SideBar from './SideBar';
import QnA from './QnA'

const Faq = () => (
  <div className="container-fluid">
    <div className="row">
      <SideBar />
      <div className="col-9 m-auto">
        <Nav />
        <div className="container" style={{paddingTop: "130px"}}>
          <QnA 
            Q="dfdjfgjhdbjhfbjdhbfdjhdskdgh"
            A="sdfdvjfhfjhfdhsgjdsvdjfccjhjfbvjsdcvjcvcdjshvcsjvcvcjhvcvcdsvchvds"
          />
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default Faq;
