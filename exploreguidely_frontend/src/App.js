import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Users from "./user/pages/User";
import NewPlace from "./Places/pages/NewPlaces";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
};

export default App;
