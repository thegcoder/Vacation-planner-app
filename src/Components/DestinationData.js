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
        <div>
          <div className="displayImage">
            <img src={this.state.destination.imageUrl} alt={this.state.destination.name}/>
          </div>
          <h3>Country: {this.state.destination.country}</h3>
          <p>{this.state.destination.description}</p>
        </div>
        <Link to={{ pathname:`/destination/edit/${this.state.destination._id}`, state: { destination: this.state.destination } }}>
          <button className='search-btn'>Edit</button>
        </Link>
        <Link to={{ pathname:`/destination/delete/${this.state.destination._id}`, state: { destination: this.state.destination } }}>
          <button className='search-btn'>Delete</button>
        </Link>
      </div>
    )
  }
}
