import React from 'react';
import Bar from './Bar';
import Pie from './Pie';
import ReactLoading from "react-loading";

class Activity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: false,
      data: [],
      isData: false
    }
  }
  
  render() {
    const { num, tag, isData, data, loading, error} = this.props
   // const { isData, data, loading, error} = this.state;
    if (isData === false) {
      return (
        <div
          className="container pb-4"
          style={{
            paddingTop: '120px',
            zIndex: '50'
          }}>
          <div className="row text-center t mx-auto text-capitalize">
            <h1 className="display-3">
              Welcome to TwitterSent
            </h1>
            <p className="text-mute px-3 mx-auto">
              enter you search and number of tweet to generate the sentiment Analysis.
            </p>
          </div>
        </div>
      )
    } else if (loading === true) { 
      return (
        <div
          className="pb-4"
          style={{
            paddingTop: '120px',
            zIndex: '50'
          }}>{console.log(loading, data)}
          <ReactLoading
            type="spinningBubbles"
            color="black"
            className="m-auto py-about"
            width={80}
            height={80}/>
        </div>
      )
    } else if (error === true) {
      return (
        <div 
          className="container px-2 pb-4"
          style={{
          paddingTop: '120px',
          zIndex: '50'
        }}>
          <div className="row text-center text-capatalize">
            <h1 className="display-3">
              An Error Occured with The Server.
            </h1>
            <p className="lead mx-auto">
                there seems to be an issue with the server please try resubmiting request or try again later.
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <div
          className="pb-4"
          style={{
          paddingTop: '100px',
          zIndex: '50'
        }}>
          <div className="row py-4">
            <div className="col-sm-6">{console.log(data)}
              <Bar type="bar" tag={tag} num={num} label={data.time} data={data.percentages}/>
            </div>
            <div className="col-sm-6">
              <Pie type="doughnut" tag={tag} num={num} label={data.time} data={data.percentages}/>
            </div>
            <div className="col-sm-6">
              <Pie type="pie" tag={tag} num={num} label={data.time} data={data.percentages}/>
            </div>
            <div className="col-sm-6">
              <Pie type="polarArea" tag={tag} num={num} label={data.time} data={data.percentages}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Activity;