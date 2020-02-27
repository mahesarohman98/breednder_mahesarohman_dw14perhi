import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/button.css";
import Landing from "./page/Landing.js";
import Index from "./page/Index.js";
import Profile from "./page/Profile.js";
import Edit from "./page/Edit.js";
import AddPet from "./page/AddPet.js";

function App() {
  // const loggedIn = localStorage.getItem("auth");
  // console.log(loggedIn);

  return (
    <Router>
      <Switch>
        <Route path="/add-pet">
          <AddPet />
        </Route>
        <Route path="/Edit">
          <Edit />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/dashboard">
          <Index />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
