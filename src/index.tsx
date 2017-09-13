import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Route, Router} from "react-router";
import {createBrowserHistory} from 'history';
import App from "./App";


const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
