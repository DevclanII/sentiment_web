import React, { Component } from 'react';
import LandingPage from './LandingPage';
import About from './About';
import Faq from './Faq';
import Try from './Try'
import '../css/App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Try />
      </div>
    );
  }
}

export default App;
