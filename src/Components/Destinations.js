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
        </div>
    );
  }
}
