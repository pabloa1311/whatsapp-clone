import React from "react"
import './App.css';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <h1>whatsapp</h1>
      <div className="app__body">
        <Sidebar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
