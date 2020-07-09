import React, { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const handleClick = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      console.log(message);
      setMessage("");
    }
  };
  return (
    <div className="chat">
      <h1>Chatbot is here</h1>
      <div>Message here</div>
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

export default Chat;
