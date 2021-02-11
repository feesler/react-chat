import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Typing(props) {
  const { from, message } = props;

  return (
    <>
      <div className="message-data">
        <span className="message-data-name">
          <FontAwesomeIcon className="online" icon={faCircle} /> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message-typing">
        <FontAwesomeIcon className="online" icon={faCircle} />
        <FontAwesomeIcon className="online" icon={faCircle} />
        <FontAwesomeIcon className="online" icon={faCircle} />
      </div>
    </>
  )
}

Typing.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired
}

export default Typing

