import React from 'react'

const Chart = () => (
  <div class="card">
    <div class="card-header">
      Sentiment analysis for Davido 
    </div>
    <div class="card-body" style={{minHeight: '400px'}}>
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
      <span className="text-danger">Negative</span>&emsp;
      <span className="text-success">Postive</span> &emsp;
      <span className="text-warning">Neutral</span>
    </div>
  </div>
);

export default Chart;
