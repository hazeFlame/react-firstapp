import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import App from '../App.js'
import Home from '../components/home/home.js'
import About from '../components/about/about.js'

 const routes = (
   <Router>
       <Route exact path="/" component={Home}/>
       <Route path="/home" component={Home}/>
       <Route path="/about" component={About}/>
   </Router>
)
export default routes
