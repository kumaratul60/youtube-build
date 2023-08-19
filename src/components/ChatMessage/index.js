import React from "react";
import { USER_ICON } from "../../constants/constant";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center space-x-2 py-2 shadow-sm">
      <img className="h-8" src={USER_ICON} alt="user" />
      <span className="font-bold ">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
