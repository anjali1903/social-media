import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginHeader from "./components/LoginHeader.js";
import Login from "./components/Login.js";
import RegisterHeader from "./components/RegisterHeader.js";
import Register from "./components/Register.js";
import "./App.css";
import { auth } from "./firebase.js";
import HomeHeader from "./components/HomeHeader.js";
import Sidebar from "./components/Sidebar.js";
import Posts from "./components/Posts.js";

function App() {
  const [user, setUser] = useState([]);

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser);
    } else {
      setUser(false);
    }
  });
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader />
            <Login />
          </Route>
          <Route path="/register">
            <RegisterHeader />
            <Register />
          </Route>
          <Route path="/">
            <HomeHeader user={user} />
            <div className="app__page">
              <Sidebar user={user} />
              <div className="app__posts">
                <Posts user={user} />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
