import React from 'react'

const Section1 = () => (
  <div className="row py-about">
    <div className="col-sm-6">
      <h5 style={{
        fontSize: '40px'
      }}>
        <strong>djhgddjagjdagdj ghddadajdh djajdajjda</strong>
      </h5>
      <div>
        <p>
          Quisque in velit id ante suscipit convallis in ac mauris.Aliquam eget venenatis
          urna,quis facilisis libero.Quisque in velit id ante suscipit convallis in ac
          mauris.Aliquam eget venenatis urna,quis facilisis libero.Quisque in velit id
          ante suscipit convallis in ac mauris.Aliquam eget venenatis urna, quis facilisis
          libero.
        </p>
      </div>
    </div>
    <div className="col-sm-6 ">
      <img
        alt="#"
        src="http://via.placeholder.com/350x300"
        className="img-responsive"
        width="100%"
        height="100%"/>
    </div>
  </div>
);

const Section2 = () => (
  <div className="row py-about">
    <div className="col-sm-6 mt-5">
      <h5
        style={{
          fontSize: '40px'
        }}>consectetur adipiscing elit.</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula
        tincidunt nisl, vitae porta nisi tempus id. Aenean elementum fermentum eleifend.
        Fusce tincidunt, urna in volutpat condimentum, lectus lacus consectetur leo, vel
        iaculis erat risus ac tellus.
      </p>
    </div>
    <div className="col-sm-6 order-sm-first">
      <img alt="#" src="http://via.placeholder.com/350x300" className="img-responsive" width="100%" height="100%" />
    </div>
  </div>
);

const Section3 = () => (
  <div className="row py-about">
    <div className="col-sm-6">
      <h5 style={{
        fontSize: '40px'
      }}>
        <strong>djhgddjagjdagdj ghddadajdh djajdajjda</strong>
      </h5>
      <div>
        <p>
          Quisque in velit id ante suscipit convallis in ac mauris.Aliquam eget venenatis
          urna,quis facilisis libero.Quisque in velit id ante suscipit convallis in ac
          mauris.Aliquam eget venenatis urna,quis facilisis libero.Quisque in velit id
          ante suscipit convallis in ac mauris.Aliquam eget venenatis urna, quis facilisis
          libero.
        </p>
      </div>
    </div>
    <div className="col-sm-6">
      <img
        alt="#"
        src="http://via.placeholder.com/350x300"
        className="img-responsive"
        width="100%"
        height="100%"/>
    </div>
  </div>
);

const HTU = () => (
< div className = "container py-4 text-center" >
    <div className="row">
      <div className="col-sm-12 text-center">
        <h5 style={{
          fontSize: '40px'
        }}>
          <strong>How to Use</strong>
        </h5>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 py-3">
        <h6>Enter Mention, Tags, .etc </h6>
        <div>
          <img
            alt="#"
            src="http://via.placeholder.com/150x100"
            className="img-responsive"
            width="100%"
            height="100%" />
        </div>
      </div>
      <div className="col-md-3 py-3">
        <h6>Get Your Results</h6>
        <div>
          <img
            alt="#"
            src="http://via.placeholder.com/150x100"
            className="img-responsive"
            width="100%"
            height="100%" />
        </div>
        <em>Initial Results are based on the last 100 tweets</em>
      </div>
      <div className="col-md-3 py-3">
        <h6>Visualise The Analysis Anyway You Want.</h6>
        <div>
          <img
            alt="#"
            src="http://via.placeholder.com/150x100"
            className="img-responsive"
            width="100%"
            height="100%" />
        </div>
      </div>
      <div className="col-md-3 py-3">
        <h6>Refresh Your Analysis To Get Latest Update.</h6>
        <div>
          <img
            alt="#"
            src="http://via.placeholder.com/150x100"
            className="img-responsive"
            width="100%"
            height="100%" />
        </div>
      </div>
    </div>
  </div>
);

const Sub = () => (
  <div className="container-fluid py-5 inner">
    <div className="row container">
      <div className="col-md-8">
        <p
          style={{
            fontSize: '20px',
            textTransform: 'capitalize',
            color: 'white'
          }}>
          Want to hear from us.<br />
          get our latest news and Happening.<br />
          Just a Subscribe to our newsletter.
            </p>
      </div>
      <div className="col-md-4" style={{ textAlign: 'center', paddingTop: '20px' }}>
        <a className="btn btn-outline-light btn-lg m-auto" href="/Register">Subscribe</a>
      </div>
    </div>
  </div>
);

const Sections = () => (
  <div>
    <div className="container">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
    <div className="container-fluid bg-light">
      <HTU />
    </div>
    <Sub />
  </div>
);

export default Sections;
