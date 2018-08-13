import React from 'react'

const Chart = () => (
  <div className="card">
    <div className="card-header">
      Sentiment analysis for Davido 
    </div>
    <div className="card-body" style={{minHeight: '400px'}}>
      <h5 className="card-title">Special title treatment</h5>
      <canvas id="myChart"></canvas>
    </div>
    <div className="card-footer text-muted">
      <span className="text-danger">Negative</span>&emsp;
      <span className="text-success">Postive</span> &emsp;
      <span className="text-warning">Neutral</span>
    </div>
  </div>
);

export default Chart;
