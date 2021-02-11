import React from 'react'
import PropTypes from 'prop-types';
import Message from '../Message/Message.jsx';
import Response from '../Response/Response.jsx';
import Typing from '../Typing/Typing.jsx';


function MessageHistory(props) {
  const { list } = props;

  if (!list.length) {
    return null;
  }

  const messageComponents = {
    message: Message,
    response: Response,
    typing: Typing,
  };

  return (
    <ul className="chat-history">
      {list.map((message) => {
        if (!(message.type in messageComponents)) {
          return null;
        }

        const MsgComponent = messageComponents[message.type];

        return (
          <li key={message.id} className="clearfix">
            <MsgComponent from={message.from} message={message} />
          </li>
        );
      })}
    </ul>
  )
}

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    from: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string,
  }))
};

MessageHistory.defaultProps = {
};

export default MessageHistory

