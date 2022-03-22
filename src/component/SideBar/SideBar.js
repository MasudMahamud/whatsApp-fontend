import React from "react";
import "./SideBar.css";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
//import { Avatar, IconButton } from "@mui/material-ui/core";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="header_right">
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon/>
        </div>
        <div className="header_left"></div>
      </div>
    </div>
  );
};

export default SideBar;
