import React from 'react'

const Nav = () => (
  <ul className="nav navbar navbar-light bg-white fixed-top justify-content-end" style={{ width: '100%', zIndex: '999' }}>
    <button type="button" id="sidebarCollapse" className="btn btn-dark btn-sm mr-auto">
      <i className="fa fa-align-justify"></i>
    </button>
    <li className="nav-item">
      <a className="nav-link active" href="/">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/About">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Docs</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="/Try">Try It Live</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="About#contact">Contact Us</a>
    </li>
  </ul>
);

export default Nav;
