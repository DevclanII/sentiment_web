import React from 'react';
import Footer from '../LandingPage/Footer';
import Nav from './Nav';
import SideBar from './SideBar';
import QnA from './QnA'

const Faq = () => (
  <div className="container-fluid">
    <div className="row">
      <SideBar />
      <Nav />
      <div className="col-8 my-auto">
        <div className="container" style={{paddingTop: "130px"}}>
          <QnA 
            Q="dfdjfgjhdbjhfbjdhbfdjhdskdgh"
            A="sdfdvjfhfjhfdhsgjdsvdjfccjhjfbvjsdcvjcvcdjshvcsjvcvcjhvcvcdsvchvds"
          />
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default Faq;
