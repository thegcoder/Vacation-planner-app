import React, { Component } from 'react';
import DestinationData from './DestinationData';

import axios from 'axios'

export default class Destinations extends Component {
  state = {
    destinations: []
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/name/usa')
      .then(res => {
          const destinations = res.data;
          this.setState({ destinations });
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
            <ul>
              { this.state.destinations.map(destination => <li>{destination.name}</li>)}
            </ul>
            <form>
  //get request
  export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/capital/{capital}`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}
//postinstall
export default class PersonList extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://restcountries.eu/rest/v2/capital/{capital}`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            City Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
//delete form
export default class CityList extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://restcountries.eu/rest/v2/capital/{capital}/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            City ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}
              <input type="text" name="country"/>
            </form>
        </div>
    );
  }
}
