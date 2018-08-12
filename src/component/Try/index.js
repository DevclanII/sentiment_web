import React from 'react';
import SideBar from './SideBar';
import Activity from './Activity'

class Try extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <Activity />
        </div>
      </div>
      );
  }

}

export default Try;