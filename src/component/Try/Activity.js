import React from 'react';
import Charts from './Chart';
import LIne from './Line';
import Bar from './Bar';
import Pie from './Pie';


const Activity = () => (
    <div className="pb-4" style={{paddingTop: '120px', zIndex: '50'}}>
      <LIne type="line"/>
      <div className="row py-4">
        <div className="col-sm-6">
          <Bar type="bar"/>
        </div>
        <div className="col-sm-6">
        <Pie type="doughnut" />
        </div>
        <div className="col-sm-6">
          <Pie type="pie" />
        </div>
        <div className="col-sm-6">
          <Pie type="polarArea" />
        </div>
      </div>
    </div>
);

export default Activity;
