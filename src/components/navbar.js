import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useState, useEffect} from 'react'

// using parenthesis automatically invoke function in JSX
//use anonymous functions instead 
const Navigation = (props) => {
  const activeUser = props.user;
  
  function clickHandler(e, message) {
    console.log(`Hello ${message}`);
  }
  const user = "Guest";
  if(activeUser){
    user = activeUser;
  }
  return(
    <Navbar bg= "dark" variant="dark">
    <Navbar.Brand href="/">
      <img
        alt=""
        src="favicon.ico"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{'Rapp'}

    </Navbar.Brand>
    <div className="links">
      {
      <Nav.Item>
        <p className="navbar-item">
          Welcome {user}!  
        </p>
      </Nav.Item>
      }
    </div>
    <div className="navbar-item" id='clock'></div>
  </Navbar>
  );
  
}

export default Navigation;