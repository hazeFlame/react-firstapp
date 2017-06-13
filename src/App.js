import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './assets/image/logo.svg';
import './assets/css/App.css';
import Index from './components/index/index.js'
import Home from './components/home/home.js'
import About from './components/about/about.js'
import Topic from './components/topic/topic.js'

import routes from './router'

// const RouteWithSubRoutes = (route) => (
//   <Route path={route.path} render={props => (
//     <route.component {...props} routes={route.routes}/>
//   )}/>
// )

// {routes.map((route, i) => (
//   <RouteWithSubRoutes key={i} {...route}/>
// ))}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link exact={true} to="/">Index</Link>
            </li>
            <li>
              <Link to="/home">首页</Link>
            </li>
            <li>
              <Link to="/about">关于</Link>
            </li>
            <li>
              <Link to="/topic">主题列表</Link>
            </li>
          </ul>
          <hr/>
          <Route exact={true} path="/" component={Index} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topic" component={Topic} />
        </div>
      </Router>
    );
  }
}



export default App;
