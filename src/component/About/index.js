import React from 'react';
import Intro from './inrto';
import Sections from './Section';
import Nav from './Nav';
import Footer from '../LandingPage/Footer';

class About extends React.Component {
  render() {
    return (
      <div>
        <Nav />       
        <Intro />
        <Sections />
        <Footer />
      </div>
      );
  }

}

export default About;