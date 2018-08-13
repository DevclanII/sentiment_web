import React from 'react'
import Chart from 'chart.js';


class Pie extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const chart = this.chart;
    var barChart = new Chart(chart, {
      type: this.props.type,
      data: {
        labels: ["Netrual", "Positive", "Negative"],
        datasets: [{
          label: "Time ",
          backgroundColor: ["rgba(255,230,170)", "rgba(54,162,235)", "rgba(255,99,132)"],
          data: [50, 30, 20]
        }]
      },
      options: {
        ticks: {
          max: 100,
          min: 0
        },
        title:{
          display: true,
          text: 'time'
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
      </div>
    );
  }

}

export default Pie;