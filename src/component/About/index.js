import React from 'react';
import Intro from './inrto';
import Sections from './Section';
import { Footer } from '../App';

class About extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav navbar navbar-light bg-white fixed-top justify-content-end" style={{ width: '100%', zIndex: '999' }}>
          {/* <button type="button" id="sidebarCollapse" className="btn btn-dark btn-sm mr-auto">
            <i className="fa fa-align-justify"></i>
          </button> */}
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Docs">Docs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/Try">Try It Live</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/About#contact">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/Faq">FAQ</a>
          </li>
        </ul>
        <Intro />
        <Sections />
        <Footer />
      </div>
      );
  }

}

export default About;