import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";


const SidebarChat = () => {
  return (
    <div className="sidebar_chat">
      <Avatar />
      <div className="sidebar_chat_info">
        <h4>Mr David</h4>
        <p>last messages</p>
      </div>
    </div>
  );
};

export default SidebarChat;
