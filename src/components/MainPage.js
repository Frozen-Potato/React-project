import "../css/home.css";
import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import {Button} from "react-bootstrap";

export default function MainPage() {
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
  
  return (
    <div className="MainPage">
      <div className="lander">
        <h1>Car Charger Map</h1>
        <p>A React Project</p>
        {isAuthenticated
            ? <Button href='/ChargerMap'>Show Charger Map</Button>:<></>
            }
      </div>
    </div>
  );
}
