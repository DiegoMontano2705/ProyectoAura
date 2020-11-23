import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomeLanding from "./Components/Pricing";
import Checkout from "./Components/Checkout/Checkout"
import Login from "./Components/login";
import AdminDashboard from "./Components/Admin";
import AdminLogin from "./Components/LoginAdmin";
import Register from "./Components/Register";
import Contact from "./Components/Contacto";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeLanding} />'
        <Route path="/checkout" exact component={Checkout} />'
        <Route path="/login" exact component={Login}/>
        <Route exact path = "/admin"><AdminDashboard /></Route>
        <Route exact path = "/admin/login"><AdminLogin /></Route>
        <Route path="/Register" exact component={Register} />
        <Route path="/Contacto" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
