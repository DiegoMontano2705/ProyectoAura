import React from 'react';
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomeLanding from "./Components/Pricing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeLanding}/>
      </Switch>
    </Router>
  );
}

export default App;
