import React, { Component } from 'react';
import LandingPage from './LandingPage';
import About from './About';
import '../css/App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
      </div>
    );
  }
}

export default App;
