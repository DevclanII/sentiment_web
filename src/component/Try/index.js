import React from 'react';
import SideBar from './SideBar';
import Activity from './Activity'

class Try extends React.Component {

  render() {
    return (
      <div className="container-fluid wraper">
        <div className="row">
          <SideBar />
          <div className="col-mdgit -9" id="scrol" style={{height: '100vh'}}>
            <div className="row">
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
            <Activity />
          </div>
        </div>
      </div>
      );
  }

}

export default Try;