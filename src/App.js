import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Home from "./Components/home";
import Auction from "./Components/Auction";
import NavBar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home" component={Home}>
              <Home />
          </Route>
          <Route path="/Auction" component={Auction}>
            <Auction />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
