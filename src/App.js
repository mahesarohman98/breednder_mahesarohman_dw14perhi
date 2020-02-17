import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/button.css";
import { Landing, Index, Profile, Edit, AddPet } from './page/Landing';

function App() {
  const loggedIn = localStorage.getItem("isLogin");
  console.log(loggedIn);

  return (
    <Router>
      <Switch>
        <Route path="/add-pet">
          {loggedIn ? <AddPet /> : <Redirect to="/" />}
        </Route>
        <Route path="/Edit">{loggedIn ? <Edit /> : <Redirect to="/" />}</Route>
        <Route path="/profile">
          {loggedIn ? <Profile /> : <Redirect to="/" />}
        </Route>
        <Route path="/dashboard">
          {loggedIn ? <Index /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          {loggedIn === true ? <Redirect to="/dashboard" /> : <Landing />}
        </Route>
      </Switch>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
