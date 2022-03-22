import React from "react";
import "./App.css";
import Chat from "./component/Chat/Chat";
import SideBar from "./component/SideBar/SideBar";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
