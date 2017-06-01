import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import App from './App';
import routes from './router';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/index.css';


const RouterTree = () => {
  return <Route routes={routes}/>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
registerServiceWorker();
