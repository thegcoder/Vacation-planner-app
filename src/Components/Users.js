import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

const api = 'https://vacation-planner-api.herokuapp.com/api/all/users';

export default class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get(api)
      .then(res => {
          const users = res.data;
          console.log(users);
          this.setState({users});
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
          <h2>Users</h2>
          {this.state.users.map((user, index) => {
            return (
              <div key={user._id}>
                <Link to={`/user/${user._id}`}>{user.name}</Link>
              </div>
            )
          })}
        </div>
    );
  }
}
