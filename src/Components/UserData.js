import React, {PropTypes} from 'react';

const UserData = (props) => {
  return (
    <div>
      <h2>User: {props.name}</h2>
      <ul>
        <li>Email: {props.email}</li>
      </ul>
    </div>
  )
};

UserData.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default UserData
