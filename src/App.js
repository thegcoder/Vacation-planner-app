import React, { Component } from 'react'
import {
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom'
import axios from 'axios'
import Destinations from './Components/Destinations'
import Home from './Components/Home'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stocks: []
    }
    this.handleTrackStock = this.handleTrackStock.bind(this)
  }
  componentDidMount () {
    axios.get('https://ga-stocks.herokuapp.com/stocks').then((response) => {
      this.setState({
        stocks: response.data
      })
    })
  }
  handleTrackStock (newStock) {
    let tempArray = this.state.stocks
    tempArray.push(newStock)
    this.setState({
      stocks: tempArray
    })
    this.props.history.push(`/stocks/${newStock.symbol}`)
  }
  render () {
    return (
      <div>
        <div className='nav'>
          <div className='nav-item'><span className='nav-logo'>Vacation</span></div>
          <div className='nav-item'><Link to='/'>Home</Link></div>
          <div className='nav-item'><Link to='/profile'>Profile</Link></div>
          <div className='nav-item'><Link to='/destinations'>Destination</Link></div>
        </div>

        <div className='main'>
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/destinations' component={Destination} />
            <Route path='/profile' component={Profile} />
            <Route path='/*' render={() => <Redirect to='/' />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
