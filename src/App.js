import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './assets/image/logo.svg';
import './assets/css/App.css';
import routes from './router'

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // 把自路由向下传递来达到嵌套。
    <route.component {...props} routes={route.routes}/>
  )}/>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link exact to="/">Index</Link>
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

          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
        </div>
      </Router>
    );
  }
}



export default App;
