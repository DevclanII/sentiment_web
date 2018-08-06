import React from 'react';
import Intro from './inrto';
import Sections from './Section';
import {Nav} from '../LandingPage/Header';
class About extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Intro />
        <Sections />
      </div>
      );
  }

}

export default About;