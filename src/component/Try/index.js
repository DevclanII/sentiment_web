import React from 'react';
import SideBar from './SideBar';
import Activity from './Activity'
import axios from 'axios';
import Nav from './Nav';
import '../side';

class Try extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Sentiment : '',
      Number: '',
      loading: false,
      error: false,
      data: [],
      isData: false
    }
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.HandleRefresh = this.HandleRefresh.bind(this);
  }

  fetchData(payload) {
    this.setState({
      data: [],
      loading: true,
      error: false,
      isData: true
    })
    axios.post(`https://api-devclan.herokuapp.com/api_server/sentiment`, {
      Sentiment: payload.Sentiment,
      Number: payload.Number
    })
      .then(res => {
          console.log(res);
        console.log(res.data);
        this.setState({
          data: res.data,
          loading: false,
          error: false,
          isData: true
        })
      })
      .catch(err => {
        // console.log(err)
        this.setState({
          data: err,
          error: true,
          loading: false,
          isData: true
        })
      })
  }

  HandleSubmit(payload){
    this.setState({
      Sentiment : payload.Sentiment,
      Number: payload.Number
    })
    this.fetchData(payload)
  }

  HandleRefresh() {
    this.fetchData(this.state)
  }
  
  render() {
    return (
      <div className="wraper">
        <div className="d-flex align-items-stretch">
          <SideBar HandleSubmit={this.HandleSubmit} />
          <div className="mx-auto" id="scrol" style={{ height: '100vh' }}>
            <div className="row">
              <Nav />
            </div>
            <Activity 
              tag={this.state.Sentiment} 
              num={this.state.Number}
              isData={this.state.isData}
              data={this.state.data}
              loading={this.state.loading}
              error={this.state.error}
              HandleSubmit={this.HandleSubmit} 
              HandleRefresh={this.HandleRefresh}
            />
          </div>
        </div>
      </div>
    )
  }
}


export default Try;