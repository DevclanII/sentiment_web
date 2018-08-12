import React, { Component } from 'react';
import LandingPage from './LandingPage';
import About from './About';
import Faq from './Faq';
import '../css/App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Faq />
      </div>
    );
  }
}

export default App;
