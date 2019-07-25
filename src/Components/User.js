import React, { Component } from 'react';
import UserData from './UserData';

export default class User extends Component {
  render() {
    return (
        <div>
          <UserData
            name='The G Coder'
            email='thegcoder@whatever.com'
          />
        </div>
    );
  }
}
