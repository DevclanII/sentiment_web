import React from 'react';


const Activity = () => (
  <div className="col-9">
    <div>
      <ul className="nav navbar justify-content-end" style={{ width: '106%', marginLeft: '-15px'}}>
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Docs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Try It Live</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Activity;
