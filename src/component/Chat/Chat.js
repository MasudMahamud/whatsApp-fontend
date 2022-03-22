import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFile from "@mui/icons-material/AttachFile";
import InsertEmotionIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import { MoreVert, SearchOutlined } from "@mui/icons-material";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chart_header">
        <Avatar />

        <div className="chat_header_info">
          <h4>Mr David</h4>
          <p>last seen...</p>
        </div>

        <div className="chat_head_right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name"> Mr Lorry </span>
          This is a message
          <span className="chat_time"> {new Date().toLocaleString()} </span>
        </p>

        <p className="chat_message chat_receiver">
          <span className="chat_name"> Mr Bean </span>
          This is a message
          <span className="chat_time"> {new Date().toLocaleString()} </span>
        </p>

        <p className="chat_message">
          <span className="chat_name"> Mr Lorry </span>
          This is a message
          <span className="chat_time"> {new Date().toLocaleString()} </span>
        </p>

        <p className="chat_message chat_receiver">
          <span className="chat_name"> Mr Bean </span>
          This is a message
          <span className="chat_time"> {new Date().toLocaleString()} </span>
        </p>
      </div>

      <div className="chat_footer">
        <IconButton>
          <InsertEmotionIcon />
        </IconButton>

        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit"> send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
