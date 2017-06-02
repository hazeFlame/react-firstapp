import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from '../components/index/index.js'
import Home from '../components/home/home.js'
import About from '../components/about/about.js'
import Topic from '../components/topic/topic.js'

const routes = [
  {
    path : '/',
    component: Index
  },
  {
    path : '/home',
    component: Home
  },
  {
    path : '/about',
    component : About
  },
  {
    path : '/topic',
    component : Topic
  }
]

export default routes
