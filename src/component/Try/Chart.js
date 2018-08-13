import React from 'react'
import Chart from 'chart.js';


class Charts extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const chart = this.chart;

    var myChart = new Chart(chart, {
      type: this.props.type,
      data: {
        labels: ["Negative", "Positive", "Netural"],
        datasets: [
          {
            label: "# of Likes",
            data: [12, 19, 3],
            backgroundColor: [
              "rgba(255, 56, 71, 1)",
              "rgba(0, 200, 81, 1)",
              "rgba(255, 136, 0, 1)"
            ]
          }
        ]
      }
    });
  }
    render() {
      return (
        <div className="card">
          <div className="card-header">
            Sentiment analysis for Davido 
          </div>
          <div className="card-body" style={{maxHeight: 'auto'}}>
            <canvas ref={input => this.chart = input} />
          </div>
          <div className="card-footer text-muted">
            <span className="text-danger">Negative</span>&emsp;
            <span className="text-success">Postive</span> &emsp;
            <span className="text-warning">Neutral</span>
          </div>
        </div>
       );
   }

}

export default Charts;