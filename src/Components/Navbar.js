import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/home">Logo</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link to="/home">
              <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Auction">
              <ReactBootStrap.Nav.Link href="#Auction">Auction</ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  )
}

export default NavBar;