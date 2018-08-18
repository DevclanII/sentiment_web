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
              <div className="p-4 m-auto">
                <h2 className="display-2 text-lg-left text-md-center" style={{width: '70%', fontSize: '2.5rem', marginBottom: '30px'}}>
                  Quisque in velit id ante suscipit convallis in ac mauris. Aliquam
                  eget venenatis urna, quis facilisis libero. 
                </h2>
                <button type="button" class="btn btn-outline-dark round" style={{ borderRadius: '30px'}}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
