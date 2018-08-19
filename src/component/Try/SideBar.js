import React from 'react';

const Submit = (e, HandleSubmit) => {
  e.preventDefault();
  const payload = {
    Sentiment : this.Sentiment.value,
    Number: this.Numbers.value
  }
  HandleSubmit(payload)
}
const SideBar = ({HandleSubmit}) => (
  <div className="col-1 indigo" id="sidebar" style={{
    height: '100vh',
    zIndex: '9999',
    overflowY: 'scroll'
  }}>
    <div>
      <button id="dismiss" className="pb-4 btn btn-sm btn-secondary">
        <i className="fa fa-arrow-left"></i>
      </button>
      <img
        alt="log"
        src="http://via.placeholder.com/300x100"
        className="img-fluid pt-4 my-4"/>
      <div>
        <form onSubmit={(e) => Submit(e, HandleSubmit)}>
          <div className="form-group">
            <label htmlFor="Search" className="text-light">Search</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-search"></i>
                </span>
              </div>
              <input
                type="text"
                name="Search"
                id="Search"
                ref={input => this.Sentiment = input}
                className="form-control"
                placeholder="Terragon, Davido, yakata"
                aria-describedby="helpId"/>
            </div>
            <small id="helpId" className="text-muted text-light">enter mention, tag, handler to search</small>
          </div>
          <div className="form-group">
            <label htmlFor="count" className="text-light">No of Tweet</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">last
                </span>
              </div>
              <input
                type="number"
                name="count"
                id="count"
                ref={input => this.Numbers = input}
                className="form-control"
                placeholder="200, 300, 400"
                min={50}
                max={700}
                aria-describedby="helpId"/>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">tweet
                </span>
              </div>
            </div>
            <small id="helpId" className="text-muted text-light">enter the no of last tweet to check.</small>
          </div>
          <button type="submit" id="dismis" className="btn btn-light">Submit</button>
        </form>
      </div>
    </div>
  </div>
);

export default SideBar;
