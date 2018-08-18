import React, { Component } from 'react';
import LandingPage from './LandingPage';
import About from './About';
import Faq from './Faq';
import Try from './Try'
import '../css/App.css';
import { Route, Switch} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route  path="/About" component={About} />
          <Route  path="/Faq" component={Faq} />
          <Route  path="/Try" component={Try} />
        </Switch>
      </div>
    );
  }
}

