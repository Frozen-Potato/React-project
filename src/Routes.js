import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import AppliedRoutes from "./components/AppliedRoutes";
import NotFound from './components/NotFound';
import ChargerMap from './components/ChargerMap'


export default function Routes({ appProps }) {
    return (
      <Switch>
        <AppliedRoutes path="/" exact component={MainPage} appProps={appProps} />
        <AppliedRoutes path="/Signin" exact component={SignIn} appProps={appProps} />
        <AppliedRoutes path="/SignUp" exact component={SignUp} appProps={appProps} />
        <AppliedRoutes path="/ChargerMap" exact component={ChargerMap} appProps={appProps} />
        { /* Gotta catch all unmatched routes */ }
        <Route component={NotFound} />
      </Switch>
    );
  }
  
