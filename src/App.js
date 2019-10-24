import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import MainPage from "./components/MainPage.js"
import SignUp from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'
import NotFound from './components/NotFound'
import { Navbar , Nav , NavItem } from 'react-bootstrap'
import './css/App.css'
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import { Auth } from "aws-amplify";


function App(props){
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }
  
  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
    props.history.push("/Signin");

  }
  
  
  return (
    !isAuthenticating &&
    <div className="App Container">
       <Navbar fluid collapseOnSelect bg='light' expand='lg'>
          <Navbar.Brand>
            <Link to="/">React-project</Link>
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
            {isAuthenticated ? <NavItem onClick={handleLogout}>Logout</NavItem> : <>
            <LinkContainer to="/SignUp">
            <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/Signin">
            <NavItem>Login</NavItem>
            </LinkContainer>
    </>
}

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
 
    </div>
  )
}

export default withRouter(App);
