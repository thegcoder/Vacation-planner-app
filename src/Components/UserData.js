import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://vacation-planner-api.herokuapp.com/api/';

export default class UserData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`${api}read/users/${id}`)
      .then(res => {
        this.setState({ user: res.data });
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
        <h2>User: {this.state.user.name}</h2>
        <div className="profileImage">
          <img src={this.state.user.imageUrl} alt={this.state.user.name} />
        </div>
        <div>
          Email: {this.state.user.email}
        </div>
        <Link to={{ pathname:`/user/edit/${this.state.user._id}`, state: { user: this.state.user } }}>
          <button className='search-btn'>Edit</button>
        </Link>
        <Link to={{ pathname:`/user/delete/${this.state.user._id}`, state: { user: this.state.user } }}>
          <button className='search-btn'>Delete</button>
        </Link>
      </div>
    )
  }
}
