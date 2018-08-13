import React from 'react';

const SideBar = () => (
  <div className="col-3 indigo" id="sidebar" style={{
    height: '100vh',
    zIndex: '9999',
    overflowY: 'scroll'
  }}>
    <div>
      <button id="dismiss" className="pb-4 btn btn-sm btn-secondary">
        <i class="fa fa-arrow-left"></i>
      </button>
      <img
        alt="log"
        src="http://via.placeholder.com/300x100"
        className="img-fluid pt-4 my-4"/>
      <div>
        <form>
          <div class="form-group">
            <label for="Search" className="text-light">Search</label>
            <div className="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i className="fa fa-search"></i>
                </span>
              </div>
              <input
                type="text"
                name="Search"
                id="Search"
                class="form-control"
                placeholder="Terragon, Davido, yakata"
                aria-describedby="helpId"/>
            </div>
            <small id="helpId" class="text-muted text-light">enter mention, tag, handler to search</small>
          </div>
          <div class="form-group">
            <label for="count" className="text-light">No of Tweet</label>
            <div className="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">last
                </span>
              </div>
              <input
                type="text"
                name="count"
                id="count"
                class="form-control"
                placeholder="200, 300, 400"
                aria-describedby="helpId"/>
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">tweet
                </span>
              </div>
            </div>
            <small id="helpId" class="text-muted text-light">enter the no of last tweet to check.</small>
          </div>
          <button type="submit" class="btn btn-light">Submit</button>
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
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Tinubu</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Buhari</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Drake</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Kendrick Lamar</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Glo</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Tinubu</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Buhari</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Drake</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Kendrick Lamar</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Glo</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Tinubu</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Buhari</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Drake</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Kendrick Lamar</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a>Glo</a>
              <span class="badge badge-success">40%</span>
              <span class="badge badge-danger">50%</span>
              <span class="badge badge-warning">10%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default SideBar;
