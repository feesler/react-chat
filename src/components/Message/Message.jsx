import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCircle);

function Message(props) {
  const { from, message } = props;

  return (
    <>
      <div className="message-data">
        <span className="message-data-name">
          <FontAwesomeIcon className="online" icon={faCircle} /> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </>
  )
}

Message.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired
}

export default Message

