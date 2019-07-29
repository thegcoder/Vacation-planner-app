import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://vacation-planner-api.herokuapp.com/api/';

export default class UserCreate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      id: '',
      name: '',
      imageUrl: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case 'email':
        this.setState({email: event.target.value});
        break;
      case 'imageUrl':
        this.setState({imageUrl: event.target.value});
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

    axios.post(`${api}create/users`, data)
      .then(res => {
        history.push(`/user/${res.data._id}`);
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
          <h2>Create User</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>Name: {this.state.name}</div>
              <input type="text" name="name" placeholder={this.state.name} onChange={this.handleChange}/>
            </div>
            <div>
              <div>Email: {this.state.email}</div>
              <input type="text" name="email" placeholder={this.state.email} onChange={this.handleChange}/>
            </div>
            <div>
              <div>Image Url: {this.state.imageUrl}</div>
              <input type="text" name="imageUrl" placeholder={this.state.imageUrl} onChange={this.handleChange}/>
            </div>
            <button className='search-btn'>Submit</button>
            <Link to={'/users'}><Link to={'/users'}><input type="button" value="Cancel" className='search-btn' /></Link></Link>
          </form>
        </div>
    );
  }
}
