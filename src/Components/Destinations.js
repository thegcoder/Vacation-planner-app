import React, { Component } from 'react';
import DestinationData from './DestinationData';

export default class Destinations extends Component {
  render() {
    return (
        <div>
          <DestinationData
            city='Atlanta'
            country='USA'
            description='Marinate on that'
          />
        </div>
    );
  }
}
