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

  Submit(e){
    e.preventDefault();
    const payload = {
      Sentiment: this.Sentiment.value,
      Number: this.Numbers.value
    }
    this.props.HandleSubmit(payload)
  }
  
  render() {
    const { num, tag, isData, data, loading, error} = this.props
   // const { isData, data, loading, error} = this.state;
    if (isData === false) {
      return (
        <div
          className="pb-4"
          style={{
            paddingTop: '150px',
            zIndex: '50'
          }}>
          <div className="row text-center t mx-auto text-capitalize">
            <h1 className="display-3">
              Welcome to TwitterSent
            </h1>
            <p className="text-mute px-3 mx-auto">
              enter you search and number of tweet to generate the sentiment Analysis.
            </p>
            <div className="mx-auto pt-4">
              <form onSubmit={(e) => this.Submit(e)}>
                <div className="form-group">
                  <label htmlFor="Search">Search</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="Search"
                      id="Search"
                      ref={input => this.Sentiment = input}
                      className="form-control"
                      placeholder="Terragon, Davido, yakata"
                      aria-describedby="helpId" />
                  </div>
                  <small id="helpId" className="text-mutedt">enter mention, tag, handler to search</small>
                </div>
                <div className="form-group">
                  <label htmlFor="count">No of Tweet</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">last
                </span>
                    </div>
                    <input
                      type="number"
                      name="count"
                      id="count"
                      ref={input => this.Numbers = input}
                      className="form-control"
                      placeholder="200, 300, 400"
                      min={50}
                      max={700}
                      defaultValue={50}
                      aria-describedby="helpId" />
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">tweet
                </span>
                    </div>
                  </div>
                  <small id="helpId" className="text-muted">enter the no of last tweet to check.</small>
                </div>
                <button type="submit" id="dismis" className="btn btn-dark">Analysis</button>
              </form>
            </div>
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
          }}>
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
          paddingTop: '150px',
          zIndex: '50'
        }}>
          <div className="row text-center text-capatalize">
            <h1 className="display-3">
              An Error Occured with The Server.
            </h1>
            <p className="text-mute px-3 mx-auto">
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
          paddingTop: '130px',
          zIndex: '50'
        }}>
          <div className="row py-3">
            <div className="col-12">
              <button type="submit" className="btn btn-white" onClick={this.props.HandleRefresh}>Refresh</button>
            </div>
            <div className="col-sm-6">
              <Bar type="bar" tag={tag} num={num} label={data.time} data={data.percentages}/>
            </div>
            <div className="col-sm-6 pt-2">
              <Pie type="doughnut" tag={tag} num={num} label={data.time} data={data.percentages}/>
            </div>
            <div className="col-sm-6 pt-2">
              <Pie type="pie" tag={tag} num={num} label={data.time} data={data.percentages}/>
            </div>
            <div className="col-sm-6 pt-2">{console.log(data)}
              <Pie type="polarArea" tag={tag} num={num} label={data.time} data={data.percentages}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Activity;