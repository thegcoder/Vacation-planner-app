import React, { Component } from 'react';

export default class UserData extends Component {
  constructor(props) {
    super(props);

    this.state = props.location.state;
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
      </div>
    )
  }
}
