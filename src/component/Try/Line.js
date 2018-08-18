import React from 'react'
import Chart from 'chart.js';


class LIne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Label: [],
      positive: [],
      neutral: [],
      negative: []
    }
  }
  componentDidMount(){
    this.data();
    this.neg();
    this.pos();
    this.net();
    const chart = this.chart;

    var barChart = new Chart(chart, {
      type: this.props.type,
      data: {
        labels: ["12:00", "12:01"],
        datasets: [{
          label: "Neutral",
          backgroundColor: "rgba(255,230,170,0.2)",
          borderColor: "rgba(255,230,170,1)",
          hoverBackgroundColor: "rgba(255,230,170,0.5)",
          hoverBorderColor: "rgba(255,230,170,1)",
          data: [60, 50, 90, 87, 53, 35, 60],
          fill: false
        }, {
          label: "Positive",
          backgroundColor: "rgba(54,162,235,0.2)",
          borderColor: "rgba(54,162,235,1)",
          hoverBackgroundColor: "rgba(225,162,235,0.5)",
          hoverBorderColor: "rgba(54,162,235,1)",
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: false
        }, {
          label: "Negative",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          hoverBackgroundColor: "rgba(255,99,132,0.5)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 90, 81, 56, 55, 40],
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


  data() {
    this.setState((prevState, props) => ({
      label: props.label.concat(prevState)
    }))
  }

  pos() {
    this.setState((prevState, props) => ({
      positive: props.positive.concat(prevState)
    }))
  }
  neg() {
    this.setState((prevState, props) => ({
      negative: props.negative.concat(prevState)
    }))
  }
  net() {
    this.setState((prevState, props) => ({
      neutral: props.neutral.concat(prevState)
    }))
  }

  render() {
    return (
      <div className="card mt-2">
        <div className="card-header">
          Sentiment analysis for Davido
          </div>{console.log(this.state)}
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

export default LIne;