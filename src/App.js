import React from 'react';
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomeLanding from "./Components/Pricing";
import Login from "./Components/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeLanding}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
