import React from 'react';
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomeLanding from "./Components/Pricing";
import AdminDashboard from "./Components/Admin";
import AdminLogin from "./Components/LoginAdmin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeLanding}/>
        <Route exact path = "/admin"><AdminDashboard /></Route>
        <Route exact path = "/admin/login"><AdminLogin /></Route>
      </Switch>
    </Router>
  );
}

export default App;
