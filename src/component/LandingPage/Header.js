import React from 'react';
import Nav from './Nav';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="cover col-lg-6" style={{position: 'absolute'}}/>
          <div className="backImg col-lg-6" style={{ height: '94vh' }}/>
          <div className="col-lg-6" style={{ height: '94vh' }}>
            <div className="row" id="head">
              <Nav />
              <div className="p-4 my-auto">
                <h5 className="text-lg-left tt text-md-center" style={{width: '61%', margin: '45px 0px', fontSize: '30px'}}>
                Want to Know What Your Audiences Think About You and Your Campaings<br />
                <br />
                <strong>We Are Here To Help You</strong>
                </h5>
                <Link to="/Try"><button type="button" className="btn btn-outline-dark round" style={{ borderRadius: '30px'}}>Try It Now</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
