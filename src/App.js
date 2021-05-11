import React from "react"
import './App.css';
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__title">
        <h1>CHAT EMPRESARIAL</h1>
        <h1>GRUPO RL</h1>
      </div>
      
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
