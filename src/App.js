import React from 'react'
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { Auth, Home } from "./pages";
import './App.scss';

const App = props => {
  const { isAuth } = props;
  return (
    <Switch>
        <Route exact path={["/signin", "/signup"]} 
          render={(props) => <Auth isAuth={isAuth} {...props}/>}/>
        <Route
          path="/"
          render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
        />
    </Switch>
  );
}

export default connect(({ auth }) => ({ isAuth: auth.isAuth }))(App);
