import React from 'react'
import Chart from 'chart.js';


class Charts extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const chart = this.chart;
    var barChart = new Chart(chart, {
      type: this.props.type,
      data: {
        labels: ["12:00"],
        datasets: [{
          label: "Neutral",
          backgroundColor: "rgba(255,230,170)",
          borderColor: "rgba(255,230,170,1)",
          hoverBackgroundColor: "rgba(255,230,170,0.5)",
          hoverBorderColor: "rgba(255,230,170,1)",
          data: [60],
          fill: false
        }, {
          label: "Positive",
          backgroundColor: "rgba(54,162,235)",
          borderColor: "rgba(54,162,235,1)",
          hoverBackgroundColor: "rgba(54,162,235,0.5)",
          hoverBorderColor: "rgba(54,162,235,1)",
          data: [50],
          fill: false
        }, {
          label: "Negative",
          backgroundColor: "rgba(255,99,132)",
          borderColor: "rgba(255,99,132,1)",
          hoverBackgroundColor: "rgba(255,99,132,0.5)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65],
          fill: false
        }],
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Time'
            }
          }],
          yAxes: [{
            ticks: {
              max: 100,
              min: 0
            },
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Percentage'
            }
          }]
        }
      }
    });
  }
  render() {
    return (
      <div className="card mt-2">
        <div className="card-header">
          Sentiment analysis for Davido
          </div>
        <div className="card-body" style={{ maxHeight: 'auto' }}>
          <canvas ref={input => this.chart = input} />
        </div>
        {/* <div className="card-footer text-muted">
            <span className="text-danger">Negative</span>&emsp;
            <span className="text-success">Postive</span> &emsp;
            <span className="text-warning">Neutral</span>
          </div> */}
      </div>
    );
  }

}

export default Charts;