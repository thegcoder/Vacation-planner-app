import React, {PropTypes} from 'react';

const DestinationData = (props) => {
  return (
    <div>
      <h1>Destination: {props.city}, {props.state} {props.country}</h1>

      <p>Description: {props.description}</p>
    </div>
  )
};

DestinationData.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default DestinationData
