import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Response(props) {
  const { from, message } = props;

  return (
    <>
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>&nbsp;
        <FontAwesomeIcon className="me" icon={faCircle}/>
      </div>
      <div className="message other-message float-right">{message.text}</div>
    </>
  )
}

Response.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired
}

export default Response

