import React from 'react';

const SideBar = () => (
  <div className="col-3 indigo" id="sidebar" style={{
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
        <form>
          <div className="form-group">
            <label for="Search" className="text-light">Search</label>
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
                className="form-control"
                placeholder="Terragon, Davido, yakata"
                aria-describedby="helpId"/>
            </div>
            <small id="helpId" className="text-muted text-light">enter mention, tag, handler to search</small>
          </div>
          <div className="form-group">
            <label for="count" className="text-light">No of Tweet</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">last
                </span>
              </div>
              <input
                type="text"
                name="count"
                id="count"
                className="form-control"
                placeholder="200, 300, 400"
                aria-describedby="helpId"/>
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">tweet
                </span>
              </div>
            </div>
            <small id="helpId" className="text-muted text-light">enter the no of last tweet to check.</small>
          </div>
          <button type="submit" className="btn btn-light">Submit</button>
        </form>
      </div>
      <div className="py-4 text-dark">
        <h2 className="text-light">History</h2>
        <div>
          <ul
            className="list-group"
            id="history"
            style={{
            maxHeight: '300px'
          }}>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Tinubu</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Buhari</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Drake</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Kendrick Lamar</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Glo</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Tinubu</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Buhari</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Drake</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Kendrick Lamar</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Glo</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Tinubu</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Buhari</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Drake</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Kendrick Lamar</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a>Glo</a>
              <span className="badge badge-success">40%</span>
              <span className="badge badge-danger">50%</span>
              <span className="badge badge-warning">10%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default SideBar;
