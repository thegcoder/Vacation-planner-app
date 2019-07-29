import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://vacation-planner-api.herokuapp.com/api/';

export default class DestinationEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      country: '',
      city: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case 'country':
        this.setState({country: event.target.value});
        break;
      case 'city':
        this.setState({city: event.target.value});
        break;
      case 'description':
        this.setState({description: event.target.value});
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = this.state;

    const history = this.props.history;

    axios.post(`${api}create/destinations`, data)
      .then(res => {
        history.push(`/destination/${res.data._id}`);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  render() {
    return (
        <div>
          <h2>Edit Destination</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>City: {this.state.city}</div>
              <input type="text" name="city" placeholder={this.state.city} onChange={this.handleChange}/>
            </div>
            <div>
              <div>Country: {this.state.country}</div>
              <input type="text" name="country" placeholder={this.state.country} onChange={this.handleChange}/>
            </div>
            <div>
              <div>Description: {this.state.description}</div>
              <input type="text" name="description" placeholder={this.state.description} onChange={this.handleChange}/>
            </div>
            <button>Submit</button>
          </form>
          <Link to={`/destination/${this.state.id}`}><button>Cancel</button></Link>
        </div>
    );
  }
}
