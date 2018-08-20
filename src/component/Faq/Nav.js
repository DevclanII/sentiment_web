import React from 'react'

const Nav = () =>(
  <ul className="nav navbar navbar-light bg-white fixed-top justify-content-end" style={{zIndex: '999', width: '100vw' }}>
    <li className="nav-item">
      <a className="nav-link active" href="/">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/About">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://api-devclan.herokuapp.com" target="_blank" rel="noopener noreferrer">Docs</a>
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
);

export default Nav;

