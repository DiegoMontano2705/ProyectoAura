import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomeLanding from "./Components/Pricing";
import Checkout from "./Components/Checkout/Checkout"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeLanding} />'
        <Route path="/checkout" exact component={Checkout} />'
      </Switch>
    </Router>
  );
}

export default App;
