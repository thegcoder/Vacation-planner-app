import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import Home from './Components/Home'
import Destinations from './Components/Destinations'
import User from './Components/User'

import './App.css'

 export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div className='nav'>
            <div className='nav-item'><Link to={'/'}><span className='nav-logo'>VP</span></Link></div>
            <div className='nav-item'><Link to={'/profile'}>Profile</Link></div>
            <div className='nav-item'><Link to={'/destinations'}>Destinations</Link></div>
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/destinations' component={Destinations} />
            <Route path='/profile' component={User} />
          </Switch>
        </div>
      </Router>
    )
  }
}
