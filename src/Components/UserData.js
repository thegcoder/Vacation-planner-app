import React, { Component } from 'react';

export default class UserData extends Component {
  constructor(props) {
    super(props);

    this.state = props.location.state;
  }

  render() {
    return (
      <div>
        <h2>User: {this.state.user.name}</h2>
        <ul>
          <li>Email: {this.state.user.email}</li>
        </ul>
      </div>
    )
  }
}
