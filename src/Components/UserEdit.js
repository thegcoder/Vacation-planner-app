import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://vacation-planner-api.herokuapp.com/api/';

export default class UserEdit extends Component {

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

    const id = this.state.id;

    axios.post(`${api}update/users/${id}`, data)
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

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`${api}read/users/${id}`)
      .then(res => {
        this.setState({
          email: res.data.email,
          id: res.data._id,
          name: res.data.name,
          imageUrl: res.data.imageUrl
        });
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
          <h2>Edit User</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>{this.state.name}</div>
              <label>Edit:</label>
              <input type="text" name="name" placeholder={this.state.name} onChange={this.handleChange}/>
            </div>
            <div>
              <div>{this.state.email}</div>
              <label>Edit:</label>
              <input type="text" name="email" placeholder={this.state.email} onChange={this.handleChange}/>
            </div>
            <div>
              <div>{this.state.imageUrl}</div>
              <label>Edit:</label>
              <input type="text" name="imageUrl" placeholder={this.state.imageUrl} onChange={this.handleChange}/>
            </div>
            <button>Submit</button>
          </form>
          <Link to={`/user/${this.state.id}`}><button>Cancel</button></Link>
        </div>
    );
  }
}
