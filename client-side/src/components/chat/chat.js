import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import { userMessage, sendMessage } from "../../actions/watson";

const Chat = ({ chat, userMessage, sendMessage }) => {
  const [message, setMessage] = useState("");
  const handleClick = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      console.log(message);
      userMessage(message);
      sendMessage(message);
      setMessage("");
    }
  };
  const endOfMessages = useRef(null);
  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chat]);
  return (
    <div className="chat">
      <div className="historyContainer">
        <h1>CPF Chatbot</h1>
        {chat.length === 0
          ? ""
          : chat.map((msg) => <div className={msg.type}>{msg.message}</div>)}
        <div ref={endOfMessages}></div>
      </div>
      <input
        value={message}
        type="text"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyPress={handleClick}
        id="chat-box"
      ></input>
    </div>
  );
};

const mapStateToProps = (state) => ({
  chat: state.watson.messages,
});

export default connect(mapStateToProps, { userMessage, sendMessage })(Chat);
