import React, { Component } from 'react';
import LandingPage from './LandingPage';
import About from './About';
import Faq from './Faq';
import Try from './Try'
import '../css/App.css';
import { Route, Switch} from 'react-router-dom';

export const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="float-left d-inline-flex">
            <p>
              <a href="/">Name</a>&emsp;</p>
            <p>© 2017-2018 Company, Inc. 
            </p>
          </div>
          <p className="float-right">
            <a href="#mainNav">Back to top</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);
export class App extends Component {

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

