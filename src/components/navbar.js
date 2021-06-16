import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
//link tag will allow react to handle routing instead of server. uses "to" instead of "<href></href>"

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
    <div>
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
        <div className="navbar-item" id='clock'></div>
        <NavDropdown title={`Welcome ${user}`} id="basic-nav-dropdown">
          {!activeUser && <div>
            <Link to="/signup">
              <NavDropdown.Item>Sign up</NavDropdown.Item>
            </Link>
            <Link to="/signin">
              <NavDropdown.Item>Sign in</NavDropdown.Item>
            </Link>
            
          </div>
            
          } 
          {activeUser && <div>
            <NavDropdown.Item>Profile</NavDropdown.Item>
            <NavDropdown.Item>New Post</NavDropdown.Item>
            <NavDropdown.Item>Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Sign out</NavDropdown.Item>
          </div>}
          
      </NavDropdown>
      </Navbar>
    </div>
    
  );
  
}

export default Navigation;