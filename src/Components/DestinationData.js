import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://vacation-planner-api.herokuapp.com/api/';

export default class UserData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destination: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`${api}read/destinations/${id}`)
      .then(res => {
        this.setState({ destination: res.data });
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
        <h2>City: {this.state.destination.city}</h2>
        <ul>
          <li>
            <h3>Country: {this.state.destination.country}</h3>
            <p>{this.state.destination.description}</p>
          </li>
        </ul>
        <Link to={{ pathname:`/destination/edit/${this.state.destination._id}`, state: { destination: this.state.destination } }}>Edit</Link>
      </div>
    )
  }
}
