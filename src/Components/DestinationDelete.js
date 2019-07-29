import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://vacation-planner-api.herokuapp.com/api/';

export default class DestinationDelete extends Component {

  constructor(props) {
    super(props);

    this.state = {
      country: '',
      city: '',
      description: '',
      imageUrl: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = this.state;

    const history = this.props.history;

    const id = this.state.id;

    axios.post(`${api}delete/destinations/${id}`, data)
      .then(res => {
        history.push(`/destinations`);
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

    axios.get(`${api}read/destinations/${id}`)
      .then(res => {
        this.setState({
          country: res.data.country,
          city: res.data.city,
          description: res.data.description,
          id: res.data._id,
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
          <h2>Delete Destination</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>{this.state.city}</div>
              </div>
            <div>
              <div>{this.state.country}</div>
            </div>
            <div>
              <div>{this.state.imageUrl}</div>
            </div>
            <div>
              <div>{this.state.description}</div>
            </div>
            <button className='search-btn'>Submit</button>
            <Link to={`/destination/${this.state.id}`}><input type="button" value="Cancel" className='search-btn' /></Link>
          </form>
        </div>
    );
  }
}
