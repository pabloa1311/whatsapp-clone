import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "../firebase";
import { Link } from "react-router-dom";

function SidebarChat({ addNewChat, id, name }) {
  // const [seed, setSeed] = useState("");

  // useEffect(() => {
  //     setSeed(Math.floor(Math.random()*5000))
  // }, [])

  const createChat = () => {
    const roomName = prompt("Please enter name for a new chat");

    if (roomName) {
      // Do clever database stuff
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        {/* <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>      */}
        <Avatar src={`https://avatars.dicebear.com/api/initials/${name}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
