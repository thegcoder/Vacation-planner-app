import React, {PropTypes} from 'react';

const UserData = (props) => {
  return (
    <div>
      <h1>Profile: {props.name}</h1>

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
