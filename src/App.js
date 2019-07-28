import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from './Components/Home';
import Destinations from './Components/Destinations';
import Users from './Components/Users';
import UserData from './Components/UserData';
import UserEdit from './Components/UserEdit';
import DestinationData from './Components/DestinationData';
import DestinationEdit from './Components/DestinationEdit';

import './App.css';

 export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div className='nav'>
            <div className='nav-item'><Link to={'/'}><span className='nav-logo'>VP</span></Link></div>
            <div className='nav-item'><Link to={'/destinations'}>Destinations</Link></div>
            <div className='nav-item'><Link to={'/users/view'}>Users</Link></div>
            <div className='nav-item'><a href="https://vacation-planner-api.herokuapp.com/">API</a></div>
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/destinations' component={Destinations} />
            <Route path='/destination/edit/:id' component={DestinationEdit} />
            <Route path='/destination/:id' component={DestinationData} />
            <Route path='/users' component={Users} />
            <Route path='/user/edit/:id' component={UserEdit} />
            <Route path='/user/:id' component={UserData} />
          </Switch>
        </div>
      </Router>
    )
  }
}
