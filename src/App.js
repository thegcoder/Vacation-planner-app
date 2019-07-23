import React, { Component } from 'react'
import {
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom'
import axios from 'axios'
import Dashboard from './Components/Dashboard'
import Search from './Components/Search'
import About from './Components/About'
import Stock from './Components/Stocks'
import './Components/App.css'

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
          <div className='nav-item'><span className='nav-logo'>iStocks</span></div>
          <div className='nav-item'><Link to='/stocks'>Home</Link></div>
          <div className='nav-item'><Link to='/search'>Search</Link></div>
          <div className='nav-item'><Link to='/about'>About</Link></div>
        </div>

        <div className='main'>
          <Switch>
            <Route exact path='/stocks' render={() => <Dashboard stocks={this.state.stocks} />} />
            <Route path='/search' render={() => <Search handleTrackStock={this.handleTrackStock} />} />
            <Route path='/about' component={About} />
            <Route path='/stocks/:symbol' component={Stock} />
            <Route path='/*' render={() => <Redirect to='/stocks' />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
