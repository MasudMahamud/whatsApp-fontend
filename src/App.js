import React, { useState, useEffect } from "react";
import "./App.css";
import Chat from "./component/Chat/Chat";
import SideBar from "./component/SideBar/SideBar";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessage] = useState([]);
  
 useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      setMessage(response.data)
    })
 }, []);

  useEffect(() => {
    const pusher = new Pusher('3db6d64916e1733ba852', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessage([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages]);
  
  console.log(messages);

  return (
    <div className="app">
      <div className="app_body">
        <SideBar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
