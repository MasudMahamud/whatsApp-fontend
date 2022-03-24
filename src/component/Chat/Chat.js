import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFile from "@mui/icons-material/AttachFile";
import InsertEmotionIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import { MoreVert, SearchOutlined } from "@mui/icons-material";
import axios from "../../axios";

const Chat = ({ messages }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "David",
      timestamp: "just now",
      received: true,
    });

    setInput('');
  };

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
        {messages.map((message) => (
          <p className={`chat_message ${message.received && "chat_receiver"}`}>
            <span className="chat_name"> {message.name} </span>
            {message.message}
            <span className="chat_time"> {message.timestamp} </span>
          </p>
        ))}
      </div>

      <div className="chat_footer">
        <IconButton>
          <InsertEmotionIcon />
        </IconButton>

        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            {" "}
            send a message
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
