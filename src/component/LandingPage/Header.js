import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="cover col-lg-6" style={{position: 'absolute'}}/>
          <div className="backImg col-lg-6" style={{ height: '94vh' }}>
          </div>
          <div className="col-lg-6" style={{ height: '94vh' }}>
            <div className="row" id="head">
              <Nav />
              <div className="p-4 my-auto">
                <h4 className="text-lg-left text-md-center" style={{width: '70%', marginBottom: '30px'}}>
                  Want To Elavate Your Brand ?<br />
                  What That Clean Sheet Online Presences ?<br />
                  Know What Your Audiences Think and Feel About You and Your Campaings<br />
                  And Give Them The Right Content At The Right Time<br />
                  And <strong>We Are Here To Help To Help You</strong>
                </h4>
                <button type="button" className="btn btn-outline-dark round" href="/Try" style={{ borderRadius: '30px'}}>Try It Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
