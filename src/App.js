import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import Home from './Components/Home'
import Destinations from './Components/Destinations'
import Users from './Components/Users'
import UserEdit from './Components/UserEdit'

import './App.css'

 export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div className='nav'>
            <div className='nav-item'><Link to={'/'}><span className='nav-logo'>VP</span></Link></div>
            <div className='nav-item'><Link to={'/destinations'}>Destinations</Link></div>
            <div className='nav-item'><Link to={'/users'}>Users</Link></div>
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/destinations' component={Destinations} />
            <Route path='/users' component={Users} />
            <Route path='/users/edit' component={UserEdit} />
          </Switch>
        </div>
      </Router>
    )
  }
}
