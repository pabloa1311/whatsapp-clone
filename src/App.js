import React from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import {useStateValue} from "./components/StateProvider"

function App() {
  // eslint-disable-next-line
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <div className="app__title">
            <h1>CHAT EMPRESARIAL</h1>
            <h1>GRUPO RL</h1>
          </div>
          <div className="app__body">
            <Router>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Sidebar />
                  <Chat />
                </Route>
                <Route path="/">
                  <Sidebar />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
