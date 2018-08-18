import React from 'react'

const Nav = () => (
  <ul className="nav" style={{paddingTop: '6px'}}>
    <li className="nav-item">
      <a className="nav-link active" href="/">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/About">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://api-devclan.herokuapp.com" rel="noopener noreferrer" target="_blank">Docs</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="/Try">Try It Live</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="/Faq">FAQ</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="About#contact">Contact Us</a>
    </li>
  </ul>
);

export default Nav;
