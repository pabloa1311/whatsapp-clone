import React from "react";
import "./Sidebar.css";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <QuestionAnswerIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
          <SidebarChat addNewChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
