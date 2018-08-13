import React from 'react';
import Chart from './Chart';

const Activity = () => (
    <div className="pb-4" style={{paddingTop: '170px', zIndex: '50'}}>
      <Chart />
      <div className="row py-4">
        <div className="col-sm-6">
          <Chart />
        </div>
        <div className="col-sm-6">
          <Chart />
        </div>
      </div>
    </div>
);

export default Activity;
