import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'jquery';
import 'popper.js';
import 'mdbreact/dist/mdbreact.js';
import 'mdbreact/dist/scss/_custom-styles.scss';
import 'mdbreact/dist/scss/mdb.scss';
import './side';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
