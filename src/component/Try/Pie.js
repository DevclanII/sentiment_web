import React from 'react'
import Chart from 'chart.js';

class Pie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Label: [],
      positive: [],
      neutral: [],
      negative: []
    }
  }
  componentDidMount() {
    this.setState({
      label: this.props.label,
      positive: this.props.data.positive,
      neutral: this.props.data.neutral,
      negative: this.props.data.negative
    })
    const chart = this.chart;
    var barChart = new Chart(chart, {
      type: this.props.type,
      data: {
        labels: ["Netrual", "Positive", "Negative"],
        datasets: [{
          label: this.props.label,
          backgroundColor: ["rgba(255,230,170)", "rgba(54,162,235)", "rgba(255,99,132)"],
          data: [this.props.data.neutral, this.props.data.positive, this.props.data.negative]
        }]
      },
      options: {
        ticks: {
          max: 100,
          min: 0
        },
        title:{
          display: true,
          text: this.props.label
        }
      }
    });

  }
  render() {
    const { tag, num } = this.props
    return (
      <div className="card mt-2">
        <div className="card-header">
          Sentiment analysis for {tag}
        </div>{console.log(this.props)}
        <div className="card-body" style={{ maxHeight: 'auto' }}>
          <canvas ref={input => this.chart = input} />
        </div>
        <div className="card-footer text-muted">
          <span className="text-danger">Based on the last {num}</span>
        </div>
      </div>
    );
  }

}

export default Pie;