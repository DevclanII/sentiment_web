import React from 'react';
import Charts from './Chart';

const Activity = () => (
    <div className="pb-4" style={{paddingTop: '170px', zIndex: '50'}}>
      <Charts type="line"/>
      <div className="row py-4">
        <div className="col-sm-6">
          <Charts type="bar"/>
        </div>
        <div className="col-sm-6">
        <Charts type="doughnut" />
        </div>
      </div>
    </div>
);

export default Activity;
