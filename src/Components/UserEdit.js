import React, { Component } from 'react';

const axios = require('axios');

const api = 'https://vacation-planner-api.herokuapp.com/api/create/users';

export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case 'email':
        this.setState({email: event.target.value});
        break;
      case 'name':
        this.setState({name: event.target.value});
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = this.state;

    const history = this.props.history;

    axios.post(api, data)
      .then(function (response) {
        history.push(`#${response.data._id}`);
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
          <h2>Create A New Profile</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div>
              <label>Email</label>
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
            </div>
            <button>Submit</button>
          </form>
        </div>
    );
  }
}
